// ============================================
// BAVOZAN GROUP – Main App Logic
// ============================================

// ======== TRANSLATIONS ========
const translations = {
  sor: { // Sorani Kurdish
    nav_home: 'سەرەکی', nav_products: 'کاڵاکان', nav_generations: 'نەسڵەکان',
    nav_about: 'دەربارە', nav_contact: 'پەیوەندی', nav_order: 'داواکاری',
    hero_badge: 'یەکەمین فرۆشگای WHOOP لە کوردستان',
    hero_title1: 'تاقیکرەوە. چاکبووەوە.', hero_title2: 'باشتر ئەنجامبدە.',
    hero_desc: 'بەڤۆزان گروپ WHOOP هێنایەتەوە کوردستان و عێراق. WHOOP 4.0 Peak و نەسڵی نوێی WHOOP 5.0 – هاوکارت لە تەندروستی و ئەنجامدان.',
    hero_shop: 'ئێستا بکڕە', hero_explore: 'WHOOP 5.0 بزانە',
    stat_since: 'دامەزراوە لە کوردستان', stat_original: 'ئەسڵ', stat_delivery: 'گەیاندن لە عێراق',
    about_tag: 'دەربارەی بەڤۆزان', about_title: 'دەروازەی WHOOP لە کوردستان',
    about_desc: 'لە ساڵی 2026 لە هەولێر دامەزرا. بەڤۆزان گروپ یەکەمین بوو کە WHOOP هێنا بۆ کوردستان و عێراق. هەموو ڕیزی WHOOP-ەکان، نوێ و کراوستکراو، بە و بێ سووبسکریبشن.',
    about_desc2: 'بۆ هەموو شارەکانی عێراق دەگەیەنین. کوردستان 3,500 IQ، شارەکانی دیکەی عێراق 5,000 IQ.',
    tag_new: 'WHOOP نوێ', tag_new_sub: 'هەموو مۆدێلی نوێ',
    tag_used: 'WHOOP کراوستکراو', tag_used_sub: 'بە و بێ سووبسکریبشن',
    tag_bands: 'باندەکان', tag_bands_sub: 'هەموو ڕەنگ و قەبارە',
    tag_delivery: 'گەیاندن عێراق', tag_delivery_sub: 'هەموو شارەکان',
    prod_tag: 'کاڵاکانمان', prod_title: 'کۆکراوەی WHOOP-ەکانمان',
    prod_sub: 'هەموو WHOOP-ەکانمان بزانە.',
    filter_all: 'هەموو', filter_w5: 'WHOOP 5.0', filter_w4: 'WHOOP 4.0 Peak',
    filter_bands: 'باندەکان', filter_used: 'کراوستکراو',
    gen_tag: 'نەسڵەکان', gen_title: 'نەسڵی خۆت هەڵبژێرە',
    gen_sub: 'WHOOP 4.0 Peak و WHOOP 5.0 بەراوردبکە.',
    gen_shop: 'WHOOP 4.0 Peak بکڕە', gen_shop5: 'WHOOP 5.0 بکڕە',
    feat_tag: 'بۆچی WHOOP؟', feat_title: 'زیاتر لە ساعەتێکی زیرەک',
    f1_title: 'نمرەی ستراین', f1_desc: 'بزانە بەدەنت چەند کاردەکات.',
    f2_title: 'تەڕبیەتی خەو', f2_desc: 'پێشنیاری تایبەتی خەو وەربگرە.',
    f3_title: 'نمرەی چاکبووەوە', f3_desc: 'هەموو بەیانێ بزانە کە بەدەنت ئامادەیە.',
    f4_title: 'HRV و HR 24/7', f4_desc: 'بەردەوام چاودێریی ئەمرەی دڵ.',
    f5_title: 'دۆزینەوەی چالاکی', f5_desc: 'زیاتر لە 100 چالاکی ئۆتۆماتیکی دەناسێتەوە.',
    f6_title: 'ئەلارمی زیرەک', f6_desc: 'لە باشترین کاتی خەو ئارامانە رابکە.',
    test_tag: 'ئەزموونەکان', test_title: 'کڕیارانمان چی دەڵێن',
    cta_title: 'ئامادەی',
    cta_sub: 'WHOOP-ت وەربگرە و بۆ هەموو عێراق دەیگەیەنین.',
    cta_shop: 'ئێستا WHOOP بکڕە', cta_chat: 'لە واتساپ قسەبکە',
    contact_tag: 'پەیوەندی', contact_title: 'پەیوەندیمان پێوەبکە',
    contact_sub: 'ئێمە ئامادەین بۆ هەموو پرسیارەکانت.',
    ci_phone: 'تەلەفۆن', ci_location: 'شوێن',
    ci_loc_val: 'هەولێر، هەرێمی کوردستان، عێراق',
    ci_hours: 'کاتی کار', ci_hours_val: 'شەممە – پێنج شەممە: 9 بۆ 10 شەو',
    ci_delivery: 'گەیاندن',
    ci_del_krd: 'شارەکانی کوردستان: 3,500 IQ',
    ci_del_iraq: 'شارەکانی دیکەی عێراق: 5,000 IQ',
    delivery_title: '🚚 زانیاری گەیاندن',
    del_krd_title: 'شارەکانی کوردستان (3,500 IQ)',
    del_iraq_title: 'شارەکانی دیکەی عێراق (5,000 IQ)',
    del_iraq_cities: 'بەغداد • بەسرە • موسڵ • نەجەف • کەربەلا • ناسریە • و هەموو شارەکانی دیکە',
    social_call: 'پەیوەندی',
    footer_about: 'یەکەمین فرۆشگای WHOOP لە کوردستان. دامەزراوە لە ساڵی 2026 لە هەولێر.',
    footer_products: 'کاڵاکان', footer_bands: 'باند و ئەکسسوار',
    footer_used: 'WHOOP کراوستکراو', footer_info: 'زانیاری', footer_compare: 'بەراوردکردنی مۆدێلەکان',
    footer_admin: 'پانێلی بەڕێوەبەر', footer_contact: 'پەیوەندی',
    footer_built: 'دروستکراوە بۆ کوردستان ❤️',
    modal_title: 'داواکاریەکەت تۆمار بکە', form_product: 'کاڵای هەڵبژێردراو',
    form_name: 'ناوی تەواو', form_phone: 'ژمارەی تەلەفۆن',
    form_city: 'شار / پارێزگا', form_address: 'ناونیشانی تەواو',
    form_notes: 'تێبینی (دەسەڵاتی)', form_submit: 'داواکاری لە واتساپ دامەزرێنە',
    delivery_label: '🚚 کرێی گەیاندن:',
    success_title: 'داواکاری نێردرا!',
    success_msg: 'داواکارییەکەت بۆ واتساپ نێردرا. بەڤۆزان گروپ زووترین کاتدا پەیوەندیت پێوەدەکاتەوە.',
    success_close: 'داخستن',
    annBar: '🏆 بەڤۆزان گروپ – یەکەمین فرۆشگای WHOOP لە کوردستان لە 2026 | گەیاندن بۆ هەموو عێراق 🚀',
    phone_display: '964 750 195 7254',
  },
  ar: { // Arabic
    nav_home: 'الرئيسية', nav_products: 'المنتجات', nav_generations: 'الأجيال',
    nav_about: 'عن الشركة', nav_contact: 'تواصل', nav_order: 'اطلب الآن',
    hero_badge: 'أول متجر WHOOP في كردستان',
    hero_title1: 'تتبع. تعافَ.', hero_title2: 'أنجز أكثر.',
    hero_desc: 'مجموعة بافوزان تجلب WHOOP إلى كردستان والعراق. اكتشف WHOOP 4.0 Peak والجيل الجديد WHOOP 5.0 – رفيقك في الصحة والأداء.',
    hero_shop: 'اشترِ الآن', hero_explore: 'استكشف WHOOP 5.0',
    stat_since: 'التأسيس في كردستان', stat_original: 'أصلي 100%', stat_delivery: 'توصيل لكل العراق',
    about_tag: 'عن بافوزان', about_title: 'بوابة WHOOP في كردستان',
    about_desc: 'تأسست عام 2026 في أربيل. مجموعة بافوزان كانت الأولى في إحضار WHOOP إلى كردستان والعراق. نوفر جميع أجيال WHOOP، جديد ومستعمل، مع وبدون اشتراك، وجميع الأحزمة والملحقات.',
    about_desc2: 'نوصّل إلى جميع مدن العراق. مدن كردستان بـ 3500 دينار، وباقي مدن العراق بـ 5000 دينار.',
    tag_new: 'WHOOP جديد', tag_new_sub: 'جميع الموديلات الحديثة',
    tag_used: 'WHOOP مستعمل', tag_used_sub: 'مع وبدون اشتراك',
    tag_bands: 'الأحزمة', tag_bands_sub: 'جميع الألوان والمقاسات',
    tag_delivery: 'توصيل للعراق', tag_delivery_sub: 'جميع المدن',
    prod_tag: 'منتجاتنا', prod_title: 'تسوّق مجموعة WHOOP',
    prod_sub: 'تصفح مجموعتنا الكاملة من WHOOP.',
    filter_all: 'الكل', filter_w5: 'WHOOP 5.0', filter_w4: 'WHOOP 4.0 Peak',
    filter_bands: 'الأحزمة', filter_used: 'مستعمل',
    gen_tag: 'الأجيال', gen_title: 'اختر جيلك',
    gen_sub: 'قارن بين WHOOP 4.0 Peak و WHOOP 5.0.',
    gen_shop: 'اشترِ WHOOP 4.0 Peak', gen_shop5: 'اشترِ WHOOP 5.0',
    feat_tag: 'لماذا WHOOP؟', feat_title: 'أكثر من مجرد ساعة ذكية',
    f1_title: 'نقاط الجهد', f1_desc: 'اعرف كم يعمل جسمك.',
    f2_title: 'مدرب النوم', f2_desc: 'احصل على توصيات نوم مخصصة.',
    f3_title: 'نقاط التعافي', f3_desc: 'اعرف كل صباح إذا كان جسمك جاهزاً.',
    f4_title: 'HRV وHR على مدار الساعة', f4_desc: 'مراقبة مستمرة لمعدل ضربات القلب.',
    f5_title: 'كشف النشاط', f5_desc: 'يكتشف أكثر من 100 نشاط تلقائياً.',
    f6_title: 'منبه ذكي', f6_desc: 'استيقظ في أفضل مرحلة نوم.',
    test_tag: 'التقييمات', test_title: 'ماذا يقول عملاؤنا',
    cta_title: 'مستعد لتحسين أدائك؟',
    cta_sub: 'احصل على WHOOP ونوصّلك لأي مكان في العراق.',
    cta_shop: 'اشترِ WHOOP الآن', cta_chat: 'تحدث عبر واتساب',
    contact_tag: 'تواصل معنا', contact_title: 'تواصل مع بافوزان',
    contact_sub: 'نحن هنا للإجابة على جميع استفساراتك.',
    ci_phone: 'الهاتف', ci_location: 'الموقع',
    ci_loc_val: 'أربيل، إقليم كردستان، العراق',
    ci_hours: 'ساعات العمل', ci_hours_val: 'السبت – الخميس: 9 ص – 10 م',
    ci_delivery: 'التوصيل',
    ci_del_krd: 'مدن كردستان: 3,500 دينار',
    ci_del_iraq: 'باقي مدن العراق: 5,000 دينار',
    delivery_title: '🚚 معلومات التوصيل',
    del_krd_title: 'مدن كردستان (3,500 دينار)',
    del_iraq_title: 'باقي مدن العراق (5,000 دينار)',
    del_iraq_cities: 'بغداد • البصرة • الموصل • النجف • كربلاء • الناصرية • وجميع المدن الأخرى',
    social_call: 'اتصل بنا',
    footer_about: 'أول متجر WHOOP في كردستان. تأسست عام 2026 في أربيل. صحتك مهمتنا.',
    footer_products: 'المنتجات', footer_bands: 'الأحزمة والإكسسوارات',
    footer_used: 'WHOOP مستعمل', footer_info: 'معلومات', footer_compare: 'مقارنة الموديلات',
    footer_admin: 'لوحة التحكم', footer_contact: 'التواصل',
    footer_built: 'صُنع بـ ❤️ لكردستان',
    modal_title: 'اطلب الآن', form_product: 'المنتج المختار',
    form_name: 'الاسم الكامل', form_phone: 'رقم الهاتف',
    form_city: 'المدينة / المحافظة', form_address: 'العنوان التفصيلي',
    form_notes: 'ملاحظات (اختياري)', form_submit: 'تأكيد الطلب عبر واتساب',
    delivery_label: '🚚 رسوم التوصيل:',
    success_title: 'تم إرسال الطلب!',
    success_msg: 'تم إرسال طلبك إلى واتساب. سيتصل بك فريق بافوزان في أقرب وقت.',
    success_close: 'إغلاق',
    annBar: '🏆 بافوزان جروب – أول متجر WHOOP في كردستان منذ 2026 | توصيل لكل العراق 🚀',
    phone_display: '964 750 195 7254',
  },
  en: {
    nav_home: 'Home', nav_products: 'Products', nav_generations: 'Generations',
    nav_about: 'About', nav_contact: 'Contact', nav_order: 'Order Now',
    hero_badge: "Kurdistan's First WHOOP Store",
    hero_title1: 'Track. Recover.', hero_title2: 'Perform Better.',
    hero_desc: 'Bavozan Group brings the world\'s most advanced fitness wearable to Kurdistan and Iraq. Discover WHOOP 4.0 Peak and the all-new WHOOP 5.0.',
    hero_shop: 'Shop Now', hero_explore: 'Explore WHOOP 5.0',
    stat_since: 'Est. in Kurdistan', stat_original: 'Original', stat_delivery: 'Iraq Delivery',
    about_tag: 'About Bavozan', about_title: "Kurdistan's Gateway to WHOOP",
    about_desc: 'Founded in 2026 in Erbil, Bavozan Group was the first to bring WHOOP to Kurdistan and Iraq. We offer all WHOOP series, new and used, with and without subscription, plus all bands and accessories.',
    about_desc2: 'We deliver to all cities in Iraq. Kurdistan cities: 3,500 IQ. Other Iraqi cities: 5,000 IQ.',
    tag_new: 'New WHOOP', tag_new_sub: 'All Latest Models',
    tag_used: 'Used WHOOP', tag_used_sub: 'With/Without Sub',
    tag_bands: 'Bands', tag_bands_sub: 'All Colors & Sizes',
    tag_delivery: 'Iraq Delivery', tag_delivery_sub: 'All Cities',
    prod_tag: 'Our Products', prod_title: 'Shop WHOOP Collection',
    prod_sub: 'Browse our complete WHOOP lineup.',
    filter_all: 'All', filter_w5: 'WHOOP 5.0', filter_w4: 'WHOOP 4.0 Peak',
    filter_bands: 'Bands', filter_used: 'Used',
    gen_tag: 'Generations', gen_title: 'Choose Your Generation',
    gen_sub: 'Compare WHOOP 4.0 Peak and the revolutionary WHOOP 5.0.',
    gen_shop: 'Shop WHOOP 4.0 Peak', gen_shop5: 'Shop WHOOP 5.0',
    feat_tag: 'Why WHOOP?', feat_title: 'More Than a Smartwatch',
    f1_title: 'Strain Score', f1_desc: 'Know how hard your body is working.',
    f2_title: 'Sleep Coach', f2_desc: 'Get personalized sleep recommendations.',
    f3_title: 'Recovery Score', f3_desc: 'Know every morning if your body is ready.',
    f4_title: '24/7 HRV + HR', f4_desc: 'Continuous heart rate monitoring.',
    f5_title: 'Activity Detection', f5_desc: 'Auto-detects 100+ activities.',
    f6_title: 'Smart Alarm', f6_desc: 'Wake up at the perfect moment in your sleep cycle.',
    test_tag: 'Reviews', test_title: 'What Our Customers Say',
    cta_title: 'Ready to Optimize Your Performance?',
    cta_sub: 'Get your WHOOP and we deliver anywhere in Iraq.',
    cta_shop: 'Shop WHOOP Now', cta_chat: 'Chat on WhatsApp',
    contact_tag: 'Get in Touch', contact_title: 'Contact Bavozan Group',
    contact_sub: 'We\'re here to answer all your questions.',
    ci_phone: 'Phone', ci_location: 'Location',
    ci_loc_val: 'Erbil, Kurdistan Region, Iraq',
    ci_hours: 'Business Hours', ci_hours_val: 'Sat – Thu: 9:00 AM – 10:00 PM',
    ci_delivery: 'Delivery',
    ci_del_krd: 'Kurdistan cities: 3,500 IQ',
    ci_del_iraq: 'Other Iraq cities: 5,000 IQ',
    delivery_title: '🚚 Delivery Information',
    del_krd_title: 'Kurdistan Cities (3,500 IQ)',
    del_iraq_title: 'Other Iraqi Cities (5,000 IQ)',
    del_iraq_cities: 'Baghdad • Basra • Mosul • Najaf • Karbala • Nasiriyah • And all other cities',
    social_call: 'Call Us',
    footer_about: "Kurdistan's first WHOOP retailer. Founded in Erbil in 2026. Your health is our mission.",
    footer_products: 'Products', footer_bands: 'Bands & Accessories',
    footer_used: 'Used WHOOP', footer_info: 'Information', footer_compare: 'Compare Models',
    footer_admin: 'Admin Panel', footer_contact: 'Contact',
    footer_built: 'Built with ❤️ for Kurdistan',
    modal_title: 'Place Your Order', form_product: 'Selected Product',
    form_name: 'Full Name', form_phone: 'Phone Number',
    form_city: 'City / Province', form_address: 'Detailed Address',
    form_notes: 'Notes (Optional)', form_submit: 'Confirm Order via WhatsApp',
    delivery_label: '🚚 Delivery Fee:',
    success_title: 'Order Sent!',
    success_msg: 'Your order has been forwarded to WhatsApp. Bavozan Group will contact you shortly.',
    success_close: 'Close',
    annBar: '🏆 Bavozan Group – Kurdistan\'s First WHOOP Store since 2026 | Delivery across all Iraq 🚀',
    phone_display: '+964 750 195 7254',
  }
};

// ======== KURDISTAN CITIES ========
const kurdistanCities = [
  'erbil-krd','sulaymaniyah-krd','duhok-krd','kirkuk-krd','halabja-krd',
  'zakho-krd','amadiyah-krd','ranya-krd','koya-krd','chamchamal-krd',
  'shaqlawa-krd','dokan-krd','darbandikhan-krd','akre-krd','soran-krd'
];

// ======== DEFAULT PRODUCTS ========
const defaultProducts = [
  {
    id: 'w5-new-1',
    category: 'whoop5',
    name: 'WHOOP 5.0',
    gen: 'Generation 5.0 • NEW',
    badge: 'New',
    badgeClass: 'new',
    desc: 'The latest and most advanced WHOOP yet. AI Health Coach, Healthspan metrics, redesigned form factor. Experience the future of fitness tracking.',
    tags: ['New', 'With Subscription'],
    tagClasses: ['', 'sub'],
    image: null,
    emoji: '⌚'
  },
  {
    id: 'w5-nosub-1',
    category: 'whoop5',
    name: 'WHOOP 5.0 (No Subscription)',
    gen: 'Generation 5.0 • No Monthly Fee',
    badge: 'New',
    badgeClass: 'new',
    desc: 'WHOOP 5.0 device without subscription. Use with existing WHOOP membership or start fresh at your own pace.',
    tags: ['New', 'No Subscription'],
    tagClasses: ['', 'no-sub'],
    image: null,
    emoji: '⌚'
  },
  {
    id: 'w4-new-1',
    category: 'whoop4',
    name: 'WHOOP 4.0 Peak',
    gen: 'Generation 4.0 Peak',
    badge: 'Peak',
    badgeClass: '',
    desc: 'The proven performance tracker. 5-day battery, swim-proof, advanced sleep & recovery coaching. With WHOOP membership included.',
    tags: ['New', 'With Subscription'],
    tagClasses: ['', 'sub'],
    image: null,
    emoji: '⌚'
  },
  {
    id: 'w4-nosub-1',
    category: 'whoop4',
    name: 'WHOOP 4.0 Peak (No Sub)',
    gen: 'Generation 4.0 Peak • No Monthly Fee',
    badge: 'Peak',
    badgeClass: '',
    desc: 'WHOOP 4.0 Peak device without subscription. Perfect if you already have a WHOOP membership or want to try it.',
    tags: ['New', 'No Subscription'],
    tagClasses: ['', 'no-sub'],
    image: null,
    emoji: '⌚'
  },
  {
    id: 'w5-used-1',
    category: 'used',
    name: 'WHOOP 5.0 (Used)',
    gen: 'Generation 5.0 • Pre-Owned',
    badge: 'Used',
    badgeClass: 'used',
    desc: 'Pre-owned WHOOP 5.0 in excellent condition. Comes with active subscription remaining – great value deal.',
    tags: ['Used', 'With Subscription'],
    tagClasses: ['', 'sub'],
    image: null,
    emoji: '⌚'
  },
  {
    id: 'w5-used-nosub',
    category: 'used',
    name: 'WHOOP 5.0 (Used, No Sub)',
    gen: 'Generation 5.0 • Pre-Owned',
    badge: 'Used',
    badgeClass: 'used',
    desc: 'Pre-owned WHOOP 5.0 without active subscription. Start for a lower price and add your subscription when ready.',
    tags: ['Used', 'No Subscription'],
    tagClasses: ['', 'no-sub'],
    image: null,
    emoji: '⌚'
  },
  {
    id: 'w4-used-1',
    category: 'used',
    name: 'WHOOP 4.0 Peak (Used)',
    gen: 'Generation 4.0 • Pre-Owned',
    badge: 'Used',
    badgeClass: 'used',
    desc: 'Pre-owned WHOOP 4.0 Peak with remaining subscription. Great for first-time WHOOP users at a budget-friendly price.',
    tags: ['Used', 'With Subscription'],
    tagClasses: ['', 'sub'],
    image: null,
    emoji: '⌚'
  },
  {
    id: 'band-black',
    category: 'band',
    name: 'WHOOP Band – Onyx Black',
    gen: 'Official WHOOP Band',
    badge: 'Band',
    badgeClass: '',
    desc: 'Premium SuperKnit band for WHOOP 4.0 & 5.0. Sleek Onyx Black design – comfortable for 24/7 wear.',
    tags: ['Compatible: 4.0 & 5.0'],
    tagClasses: [''],
    image: null,
    emoji: '🖤'
  },
  {
    id: 'band-white',
    category: 'band',
    name: 'WHOOP Band – Alpine White',
    gen: 'Official WHOOP Band',
    badge: 'Band',
    badgeClass: '',
    desc: 'Clean and stylish Alpine White SuperKnit band. Compatible with all WHOOP 4.0 and 5.0 devices.',
    tags: ['Compatible: 4.0 & 5.0'],
    tagClasses: [''],
    image: null,
    emoji: '🤍'
  },
  {
    id: 'band-red',
    category: 'band',
    name: 'WHOOP Band – Scarlet Red',
    gen: 'Official WHOOP Band',
    badge: 'Band',
    badgeClass: '',
    desc: 'Bold Scarlet Red SuperKnit band. Stand out while tracking your performance. Fits all WHOOP 4.0 & 5.0.',
    tags: ['Compatible: 4.0 & 5.0'],
    tagClasses: [''],
    image: null,
    emoji: '❤️'
  }
];

// ======== STATE ========
let currentLang = 'en';
let currentFilter = 'all';
let selectedProduct = null;
let allProducts = [];

// ======== INIT ========
document.addEventListener('DOMContentLoaded', () => {
  // Preloader
  setTimeout(() => {
    document.getElementById('preloader').classList.add('hidden');
  }, 1800);

  // Load products from storage
  loadAllProducts();

  // Render products
  renderProducts();

  // Init ticker
  initTicker();

  // Scroll listeners
  window.addEventListener('scroll', handleScroll);

  // Scroll reveal
  initReveal();

  // Set default lang (English)
  setLanguage('en');
  document.getElementById('langSelect').value = 'en';

  // Nav link active on scroll
  window.addEventListener('scroll', handleNavActive);
});

// ======== PRODUCTS ========
function loadAllProducts() {
  const saved = localStorage.getItem('bavozanProducts');
  if (saved) {
    const adminProducts = JSON.parse(saved);
    allProducts = [...defaultProducts, ...adminProducts];
  } else {
    allProducts = [...defaultProducts];
  }
}

function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const filtered = filter === 'all' ? allProducts : allProducts.filter(p => p.category === filter);
  grid.innerHTML = filtered.map(p => createProductCard(p)).join('');
}

function createProductCard(p) {
  const imgHtml = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : `<div class="product-image-placeholder"><div class="pi-icon">${p.emoji || '⌚'}</div></div>`;

  const tagsHtml = (p.tags || []).map((t, i) =>
    `<span class="meta-tag ${p.tagClasses ? p.tagClasses[i] || '' : ''}">${t}</span>`
  ).join('');

  return `
    <div class="product-card" data-category="${p.category}">
      <div class="product-badge ${p.badgeClass || ''}">${p.badge || ''}</div>
      <div class="product-image">${imgHtml}</div>
      <div class="product-info">
        <div class="product-gen">${p.gen}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.desc}</div>
        <div class="product-meta">${tagsHtml}</div>
        <div class="product-actions">
          <button class="btn-order" onclick="openOrder('${p.id}', '${p.name.replace(/'/g, "\\'")}')">🛒 Order</button>
        </div>
      </div>
    </div>
  `;
}

function filterProducts(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  renderProducts(filter);
}

function filterAndScroll(filter) {
  currentFilter = filter;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  const allBtns = document.querySelectorAll('.filter-btn');
  allBtns.forEach(b => {
    if ((filter === 'whoop5' && b.textContent.includes('5.0')) ||
        (filter === 'whoop4' && b.textContent.includes('4.0'))) {
      b.classList.add('active');
    }
  });
  renderProducts(filter);
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// ======== ORDER MODAL ========
function openOrder(productId, productName) {
  selectedProduct = { id: productId, name: productName };
  document.getElementById('selectedProductName').value = productName;
  document.getElementById('orderFormContainer').style.display = 'block';
  document.getElementById('orderSuccessContainer').style.display = 'none';
  document.getElementById('orderModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  updateDelivery();
}

function closeModal() {
  document.getElementById('orderModal').classList.remove('open');
  document.body.style.overflow = '';
  // Reset form
  setTimeout(() => {
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('orderNotes').value = '';
    document.getElementById('orderFormContainer').style.display = 'block';
    document.getElementById('orderSuccessContainer').style.display = 'none';
  }, 300);
}

function updateDelivery() {
  const city = document.getElementById('customerCity').value;
  const isKurdistan = kurdistanCities.includes(city);
  const fee = isKurdistan ? '3,500 IQ' : '5,000 IQ';
  document.getElementById('deliveryFeeDisplay').textContent = fee;
}

function submitOrder() {
  const name = document.getElementById('customerName').value.trim();
  const phone = document.getElementById('customerPhone').value.trim();
  const city = document.getElementById('customerCity').value;
  const address = document.getElementById('customerAddress').value.trim();
  const notes = document.getElementById('orderNotes').value.trim();
  const product = selectedProduct ? selectedProduct.name : '';
  const deliveryFee = document.getElementById('deliveryFeeDisplay').textContent;
  const cityName = document.getElementById('customerCity').selectedOptions[0].text;

  if (!name || !phone || !address) {
    showToast('Please fill in all required fields', 'error', '⚠️');
    return;
  }

  const msg = `🏋️ *WHOOP ORDER – Bavozan Group*\n\n📦 *Product:* ${product}\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📍 *City:* ${cityName}\n🏠 *Address:* ${address}\n🚚 *Delivery Fee:* ${deliveryFee}${notes ? '\n📝 *Notes:* ' + notes : ''}\n\n_Sent via BavozanGroup.com_`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/9647501957254?text=${encoded}`, '_blank');

  // Save order to localStorage for admin
  saveOrderToAdmin({ name, phone, city: cityName, address, product, deliveryFee, notes, date: new Date().toISOString(), status: 'pending' });

  document.getElementById('orderFormContainer').style.display = 'none';
  document.getElementById('orderSuccessContainer').style.display = 'block';
  showToast('Order sent to WhatsApp!', 'success', '✅');
}

function saveOrderToAdmin(order) {
  const orders = JSON.parse(localStorage.getItem('bavozanOrders') || '[]');
  orders.unshift({ ...order, id: Date.now() });
  localStorage.setItem('bavozanOrders', JSON.stringify(orders));
}

// ======== LANGUAGE ========
function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang] || translations['en'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  // RTL for Arabic / Sorani
  if (lang === 'ar') {
    document.body.classList.add('rtl');
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  } else if (lang === 'sor') {
    document.body.classList.add('rtl');
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ku');
  } else {
    document.body.classList.remove('rtl');
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
  }

  // Update announcement bar
  if (t.annBar) document.getElementById('announcementBar').textContent = t.annBar;
}

// ======== TICKER ========
function initTicker() {
  const items = [
    '⌚ WHOOP 5.0 – Now Available',
    '🆕 All New Generations In Stock',
    '🚚 Delivery Across All Iraq',
    '📍 Based in Erbil, Kurdistan',
    '♻️ Used WHOOP Available',
    '🎽 All Official Bands',
    '💪 Train Smarter with WHOOP',
    '🏆 First WHOOP Store in Kurdistan',
    '📞 Contact: +964 750 195 7254',
    '🔥 WHOOP 4.0 Peak in Stock',
  ];

  const wrapper = document.getElementById('tickerContainer');
  if (!wrapper) return;
  const doubled = [...items, ...items];
  wrapper.innerHTML = doubled.map(item =>
    `<div class="ticker-item"><div class="ticker-dot"></div>${item}</div>`
  ).join('');
}

// ======== SCROLL HANDLERS ========
function handleScroll() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 80) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
}

function handleNavActive() {
  const sections = ['home', 'products', 'generations', 'about', 'contact'];
  const links = document.querySelectorAll('.nav-links a');
  let current = 'home';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  links.forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('href') === '#' + current) l.classList.add('active');
  });
}

// ======== REVEAL ON SCROLL ========
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ======== NAVIGATION ========
function scrollToProducts() {
  document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function openMobileNav() {
  document.getElementById('mobileNav').classList.add('open');
  document.getElementById('overlayDim').classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.getElementById('overlayDim').classList.remove('show');
  document.body.style.overflow = '';
}

// ======== TOAST ========
function showToast(msg, type = '', icon = 'ℹ️') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icon}</span><span class="toast-msg">${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3500);
}

// Close modal on overlay click
document.getElementById('orderModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('orderModal')) closeModal();
});
