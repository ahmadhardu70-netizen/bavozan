// ============================================
// BAVOZAN GROUP – Admin Panel Logic
// ============================================

const ADMIN_USER = 'bavozan';
const ADMIN_PASS = 'whoop20062026';

// ======== LOGIN ========
function doLogin() {
  const user = document.getElementById('loginUser').value.trim();
  const pass = document.getElementById('loginPass').value.trim();
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'flex';
    sessionStorage.setItem('bavAdmin', '1');
    initAdmin();
  } else {
    document.getElementById('loginErr').textContent = '❌ Invalid credentials. Try again.';
    document.getElementById('loginPass').value = '';
  }
}

function logout() {
  sessionStorage.removeItem('bavAdmin');
  document.getElementById('adminPanel').style.display = 'none';
  document.getElementById('loginScreen').style.display = 'flex';
  document.getElementById('loginUser').value = '';
  document.getElementById('loginPass').value = '';
}

// Check session
document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('bavAdmin') === '1') {
    document.getElementById('loginScreen').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'flex';
    initAdmin();
  }
});

// ======== INIT ========
function initAdmin() {
  renderDashboard();
  updatePendingBadge();
}

// ======== PAGE NAVIGATION ========
function showPage(page) {
  document.querySelectorAll('.page-section').forEach(s => s.style.display = 'none');
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));

  const el = document.getElementById('page-' + page);
  if (el) el.style.display = 'block';

  // Activate correct sidebar link
  document.querySelectorAll('.sidebar-link').forEach(l => {
    if (l.textContent.toLowerCase().includes(page.replace('-', ' '))) l.classList.add('active');
  });

  // Specific renderers
  if (page === 'dashboard') renderDashboard();
  else if (page === 'orders') renderOrders();
  else if (page === 'products') renderProductsTable();
  else if (page === 'add-product') {
    document.getElementById('addProductTitle').textContent = 'Add New Product';
    document.getElementById('editProductId').value = '';
    resetProductForm();
  }
  else if (page === 'inventory') renderInventory();
  else if (page === 'analytics') renderAnalytics();
}

// ======== LOAD DATA ========
function getOrders() { return JSON.parse(localStorage.getItem('bavozanOrders') || '[]'); }
function getAdminProducts() { return JSON.parse(localStorage.getItem('bavozanProducts') || '[]'); }
function getAllProducts() {
  const defaults = getDefaultProducts();
  const admin = getAdminProducts();
  return [...defaults, ...admin];
}

function getDefaultProducts() {
  return [
    { id: 'w5-new-1', category: 'whoop5', name: 'WHOOP 5.0', badge: 'New', image: null, emoji: '⌚' },
    { id: 'w5-nosub-1', category: 'whoop5', name: 'WHOOP 5.0 (No Sub)', badge: 'New', image: null, emoji: '⌚' },
    { id: 'w4-new-1', category: 'whoop4', name: 'WHOOP 4.0 Peak', badge: 'Peak', image: null, emoji: '⌚' },
    { id: 'w4-nosub-1', category: 'whoop4', name: 'WHOOP 4.0 Peak (No Sub)', badge: 'Peak', image: null, emoji: '⌚' },
    { id: 'w5-used-1', category: 'used', name: 'WHOOP 5.0 (Used)', badge: 'Used', image: null, emoji: '⌚' },
    { id: 'w5-used-nosub', category: 'used', name: 'WHOOP 5.0 (Used, No Sub)', badge: 'Used', image: null, emoji: '⌚' },
    { id: 'w4-used-1', category: 'used', name: 'WHOOP 4.0 Peak (Used)', badge: 'Used', image: null, emoji: '⌚' },
    { id: 'band-black', category: 'band', name: 'Band – Onyx Black', badge: 'Band', image: null, emoji: '🖤' },
    { id: 'band-white', category: 'band', name: 'Band – Alpine White', badge: 'Band', image: null, emoji: '🤍' },
    { id: 'band-red', category: 'band', name: 'Band – Scarlet Red', badge: 'Band', image: null, emoji: '❤️' },
  ];
}

// ======== DASHBOARD ========
function renderDashboard() {
  const orders = getOrders();
  const products = getAllProducts();
  const pending = orders.filter(o => o.status === 'pending' || !o.status).length;
  const delivered = orders.filter(o => o.status === 'delivered').length;
  const kurdOrders = orders.filter(o => o.city && (
    o.city.toLowerCase().includes('erbil') || o.city.toLowerCase().includes('sulaymaniyah') ||
    o.city.toLowerCase().includes('duhok') || o.city.toLowerCase().includes('kirkuk') ||
    o.city.toLowerCase().includes('halabja') || o.city.toLowerCase().includes('zakho') ||
    o.city.toLowerCase().includes('ranya') || o.city.toLowerCase().includes('koya') ||
    o.city.toLowerCase().includes('shaqlawa') || o.city.toLowerCase().includes('akre') ||
    o.city.toLowerCase().includes('soran')
  )).length;

  document.getElementById('statsRow').innerHTML = `
    <div class="stat-card">
      <div class="sc-icon">📦</div>
      <div class="sc-num">${orders.length}</div>
      <div class="sc-label">Total Orders</div>
    </div>
    <div class="stat-card warning">
      <div class="sc-icon">⏳</div>
      <div class="sc-num">${pending}</div>
      <div class="sc-label">Pending Orders</div>
    </div>
    <div class="stat-card success">
      <div class="sc-icon">✅</div>
      <div class="sc-num">${delivered}</div>
      <div class="sc-label">Delivered</div>
    </div>
    <div class="stat-card info">
      <div class="sc-icon">⌚</div>
      <div class="sc-num">${products.length}</div>
      <div class="sc-label">Products Listed</div>
    </div>
  `;

  // Recent orders (last 5)
  const recent = orders.slice(0, 5);
  renderOrdersTable(recent, 'recentOrdersTable', true);

  // Week chart (mock visual)
  const chart = document.getElementById('weekChart');
  if (chart) {
    const heights = [30, 50, 40, 70, 55, 90, 65];
    chart.innerHTML = heights.map(h =>
      `<div class="chart-bar" style="height:${h}%"></div>`
    ).join('');
  }
}

// ======== ORDERS ========
function renderOrders() {
  const statusFilter = document.getElementById('orderFilterStatus')?.value || '';
  let orders = getOrders();
  if (statusFilter) orders = orders.filter(o => (o.status || 'pending') === statusFilter);
  renderOrdersTable(orders, 'ordersTableContainer', false);
  updatePendingBadge();
}

function renderOrdersTable(orders, containerId, compact) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (orders.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="es-icon">📭</div><p>No orders found</p></div>`;
    return;
  }

  container.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Customer</th>
          <th>Product</th>
          <th>City</th>
          <th>Delivery</th>
          <th>Status</th>
          <th>Date</th>
          ${!compact ? '<th>Actions</th>' : ''}
        </tr>
      </thead>
      <tbody>
        ${orders.map((o, i) => `
          <tr>
            <td style="color:var(--w30);font-size:11px;">#${o.id || i + 1}</td>
            <td>
              <div style="font-weight:700;">${o.name || '—'}</div>
              <div style="font-size:11px;color:var(--w60);">${o.phone || ''}</div>
            </td>
            <td style="max-width:160px;font-size:12px;">${o.product || '—'}</td>
            <td><span style="font-size:12px;">📍 ${o.city || '—'}</span></td>
            <td><span style="font-size:12px;font-weight:700;color:var(--burg-l);">${o.deliveryFee || '—'}</span></td>
            <td>${renderStatusBadge(o.status || 'pending')}</td>
            <td style="font-size:11px;color:var(--w60);">${o.date ? new Date(o.date).toLocaleDateString() : '—'}</td>
            ${!compact ? `
            <td>
              <div style="display:flex;gap:6px;flex-wrap:wrap;">
                <button class="btn-success btn-sm" onclick="updateOrderStatus('${o.id}','confirmed')">✓ Confirm</button>
                <button class="btn-warn btn-sm" onclick="updateOrderStatus('${o.id}','shipped')">🚚 Ship</button>
                <button class="btn-ghost btn-sm" onclick="updateOrderStatus('${o.id}','delivered')">✅ Done</button>
                <button class="btn-danger btn-sm" onclick="deleteOrder('${o.id}')">✕</button>
                <button class="btn-ghost btn-sm" onclick="viewOrder('${o.id}')">👁</button>
              </div>
            </td>` : ''}
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function renderStatusBadge(status) {
  const map = {
    pending: '<span class="status-badge status-pending">⏳ Pending</span>',
    confirmed: '<span class="status-badge status-confirmed">✓ Confirmed</span>',
    shipped: '<span class="status-badge status-shipped">🚚 Shipped</span>',
    delivered: '<span class="status-badge status-delivered">✅ Delivered</span>',
    cancelled: '<span class="status-badge status-cancelled">✕ Cancelled</span>',
  };
  return map[status] || map.pending;
}

function updateOrderStatus(id, status) {
  const orders = getOrders();
  const idx = orders.findIndex(o => String(o.id) === String(id));
  if (idx === -1) return;
  orders[idx].status = status;
  localStorage.setItem('bavozanOrders', JSON.stringify(orders));
  renderOrders();
  showToast(`Order status updated to: ${status}`, 'success');
  updatePendingBadge();
}

function deleteOrder(id) {
  if (!confirm('Delete this order?')) return;
  let orders = getOrders();
  orders = orders.filter(o => String(o.id) !== String(id));
  localStorage.setItem('bavozanOrders', JSON.stringify(orders));
  renderOrders();
  showToast('Order deleted', 'danger');
  updatePendingBadge();
}

function clearAllOrders() {
  if (!confirm('Delete ALL orders? This cannot be undone!')) return;
  localStorage.removeItem('bavozanOrders');
  renderOrders();
  renderDashboard();
  showToast('All orders cleared', 'danger');
  updatePendingBadge();
}

function viewOrder(id) {
  const orders = getOrders();
  const o = orders.find(o => String(o.id) === String(id));
  if (!o) return;
  document.getElementById('orderDetailContent').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <div class="form-group"><label>Customer Name</label><div style="padding:10px;background:var(--b4);border-radius:8px;">${o.name}</div></div>
      <div class="form-group"><label>Phone</label><div style="padding:10px;background:var(--b4);border-radius:8px;">${o.phone}</div></div>
      <div class="form-group"><label>City</label><div style="padding:10px;background:var(--b4);border-radius:8px;">📍 ${o.city}</div></div>
      <div class="form-group"><label>Delivery Fee</label><div style="padding:10px;background:var(--b4);border-radius:8px;color:var(--burg-l);font-weight:700;">${o.deliveryFee}</div></div>
      <div class="form-group" style="grid-column:1/-1;"><label>Product</label><div style="padding:10px;background:var(--b4);border-radius:8px;font-weight:700;">⌚ ${o.product}</div></div>
      <div class="form-group" style="grid-column:1/-1;"><label>Address</label><div style="padding:10px;background:var(--b4);border-radius:8px;">${o.address || '—'}</div></div>
      ${o.notes ? `<div class="form-group" style="grid-column:1/-1;"><label>Notes</label><div style="padding:10px;background:var(--b4);border-radius:8px;">${o.notes}</div></div>` : ''}
      <div class="form-group"><label>Order Date</label><div style="padding:10px;background:var(--b4);border-radius:8px;font-size:12px;">${o.date ? new Date(o.date).toLocaleString() : '—'}</div></div>
      <div class="form-group"><label>Status</label><div style="padding:10px;background:var(--b4);border-radius:8px;">${renderStatusBadge(o.status || 'pending')}</div></div>
    </div>
    <div style="display:flex;gap:10px;margin-top:8px;flex-wrap:wrap;">
      <button class="btn-success" onclick="updateOrderStatus('${o.id}','confirmed');closeOrderModal()">✓ Confirm</button>
      <button class="btn-warn" onclick="updateOrderStatus('${o.id}','shipped');closeOrderModal()">🚚 Mark Shipped</button>
      <button class="btn-burg" onclick="updateOrderStatus('${o.id}','delivered');closeOrderModal()">✅ Mark Delivered</button>
      <a href="https://wa.me/${o.phone ? o.phone.replace(/[^0-9]/g,'') : '9647501957254'}" target="_blank" class="btn-ghost">💬 WhatsApp Customer</a>
    </div>
  `;
  document.getElementById('orderDetailModal').classList.add('open');
}

function closeOrderModal() {
  document.getElementById('orderDetailModal').classList.remove('open');
}

function updatePendingBadge() {
  const orders = getOrders();
  const p = orders.filter(o => !o.status || o.status === 'pending').length;
  const badge = document.getElementById('pendingBadge');
  if (badge) badge.textContent = p > 0 ? p : '';
}

// ======== PRODUCTS TABLE ========
function renderProductsTable() {
  const adminProducts = getAdminProducts();
  const defaults = getDefaultProducts();
  const all = [...defaults, ...adminProducts];
  const container = document.getElementById('productsTableContainer');
  if (!container) return;

  if (all.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="es-icon">⌚</div><p>No products yet</p></div>`;
    return;
  }

  container.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Badge</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        ${all.map(p => `
          <tr>
            <td>
              ${p.image
                ? `<img src="${p.image}" style="width:48px;height:48px;object-fit:cover;border-radius:8px;border:1px solid var(--w05);">`
                : `<div class="product-thumb">${p.emoji || '⌚'}</div>`}
            </td>
            <td style="font-weight:700;">${p.name}</td>
            <td>${getCatLabel(p.category)}</td>
            <td><span style="background:rgba(107,15,26,.15);border:1px solid rgba(107,15,26,.3);padding:3px 10px;border-radius:20px;font-size:11px;font-weight:700;">${p.badge || '—'}</span></td>
            <td style="font-size:11px;color:var(--w60);">${defaults.find(d=>d.id===p.id) ? '🏭 Default' : '✏️ Custom'}</td>
            <td>
              <div style="display:flex;gap:6px;">
                ${!defaults.find(d=>d.id===p.id) ? `
                  <button class="btn-warn btn-sm" onclick="editProduct('${p.id}')">✏️ Edit</button>
                  <button class="btn-danger btn-sm" onclick="deleteProduct('${p.id}')">✕ Remove</button>
                ` : `<span style="font-size:11px;color:var(--w30);">System default</span>`}
              </div>
            </td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function getCatLabel(cat) {
  const map = { whoop5: '⌚ WHOOP 5.0', whoop4: '⌚ WHOOP 4.0', band: '🎽 Band', used: '♻️ Used' };
  return map[cat] || cat;
}

function editProduct(id) {
  const products = getAdminProducts();
  const p = products.find(p => p.id === id);
  if (!p) return;

  document.getElementById('editProductId').value = id;
  document.getElementById('pName').value = p.name || '';
  document.getElementById('pCategory').value = p.category || 'whoop5';
  document.getElementById('pGen').value = p.gen || '';
  document.getElementById('pBadge').value = p.badge || '';
  document.getElementById('pDesc').value = p.desc || '';
  document.getElementById('pSub').value = p.sub || 'with';
  document.getElementById('pCondition').value = p.condition || 'new';
  document.getElementById('pTags').value = (p.tags || []).join(', ');

  if (p.image) {
    const preview = document.getElementById('imgPreview');
    preview.src = p.image;
    preview.style.display = 'block';
  }

  document.getElementById('addProductTitle').textContent = 'Edit Product';
  showPage('add-product');
}

function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  let products = getAdminProducts();
  products = products.filter(p => p.id !== id);
  localStorage.setItem('bavozanProducts', JSON.stringify(products));
  renderProductsTable();
  showToast('Product removed', 'danger');
}

// ======== ADD/EDIT PRODUCT ========
function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;
  if (file.size > 5 * 1024 * 1024) {
    showToast('Image too large (max 5MB)', 'danger');
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const preview = document.getElementById('imgPreview');
    preview.src = e.target.result;
    preview.style.display = 'block';
  };
  reader.readAsDataURL(file);
}

function saveProduct() {
  const name = document.getElementById('pName').value.trim();
  const category = document.getElementById('pCategory').value;
  const gen = document.getElementById('pGen').value.trim();
  const badge = document.getElementById('pBadge').value.trim();
  const desc = document.getElementById('pDesc').value.trim();
  const sub = document.getElementById('pSub').value;
  const condition = document.getElementById('pCondition').value;
  const tagsRaw = document.getElementById('pTags').value;
  const imgEl = document.getElementById('imgPreview');
  const image = (imgEl.style.display !== 'none' && imgEl.src && imgEl.src !== window.location.href) ? imgEl.src : null;
  const editId = document.getElementById('editProductId').value;

  if (!name || !desc) {
    showToast('Please fill in name and description', 'danger');
    return;
  }

  const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];
  const tagClasses = tags.map(t => t.toLowerCase().includes('subscription') && !t.toLowerCase().includes('no') ? 'sub' : (t.toLowerCase().includes('no sub') ? 'no-sub' : ''));

  // Determine emoji
  const emojiMap = { whoop5: '⌚', whoop4: '⌚', band: '🎽', used: '♻️' };
  const emoji = emojiMap[category] || '⌚';

  const subLabel = sub === 'with' ? 'With Subscription' : sub === 'without' ? 'No Subscription' : '';
  const condLabel = condition === 'new' ? 'New' : condition === 'used-excellent' ? 'Used – Excellent' : condition === 'used-good' ? 'Used – Good' : 'Refurbished';

  const product = {
    id: editId || 'admin-' + Date.now(),
    name, category, gen, badge, desc, sub, condition, emoji,
    tags: tags.length > 0 ? tags : [condLabel, ...(subLabel ? [subLabel] : [])],
    tagClasses: tags.length > 0 ? tagClasses : ['', sub === 'with' ? 'sub' : 'no-sub'],
    image,
    badgeClass: category === 'used' ? 'used' : (condition === 'new' ? 'new' : ''),
  };

  let products = getAdminProducts();
  if (editId) {
    const idx = products.findIndex(p => p.id === editId);
    if (idx !== -1) products[idx] = product;
    else products.push(product);
  } else {
    products.push(product);
  }

  localStorage.setItem('bavozanProducts', JSON.stringify(products));
  showToast(editId ? 'Product updated!' : 'Product added!', 'success');
  resetProductForm();

  setTimeout(() => showPage('products'), 500);
}

function resetProductForm() {
  document.getElementById('pName').value = '';
  document.getElementById('pCategory').value = 'whoop5';
  document.getElementById('pGen').value = '';
  document.getElementById('pBadge').value = '';
  document.getElementById('pDesc').value = '';
  document.getElementById('pSub').value = 'with';
  document.getElementById('pCondition').value = 'new';
  document.getElementById('pTags').value = '';
  document.getElementById('editProductId').value = '';
  const prev = document.getElementById('imgPreview');
  prev.src = ''; prev.style.display = 'none';
  document.getElementById('pImageInput').value = '';
}

// ======== INVENTORY ========
function renderInventory() {
  const products = getAllProducts();
  const catMap = { whoop5: 'WHOOP 5.0', whoop4: 'WHOOP 4.0 Peak', band: 'Bands', used: 'Used Devices' };
  const grouped = {};
  products.forEach(p => {
    const cat = catMap[p.category] || p.category;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(p);
  });

  const html = Object.entries(grouped).map(([cat, items]) => `
    <div style="margin-bottom:24px;">
      <div style="font-size:13px;font-weight:700;margin-bottom:12px;color:var(--burg-l);">📦 ${cat} (${items.length} items)</div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;">
        ${items.map(p => `
          <div style="background:var(--b4);border:1px solid var(--w05);border-radius:12px;padding:16px;display:flex;align-items:center;gap:12px;">
            ${p.image ? `<img src="${p.image}" style="width:40px;height:40px;object-fit:cover;border-radius:8px;">` : `<div style="font-size:28px;">${p.emoji||'⌚'}</div>`}
            <div>
              <div style="font-size:13px;font-weight:700;line-height:1.3;">${p.name}</div>
              <div style="font-size:11px;color:var(--w60);margin-top:2px;">${p.badge || cat}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('inventoryContent').innerHTML = html || '<div class="empty-state"><div class="es-icon">📭</div><p>No inventory data</p></div>';
}

// ======== ANALYTICS ========
function renderAnalytics() {
  const orders = getOrders();
  const pending = orders.filter(o => !o.status || o.status === 'pending').length;
  const delivered = orders.filter(o => o.status === 'delivered').length;
  const kurdOrders = orders.filter(o => isKurdistanCity(o.city)).length;
  const iraqOrders = orders.length - kurdOrders;

  document.getElementById('analyticsStats').innerHTML = `
    <div class="stat-card">
      <div class="sc-icon">📦</div>
      <div class="sc-num">${orders.length}</div>
      <div class="sc-label">Total Orders</div>
    </div>
    <div class="stat-card warning">
      <div class="sc-icon">⏳</div>
      <div class="sc-num">${pending}</div>
      <div class="sc-label">Pending</div>
    </div>
    <div class="stat-card success">
      <div class="sc-icon">✅</div>
      <div class="sc-num">${delivered}</div>
      <div class="sc-label">Delivered</div>
    </div>
    <div class="stat-card info">
      <div class="sc-icon">💰</div>
      <div class="sc-num">${(kurdOrders * 3500 + iraqOrders * 5000).toLocaleString()}</div>
      <div class="sc-label">Total Delivery IQ</div>
    </div>
  `;

  // Cities breakdown
  document.getElementById('analyticsCities').innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
      <div style="background:var(--b4);border-radius:12px;padding:20px;text-align:center;">
        <div style="font-size:36px;margin-bottom:8px;">🏔️</div>
        <div style="font-size:28px;font-weight:900;color:var(--burg-l);">${kurdOrders}</div>
        <div style="font-size:13px;color:var(--w60);margin-top:4px;">Kurdistan Orders<br>(3,500 IQ each)</div>
      </div>
      <div style="background:var(--b4);border-radius:12px;padding:20px;text-align:center;">
        <div style="font-size:36px;margin-bottom:8px;">🇮🇶</div>
        <div style="font-size:28px;font-weight:900;color:var(--info);">${iraqOrders}</div>
        <div style="font-size:13px;color:var(--w60);margin-top:4px;">Iraq Orders<br>(5,000 IQ each)</div>
      </div>
    </div>
  `;

  // Products breakdown
  const productCounts = {};
  orders.forEach(o => {
    if (o.product) {
      productCounts[o.product] = (productCounts[o.product] || 0) + 1;
    }
  });
  const sorted = Object.entries(productCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

  document.getElementById('analyticsProducts').innerHTML = sorted.length > 0
    ? `<div style="display:flex;flex-direction:column;gap:10px;">
        ${sorted.map(([name, count]) => `
          <div style="display:flex;align-items:center;justify-content:space-between;background:var(--b4);padding:14px 18px;border-radius:10px;">
            <div style="font-size:14px;font-weight:600;">⌚ ${name}</div>
            <div style="font-size:18px;font-weight:900;color:var(--burg-l);">${count}</div>
          </div>
        `).join('')}
      </div>`
    : `<div class="empty-state"><div class="es-icon">📊</div><p>No order data yet</p></div>`;
}

function isKurdistanCity(city) {
  if (!city) return false;
  const krdCities = ['erbil', 'hewler', 'sulaymaniyah', 'slemani', 'duhok', 'kirkuk', 'kerkuk', 'halabja', 'zakho', 'amadiyah', 'ranya', 'koya', 'chamchamal', 'shaqlawa', 'dokan', 'darbandikhan', 'akre', 'soran'];
  return krdCities.some(c => city.toLowerCase().includes(c));
}

// ======== TOAST ========
function showToast(msg, type = '', icon = '') {
  const icons = { success: '✅', danger: '❌', warning: '⚠️', info: 'ℹ️', '': 'ℹ️' };
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span>${icons[type] || icons['']}</span><span style="font-weight:600;">${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// Close modal on overlay click
document.getElementById('orderDetailModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('orderDetailModal')) closeOrderModal();
});
