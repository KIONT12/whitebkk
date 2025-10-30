"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en', 'th', 'zh', 'ja', 'ko'
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [cursorTrail, setCursorTrail] = useState([]);

  // Cursor trail effect for smoky cursive trails
  const handleMouseMove = (e) => {
    const newTrail = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now() + Math.random()
    };
    setCursorTrail(prev => [...prev.slice(-20), newTrail]);
  };

  // Translation object
  const translations = {
    en: {
      // Header
      menu: "Menu",
      about: "About",
      contact: "Contact",
      cart: "Cart",
      
      // Hero Section
      welcome: "Welcome to WhiteAshBkk 🌿",
      heroSubtitle: "Premium Cannabis Flower Specialists in Nonthaburi. Wholesale & Retail with Bangkok Delivery.",
      excellentReviews: "Excellent Reviews",
      browseMenu: "Browse Menu",
      learnMore: "Learn More",
      
      // Menu Section
      ourMenu: "Our Menu",
      flowerSpecialist: "🌿 Premium Cannabis Flower Specialist",
      perGram: "per gram",
      addToCart: "🌿 Add to Cart",
      contactForPrice: "💬 Contact for Price",
      feelings: "Feelings:",
      taste: "Taste:",
      
      // Instagram CTA
      seeFullMenu: "See Our Full Menu",
      instagramDescription: "Check out our Instagram for daily updates on fresh products, prices, and availability!",
      followInstagram: "📷 Follow @whiteashbkk",
      
      // About Section
      aboutTitle: "About WhiteAshBkk",
      aboutText1: "WhiteAshBkk is a premium cannabis flower specialist located in Nonthaburi, Thailand. We focus exclusively on providing the highest quality cannabis flower, offering both wholesale and retail services with delivery throughout Bangkok.",
      aboutText2: "With an impressive 4.9/5 rating, our customers consistently praise our excellent service and top-shelf flower selection. Our expertise in cannabis flower ensures you get only the best strains with optimal freshness and potency.",
      aboutText3: "Whether you're looking for bulk wholesale orders or retail quantities, WhiteAshBkk is your trusted source for premium cannabis flower in the Bangkok area.",
      rating: "4.9/5 Rating",
      flowerOnly: "Flower Only",
      wholesale: "Wholesale",
      bangkokDelivery: "Bangkok Delivery",
      storeHours: "Store Hours",
      address: "📍 Address",
      phone: "📞 Phone",
      deliveryAvailable: "🚚 Delivery Available Throughout Bangkok",
      
      // Days of the week
      monday: "Monday:",
      tuesday: "Tuesday:",
      wednesday: "Wednesday:",
      thursday: "Thursday:",
      friday: "Friday:",
      saturday: "Saturday:",
      sunday: "Sunday:",
      
      // Reviews Section
      customerReviews: "Customer Reviews",
      basedOnReviews: "Based on 69 Google Reviews",
      readAllReviews: "📝 Read All Reviews on Google",
      
      // Contact Section
      getInTouch: "Get In Touch",
      contactDescription: "Have questions? Our friendly staff is here to help!",
      callUs: "Call Us",
      visitUs: "Visit Us",
      openDaily: "Open Daily",
      daysAWeek: "7 Days a Week",
      
      // Footer
      footerDescription: "Premium Wholesale & Retail Cannabis Flower Specialist in Nonthaburi.",
      quickLinks: "Quick Links",
      ourSpecialty: "Our Specialty",
      premiumFlower: "🌿 Premium Flower",
      topShelfStrains: "🌸 Top Shelf Strains",
      wholesaleOptions: "🏪 Wholesale Options",
      connect: "Connect",
      daily: "Daily:",
      copyright: "© 2024 WhiteAshBkk. All rights reserved. Must be 20+ to purchase.",
      consumeResponsibly: "Please consume responsibly. 🌿",
      
      // Cart
      yourCart: "🌿 Your Cart",
      cartEmpty: "Your cart is empty",
      cartEmptyDescription: "Add some premium strains to get started!",
      remove: "Remove",
      total: "Total:",
      placeOrder: "Message on Instagram",
      contactToComplete: "Send us a message with your order",
      faqs: "FAQs"
    },
    th: {
      // Header
      menu: "เมนู",
      about: "เกี่ยวกับเรา",
      contact: "ติดต่อ",
      cart: "ตะกร้า",
      
      // Hero Section
      welcome: "ยินดีต้อนรับสู่ WhiteAshBkk 🌿",
      heroSubtitle: "ผู้เชี่ยวชาญกัญชาดอกพรีเมียมในนนทบุรี บริการขายส่งและขายปลีกพร้อมจัดส่งกรุงเทพฯ",
      excellentReviews: "รีวิวยอดเยี่ยม",
      browseMenu: "ดูเมนู",
      learnMore: "เรียนรู้เพิ่มเติม",
      
      // Menu Section
      ourMenu: "เมนูของเรา",
      flowerSpecialist: "🌿 ผู้เชี่ยวชาญกัญชาดอกพรีเมียม",
      perGram: "ต่อกรัม",
      addToCart: "🌿 เพิ่มลงตะกร้า",
      contactForPrice: "💬 ติดต่อสอบถามราคา",
      feelings: "ความรู้สึก:",
      taste: "รสชาติ:",
      
      // Instagram CTA
      seeFullMenu: "ดูเมนูทั้งหมด",
      instagramDescription: "ติดตาม Instagram ของเราเพื่อดูอัปเดตสินค้าใหม่ ราคา และสต็อกประจำวัน!",
      followInstagram: "📷 ติดตาม @whiteashbkk",
      
      // About Section
      aboutTitle: "เกี่ยวกับ WhiteAshBkk",
      aboutText1: "WhiteAshBkk เป็นผู้เชี่ยวชาญกัญชาดอกพรีเมียมตั้งอยู่ในนนทบุรี ประเทศไทย เรามุ่งเน้นให้บริการกัญชาดอกคุณภาพสูงสุดเท่านั้น พร้อมบริการขายส่งและขายปลีกพร้อมจัดส่งทั่วกรุงเทพฯ",
      aboutText2: "ด้วยคะแนนที่น่าประทับใจ 4.9/5 ลูกค้าของเราชื่นชมการบริการที่ยอดเยี่ยมและคอลเลกชันดอกไม้คุณภาพสูงของเราอย่างสม่ำเสมอ ความเชี่ยวชาญของเราในด้านกัญชาดอกรับประกันว่าคุณจะได้รับเฉพาะสายพันธุ์ที่ดีที่สุดพร้อมความสดและความแรงที่เหมาะสม",
      aboutText3: "ไม่ว่าคุณจะกำลังมองหาคำสั่งซื้อขายส่งจำนวนมากหรือปริมาณขายปลีก WhiteAshBkk คือแหล่งที่เชื่อถือได้สำหรับกัญชาดอกพรีเมียมในพื้นที่กรุงเทพฯ",
      rating: "คะแนน 4.9/5",
      flowerOnly: "เฉพาะดอก",
      wholesale: "ขายส่ง",
      bangkokDelivery: "จัดส่งกรุงเทพฯ",
      storeHours: "เวลาทำการ",
      address: "📍 ที่อยู่",
      phone: "📞 โทรศัพท์",
      deliveryAvailable: "🚚 บริการจัดส่งทั่วกรุงเทพฯ",
      
      // Days of the week
      monday: "วันจันทร์:",
      tuesday: "วันอังคาร:",
      wednesday: "วันพุธ:",
      thursday: "วันพฤหัสบดี:",
      friday: "วันศุกร์:",
      saturday: "วันเสาร์:",
      sunday: "วันอาทิตย์:",
      
      // Reviews Section
      customerReviews: "รีวิวจากลูกค้า",
      basedOnReviews: "จากรีวิว Google 69 รายการ",
      readAllReviews: "📝 อ่านรีวิวทั้งหมดบน Google",
      
      // Contact Section
      getInTouch: "ติดต่อเรา",
      contactDescription: "มีคำถาม? พนักงานที่เป็นมิตรของเราพร้อมช่วยเหลือคุณ!",
      callUs: "โทรหาเรา",
      visitUs: "มาเยี่ยมเรา",
      openDaily: "เปิดทุกวัน",
      daysAWeek: "7 วันต่อสัปดาห์",
      
      // Footer
      footerDescription: "ผู้เชี่ยวชาญกัญชาดอกขายส่งและขายปลีกพรีเมียมในนนทบุรี",
      quickLinks: "ลิงก์ด่วน",
      ourSpecialty: "ความเชี่ยวชาญของเรา",
      premiumFlower: "🌿 ดอกพรีเมียม",
      topShelfStrains: "🌸 สายพันธุ์ชั้นนำ",
      wholesaleOptions: "🏪 ตัวเลือกขายส่ง",
      connect: "ติดต่อ",
      daily: "ทุกวัน:",
      copyright: "© 2024 WhiteAshBkk สงวนลิขสิทธิ์ ต้องมีอายุ 20 ปีขึ้นไปจึงจะซื้อได้",
      consumeResponsibly: "โปรดบริโภคอย่างรับผิดชอบ 🌿",
      
      // Cart
      yourCart: "🌿 ตะกร้าของคุณ",
      cartEmpty: "ตะกร้าของคุณว่างเปล่า",
      cartEmptyDescription: "เพิ่มสายพันธุ์พรีเมียมเพื่อเริ่มต้น!",
      remove: "ลบ",
      total: "รวม:",
      placeOrder: "ส่งข้อความทาง Instagram",
      contactToComplete: "ส่งข้อความพร้อมรายการสั่งซื้อของคุณ",
      faqs: "คำถามที่พบบ่อย"
    },
    zh: {
      // Header
      menu: "菜单",
      about: "关于我们",
      contact: "联系我们",
      cart: "购物车",
      
      // Hero Section
      welcome: "欢迎来到 WhiteAshBkk 🌿",
      heroSubtitle: "暖武里的优质大麻花专家。批发和零售，提供曼谷送货服务。",
      excellentReviews: "优秀评价",
      browseMenu: "浏览菜单",
      learnMore: "了解更多",
      
      // Menu Section
      ourMenu: "我们的菜单",
      flowerSpecialist: "🌿 优质大麻花专家",
      perGram: "每克",
      addToCart: "🌿 加入购物车",
      contactForPrice: "💬 联系询价",
      feelings: "感觉：",
      taste: "味道：",
      
      // Instagram CTA
      seeFullMenu: "查看完整菜单",
      instagramDescription: "关注我们的 Instagram，了解新产品、价格和库存的每日更新！",
      followInstagram: "📷 关注 @whiteashbkk",
      
      // About Section
      aboutTitle: "关于 WhiteAshBkk",
      aboutText1: "WhiteAshBkk 是一家位于泰国暖武里的优质大麻花专家。我们专注于提供最高质量的大麻花，提供批发和零售服务，并在曼谷全境送货。",
      aboutText2: "凭借令人印象深刻的 4.9/5 评分，我们的客户一致赞扬我们出色的服务和顶级花卉选择。我们在大麻花方面的专业知识确保您只能获得具有最佳新鲜度和效力的最佳品系。",
      aboutText3: "无论您是在寻找大宗批发订单还是零售数量，WhiteAshBkk 都是您在曼谷地区优质大麻花的可信来源。",
      rating: "评分 4.9/5",
      flowerOnly: "仅花卉",
      wholesale: "批发",
      bangkokDelivery: "曼谷送货",
      storeHours: "营业时间",
      address: "📍 地址",
      phone: "📞 电话",
      deliveryAvailable: "🚚 曼谷全境送货",
      
      // Days of the week
      monday: "星期一：",
      tuesday: "星期二：",
      wednesday: "星期三：",
      thursday: "星期四：",
      friday: "星期五：",
      saturday: "星期六：",
      sunday: "星期日：",
      
      // Reviews Section
      customerReviews: "客户评价",
      basedOnReviews: "基于 69 条 Google 评论",
      readAllReviews: "📝 在 Google 上阅读所有评论",
      
      // Contact Section
      getInTouch: "联系我们",
      contactDescription: "有问题吗？我们友好的员工随时为您提供帮助！",
      callUs: "致电我们",
      visitUs: "访问我们",
      openDaily: "每日营业",
      daysAWeek: "每周 7 天",
      
      // Footer
      footerDescription: "暖武里优质批发和零售大麻花专家。",
      quickLinks: "快速链接",
      ourSpecialty: "我们的专长",
      premiumFlower: "🌿 优质花卉",
      topShelfStrains: "🌸 顶级品系",
      wholesaleOptions: "🏪 批发选项",
      connect: "联系方式",
      daily: "每日：",
      copyright: "© 2024 WhiteAshBkk。保留所有权利。必须年满 20 岁才能购买。",
      consumeResponsibly: "请负责任地消费。🌿",
      
      // Cart
      yourCart: "🌿 您的购物车",
      cartEmpty: "您的购物车是空的",
      cartEmptyDescription: "添加一些优质品系开始吧！",
      remove: "删除",
      total: "总计：",
      placeOrder: "Instagram 留言",
      contactToComplete: "发送您的订单消息",
      faqs: "常见问题"
    },
    ja: {
      // Header
      menu: "メニュー",
      about: "私たちについて",
      contact: "お問い合わせ",
      cart: "カート",
      
      // Hero Section
      welcome: "WhiteAshBkk へようこそ 🌿",
      heroSubtitle: "ノンタブリーのプレミアムカンナビスフラワー専門店。バンコク配達可能な卸売・小売サービス。",
      excellentReviews: "優れたレビュー",
      browseMenu: "メニューを見る",
      learnMore: "詳細を見る",
      
      // Menu Section
      ourMenu: "メニュー",
      flowerSpecialist: "🌿 プレミアムカンナビスフラワー専門店",
      perGram: "グラムあたり",
      addToCart: "🌿 カートに追加",
      contactForPrice: "💬 価格についてお問い合わせ",
      feelings: "感覚：",
      taste: "味：",
      
      // Instagram CTA
      seeFullMenu: "フルメニューを見る",
      instagramDescription: "新製品、価格、在庫状況の毎日の更新については、私たちの Instagram をフォローしてください！",
      followInstagram: "📷 @whiteashbkk をフォロー",
      
      // About Section
      aboutTitle: "WhiteAshBkk について",
      aboutText1: "WhiteAshBkk は、タイのノンタブリーに位置するプレミアムカンナビスフラワー専門店です。最高品質のカンナビスフラワーの提供に専念し、バンコク全域への配達を伴う卸売および小売サービスを提供しています。",
      aboutText2: "印象的な 4.9/5 の評価により、お客様は一貫して私たちの優れたサービスとトップシェルフのフラワーセレクションを称賛しています。カンナビスフラワーに関する私たちの専門知識により、最適な新鮮さと効力を持つ最高の品種のみを確実に入手できます。",
      aboutText3: "大量の卸売注文をお探しでも、小売数量をお探しでも、WhiteAshBkk はバンコクエリアでプレミアムカンナビスフラワーの信頼できるソースです。",
      rating: "評価 4.9/5",
      flowerOnly: "フラワーのみ",
      wholesale: "卸売",
      bangkokDelivery: "バンコク配達",
      storeHours: "営業時間",
      address: "📍 住所",
      phone: "📞 電話",
      deliveryAvailable: "🚚 バンコク全域配達可能",
      
      // Days of the week
      monday: "月曜日：",
      tuesday: "火曜日：",
      wednesday: "水曜日：",
      thursday: "木曜日：",
      friday: "金曜日：",
      saturday: "土曜日：",
      sunday: "日曜日：",
      
      // Reviews Section
      customerReviews: "お客様のレビュー",
      basedOnReviews: "69件の Google レビューに基づく",
      readAllReviews: "📝 Google ですべてのレビューを読む",
      
      // Contact Section
      getInTouch: "お問い合わせ",
      contactDescription: "ご質問がありますか？私たちのフレンドリーなスタッフがお手伝いします！",
      callUs: "お電話ください",
      visitUs: "ご来店ください",
      openDaily: "毎日営業",
      daysAWeek: "週7日",
      
      // Footer
      footerDescription: "ノンタブリーのプレミアム卸売・小売カンナビスフラワー専門店。",
      quickLinks: "クイックリンク",
      ourSpecialty: "私たちの専門",
      premiumFlower: "🌿 プレミアムフラワー",
      topShelfStrains: "🌸 トップシェルフ品種",
      wholesaleOptions: "🏪 卸売オプション",
      connect: "お問い合わせ",
      daily: "毎日：",
      copyright: "© 2024 WhiteAshBkk。全著作権所有。購入には20歳以上である必要があります。",
      consumeResponsibly: "責任を持って消費してください。🌿",
      
      // Cart
      yourCart: "🌿 カート",
      cartEmpty: "カートは空です",
      cartEmptyDescription: "プレミアム品種を追加して始めましょう！",
      remove: "削除",
      total: "合計：",
      placeOrder: "Instagram でメッセージ",
      contactToComplete: "注文内容をメッセージで送信",
      faqs: "よくある質問"
    },
    ko: {
      // Header
      menu: "메뉴",
      about: "소개",
      contact: "연락처",
      cart: "장바구니",
      
      // Hero Section
      welcome: "WhiteAshBkk에 오신 것을 환영합니다 🌿",
      heroSubtitle: "논타부리의 프리미엄 대마초 꽃 전문점. 방콕 배달 가능한 도매 및 소매 서비스.",
      excellentReviews: "우수한 리뷰",
      browseMenu: "메뉴 보기",
      learnMore: "자세히 알아보기",
      
      // Menu Section
      ourMenu: "메뉴",
      flowerSpecialist: "🌿 프리미엄 대마초 꽃 전문점",
      perGram: "그램당",
      addToCart: "🌿 장바구니에 담기",
      contactForPrice: "💬 가격 문의",
      feelings: "느낌：",
      taste: "맛：",
      
      // Instagram CTA
      seeFullMenu: "전체 메뉴 보기",
      instagramDescription: "신선한 제품, 가격 및 재고에 대한 일일 업데이트를 보려면 Instagram을 팔로우하세요!",
      followInstagram: "📷 @whiteashbkk 팔로우",
      
      // About Section
      aboutTitle: "WhiteAshBkk 소개",
      aboutText1: "WhiteAshBkk는 태국 논타부리에 위치한 프리미엄 대마초 꽃 전문점입니다. 최고 품질의 대마초 꽃 제공에 전념하며, 방콕 전역 배달이 가능한 도매 및 소매 서비스를 제공합니다.",
      aboutText2: "인상적인 4.9/5 평점으로 고객들은 우리의 우수한 서비스와 최고급 꽃 선택을 지속적으로 칭찬합니다. 대마초 꽃에 대한 우리의 전문성은 최적의 신선도와 효능을 가진 최고의 품종만을 확실히 얻을 수 있도록 보장합니다.",
      aboutText3: "대량 도매 주문이든 소매 수량이든 WhiteAshBkk는 방콕 지역에서 프리미엄 대마초 꽃을 위한 신뢰할 수 있는 출처입니다.",
      rating: "평점 4.9/5",
      flowerOnly: "꽃만",
      wholesale: "도매",
      bangkokDelivery: "방콕 배달",
      storeHours: "영업 시간",
      address: "📍 주소",
      phone: "📞 전화",
      deliveryAvailable: "🚚 방콕 전역 배달 가능",
      
      // Days of the week
      monday: "월요일：",
      tuesday: "화요일：",
      wednesday: "수요일：",
      thursday: "목요일：",
      friday: "금요일：",
      saturday: "토요일：",
      sunday: "일요일：",
      
      // Reviews Section
      customerReviews: "고객 리뷰",
      basedOnReviews: "69개의 Google 리뷰 기반",
      readAllReviews: "📝 Google에서 모든 리뷰 읽기",
      
      // Contact Section
      getInTouch: "문의하기",
      contactDescription: "질문이 있으신가요? 친절한 직원이 도와드립니다!",
      callUs: "전화하기",
      visitUs: "방문하기",
      openDaily: "매일 영업",
      daysAWeek: "주 7일",
      
      // Footer
      footerDescription: "논타부리의 프리미엄 도매 및 소매 대마초 꽃 전문점.",
      quickLinks: "빠른 링크",
      ourSpecialty: "우리의 전문 분야",
      premiumFlower: "🌿 프리미엄 꽃",
      topShelfStrains: "🌸 최고급 품종",
      wholesaleOptions: "🏪 도매 옵션",
      connect: "연락처",
      daily: "매일：",
      copyright: "© 2024 WhiteAshBkk. 모든 권리 보유. 구매하려면 20세 이상이어야 합니다.",
      consumeResponsibly: "책임감 있게 소비하십시오. 🌿",
      
      // Cart
      yourCart: "🌿 장바구니",
      cartEmpty: "장바구니가 비어 있습니다",
      cartEmptyDescription: "프리미엄 품종을 추가하여 시작하세요!",
      remove: "제거",
      total: "합계：",
      placeOrder: "Instagram 메시지",
      contactToComplete: "주문 내용을 메시지로 보내기",
      faqs: "자주 묻는 질문"
    }
  };

  const t = translations[language];

  const languageNames = {
    en: 'English',
    th: 'ไทย',
    zh: '中文',
    ja: '日本語',
    ko: '한국어'
  };

  const languageFlags = {
    en: '🇬🇧',
    th: '🇹🇭',
    zh: '🇨🇳',
    ja: '🇯🇵',
    ko: '🇰🇷'
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = item.price.startsWith('฿') ? parseFloat(item.price.replace('฿', '')) : 0;
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const products = [
    { 
      id: 1, 
      name: "La Rosa", 
      category: "flower", 
      thc: "23%", 
      price: "฿50", 
      type: "Hybrid",
      feelings: "Focused, Aroused, Relaxed",
      taste: "Sweet, Roses, Citrus",
      image: "/IMG_2108.jpeg" 
    },
    { 
      id: 2, 
      name: "Lemon Cherry Gelato", 
      category: "flower", 
      thc: "20%", 
      price: "฿50", 
      type: "Hybrid",
      feelings: "Smile, Relaxed, Tingly",
      taste: "Lemon, Sweet, Cherry",
      image: "/IMG_2109.jpeg" 
    },
    { 
      id: 3, 
      name: "Gorilla Glue #4", 
      category: "flower", 
      thc: "28%", 
      price: "฿200", 
      type: "Hybrid",
      feelings: "Sexy, Aroused, Relaxed",
      taste: "Earthy, Pine, Pungent",
      image: "/IMG_2107.jpeg" 
    },
    { 
      id: 4, 
      name: "Bubble Gum", 
      category: "flower", 
      thc: "27%", 
      price: "฿200", 
      type: "Hybrid",
      feelings: "Happy, Aroused, Euphoric",
      taste: "Flowery, Sweet, Berry",
      image: "/IMG_2106.jpeg" 
    },
    { 
      id: 6, 
      name: "Sugar Cane", 
      category: "flower", 
      thc: "24%", 
      price: "฿100", 
      type: "Hybrid",
      feelings: "Focus, Energetic, Uplifting",
      taste: "Grape, Flora, Sweet",
      image: "/IMG_2111 (1).jpg" 
    },
    { 
      id: 7, 
      name: "Skywalker", 
      category: "flower", 
      thc: "22%", 
      price: "฿100", 
      type: "Hybrid",
      feelings: "Happy, Sleepy, Relaxed",
      taste: "Earthy, Flowery, Sweet",
      image: "/unnamed (2).jpg" 
    },
    { 
      id: 8, 
      name: "Obama Runtz", 
      category: "flower", 
      thc: "20%", 
      price: "฿100", 
      type: "Hybrid",
      feelings: "Hungry, Relaxed, Talkative",
      taste: "Diesel, Tea, Berry",
      image: "/IMG_2112.jpg" 
    },
    { 
      id: 9, 
      name: "Green Crack", 
      category: "flower", 
      thc: "24%", 
      price: "฿50", 
      type: "Hybrid",
      feelings: "Happy, Creative, Relaxed",
      taste: "Butter, Earthy, Sweet",
      image: "/IMG_2110.jpg" 
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-green-950 text-white relative overflow-x-hidden"
      onMouseMove={handleMouseMove}
      style={{ cursor: 'none' }}
    >
      {/* Custom Styles */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&family=Dancing+Script:wght@400;700&display=swap');
        
        * {
          cursor: none !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.5); }
          50% { box-shadow: 0 0 40px rgba(34, 197, 94, 0.8); }
        }
        
        @keyframes smoke {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 1;
          }
          50% {
            transform: translateY(-40px) translateX(15px) scale(2);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-80px) translateX(-10px) scale(3);
            opacity: 0;
          }
        }
        
        @keyframes rotate-gentle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            filter: drop-shadow(0 0 10px rgba(34, 197, 94, 0.8)) brightness(1);
          }
          50% { 
            filter: drop-shadow(0 0 30px rgba(34, 197, 94, 1)) brightness(1.2);
          }
        }
        
        @keyframes joint-smoke {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0.9;
          }
          50% {
            transform: translateY(-50px) translateX(20px) scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100px) translateX(-10px) scale(2.5);
            opacity: 0;
          }
        }
        
        @keyframes joint-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          50% { 
            transform: translateY(-15px) rotate(5deg);
          }
        }
        
        @keyframes text-glow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(34, 197, 94, 0.8), 0 0 10px rgba(234, 179, 8, 0.6);
          }
          50% {
            text-shadow: 0 0 10px rgba(34, 197, 94, 1), 0 0 20px rgba(234, 179, 8, 1), 0 0 30px rgba(34, 197, 94, 0.5);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes smokeRise {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-50px) translateX(10px) scale(2);
            opacity: 0;
          }
        }
        
        @keyframes cherryGlow {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 5px rgba(255, 100, 0, 0.5));
          }
          50% {
            filter: brightness(1.3) drop-shadow(0 0 15px rgba(255, 100, 0, 0.8));
          }
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .glow-animation {
          animation: glow 2s ease-in-out infinite;
        }
        
        .smoke-particle {
          animation: smoke 4s ease-out infinite;
        }
        
        .rotate-gentle {
          animation: rotate-gentle 4s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .joint-smoke {
          animation: joint-smoke 5s ease-out infinite;
        }
        
        .joint-float {
          animation: joint-float 4s ease-in-out infinite;
        }
        
        .joint-text {
          animation: text-glow 2s ease-in-out infinite;
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .cursive-text {
          font-family: 'Dancing Script', cursive;
          font-weight: 700;
          text-shadow: 0 0 20px rgba(34, 197, 94, 0.5), 0 0 40px rgba(34, 197, 94, 0.3);
        }
      `}</style>

      {/* Cursor Trails - Smoky Cursive Effect */}
      {cursorTrail.map((trail, index) => (
        <div
          key={trail.id}
          className="fixed pointer-events-none z-[200]"
          style={{
            left: trail.x,
            top: trail.y,
            transform: 'translate(-50%, -50%)',
            opacity: (index + 1) / cursorTrail.length * 0.6,
            transition: 'opacity 0.5s ease-out'
          }}
        >
          <div 
            className="w-2 h-2 bg-green-400/60 rounded-full blur-md"
            style={{
              animation: 'smokeRise 2s ease-out forwards',
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)'
            }}
          ></div>
        </div>
      ))}

      {/* Main Custom Cursor */}
      <div 
        className="fixed pointer-events-none z-[201]"
        style={{
          left: cursorTrail[cursorTrail.length - 1]?.x || 0,
          top: cursorTrail[cursorTrail.length - 1]?.y || 0,
          transform: 'translate(-50%, -50%)',
          transition: 'left 0.05s, top 0.05s'
        }}
      >
        <div className="w-4 h-4 border-2 border-green-400 rounded-full animate-pulse"></div>
      </div>

      {/* Ambient Smoke Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-black/95 to-green-950/90"></div>
        
        {/* Dense Repeating Mascot Pattern */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'url("/IMG_2103.jpg")',
            backgroundSize: '120px 120px',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center'
          }}
        ></div>
        
        {/* Additional scattered larger mascots - TOP SECTION */}
        <div className="absolute top-5 left-[3%] opacity-8 animate-pulse">
          <Image src="/IMG_2103.jpg" alt="" width={150} height={150} className="object-contain" />
        </div>
        <div className="absolute top-10 left-[25%] opacity-7 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={130} height={130} className="object-contain" />
        </div>
        <div className="absolute top-8 left-[50%] opacity-6 animate-pulse" style={{ animationDelay: '1s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={140} height={140} className="object-contain" />
        </div>
        <div className="absolute top-12 right-[20%] opacity-8 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={160} height={160} className="object-contain" />
        </div>
        <div className="absolute top-6 right-[5%] opacity-7 animate-pulse" style={{ animationDelay: '0.8s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={145} height={145} className="object-contain" />
        </div>
        
        {/* MIDDLE SECTION */}
        <div className="absolute top-[30%] left-[8%] opacity-9 animate-pulse" style={{ animationDelay: '2s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={170} height={170} className="object-contain" />
        </div>
        <div className="absolute top-[35%] left-[35%] opacity-7 animate-pulse" style={{ animationDelay: '1.2s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={155} height={155} className="object-contain" />
        </div>
        <div className="absolute top-[40%] right-[8%] opacity-8 animate-pulse" style={{ animationDelay: '1.8s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={180} height={180} className="object-contain" />
        </div>
        <div className="absolute top-[45%] right-[40%] opacity-6 animate-pulse" style={{ animationDelay: '0.6s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={135} height={135} className="object-contain" />
        </div>
        <div className="absolute top-[50%] left-[15%] opacity-7 animate-pulse" style={{ animationDelay: '2.3s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={165} height={165} className="object-contain" />
        </div>
        
        {/* LOWER SECTION */}
        <div className="absolute bottom-[30%] left-[5%] opacity-8 animate-pulse" style={{ animationDelay: '1.4s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={175} height={175} className="object-contain" />
        </div>
        <div className="absolute bottom-[25%] left-[30%] opacity-7 animate-pulse" style={{ animationDelay: '0.9s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={150} height={150} className="object-contain" />
        </div>
        <div className="absolute bottom-[20%] right-[10%] opacity-9 animate-pulse" style={{ animationDelay: '1.7s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={185} height={185} className="object-contain" />
        </div>
        <div className="absolute bottom-[28%] right-[35%] opacity-6 animate-pulse" style={{ animationDelay: '2.1s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={140} height={140} className="object-contain" />
        </div>
        
        {/* BOTTOM SECTION */}
        <div className="absolute bottom-[10%] left-[12%] opacity-8 animate-pulse" style={{ animationDelay: '1.1s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={160} height={160} className="object-contain" />
        </div>
        <div className="absolute bottom-[8%] left-[45%] opacity-7 animate-pulse" style={{ animationDelay: '1.9s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={155} height={155} className="object-contain" />
        </div>
        <div className="absolute bottom-[12%] right-[15%] opacity-8 animate-pulse" style={{ animationDelay: '0.7s' }}>
          <Image src="/IMG_2103.jpg" alt="" width={170} height={170} className="object-contain" />
        </div>
        
        {/* Glowing Orbs for ambiance */}
        <div className="absolute top-32 left-[15%] w-96 h-96 bg-green-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-[20%] w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[50%] left-[50%] w-72 h-72 bg-green-400/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10" onClick={() => setShowLangMenu(false)}>

        {/* Header */}
        <header className="bg-green-950/80 backdrop-blur-md border-b-2 border-green-800 px-4 sm:px-6 py-4 sm:py-6 sticky top-0 z-50 relative">
          {/* Smoke particles in header */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            <div className="smoke-particle absolute bottom-0 left-[10%] w-24 h-24 bg-green-400/60 rounded-full blur-xl" style={{ animationDelay: '0s' }}></div>
            <div className="smoke-particle absolute bottom-0 left-[25%] w-28 h-28 bg-emerald-400/50 rounded-full blur-2xl" style={{ animationDelay: '1s' }}></div>
            <div className="smoke-particle absolute bottom-0 left-[40%] w-32 h-32 bg-green-300/60 rounded-full blur-xl" style={{ animationDelay: '2s' }}></div>
            <div className="smoke-particle absolute bottom-0 left-[55%] w-26 h-26 bg-emerald-300/50 rounded-full blur-2xl" style={{ animationDelay: '0.5s' }}></div>
            <div className="smoke-particle absolute bottom-0 left-[70%] w-30 h-30 bg-green-400/60 rounded-full blur-xl" style={{ animationDelay: '1.5s' }}></div>
            <div className="smoke-particle absolute bottom-0 left-[85%] w-28 h-28 bg-emerald-400/50 rounded-full blur-2xl" style={{ animationDelay: '2.5s' }}></div>
            <div className="smoke-particle absolute bottom-0 right-[5%] w-32 h-32 bg-green-300/60 rounded-full blur-xl" style={{ animationDelay: '3s' }}></div>
            <div className="smoke-particle absolute bottom-0 left-[15%] w-24 h-24 bg-emerald-400/50 rounded-full blur-2xl" style={{ animationDelay: '3.5s' }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center justify-center w-full sm:w-auto">
              <div className="pulse-glow">
                <Image
                  src="/unnamed (3).jpg"
                  alt="WhiteAshBkk Sign"
                  width={600}
                  height={150}
                  className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
                />
              </div>
            </div>
            
            <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              <a href="#menu" className="text-green-200 hover:text-green-400 transition-colors font-medium text-sm sm:text-base">{t.menu}</a>
              <a href="#about" className="text-green-200 hover:text-green-400 transition-colors font-medium text-sm sm:text-base">{t.about}</a>
              <a href="#contact" className="text-green-200 hover:text-green-400 transition-colors font-medium text-sm sm:text-base">{t.contact}</a>
              
              {/* Language Switcher Dropdown */}
              <div className="relative z-[100]">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowLangMenu(!showLangMenu);
                    console.log("Language menu toggled:", !showLangMenu);
                  }}
                  className="flex items-center gap-1 sm:gap-2 bg-green-700 hover:bg-green-600 rounded-lg px-2 sm:px-3 py-2 font-medium text-xs sm:text-sm transition-all text-white shadow-md hover:shadow-lg border border-green-500"
                  title="Change Language"
                >
                  <span className="text-base sm:text-lg">{languageFlags[language]}</span>
                  <span className="hidden sm:inline font-bold">{languageNames[language]}</span>
                  <span className="sm:hidden font-bold text-xs">{language.toUpperCase()}</span>
                  <svg className={`w-3 h-3 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {showLangMenu && (
                  <>
                    {/* Backdrop */}
                    <div 
                      className="fixed inset-0 z-[98] bg-black/20"
                      onClick={() => setShowLangMenu(false)}
                    />
                    
                    {/* Dropdown Menu */}
                    <div 
                      className="absolute top-full right-0 mt-2 bg-green-900 border-2 border-green-500 rounded-lg shadow-2xl overflow-visible z-[99] w-[160px] sm:w-[180px] animate-fadeIn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {Object.keys(languageNames).map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log("Language changed to:", lang);
                            setLanguage(lang);
                            setShowLangMenu(false);
                          }}
                          className={`w-full flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 text-left transition-all hover:scale-[1.02] ${
                            language === lang
                              ? 'bg-green-600 text-white font-bold'
                              : 'text-green-200 hover:bg-green-700 hover:text-white'
                          }`}
                        >
                          <span className="text-lg sm:text-xl">{languageFlags[lang]}</span>
                          <span className="font-medium text-sm sm:text-base">{languageNames[lang]}</span>
                          {language === lang && <span className="ml-auto text-green-300 text-sm">✓</span>}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <button 
                onClick={() => setShowCart(true)}
                className="relative bg-green-600 hover:bg-green-700 text-white px-3 sm:px-4 py-2 rounded-lg font-medium text-xs sm:text-sm transition-colors flex items-center gap-1 sm:gap-2"
              >
                🌿 {t.cart}
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center font-bold">
                    {getCartCount()}
                  </span>
                )}
              </button>
            </nav>
          </div>
        </header>

        {/* Shopping Cart Modal */}
        {showCart && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
            <div className="bg-green-950 border-2 border-green-600 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
              {/* Cart Header */}
              <div className="bg-green-900/50 px-6 py-4 border-b border-green-700 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-green-300">{t.yourCart}</h2>
                <button 
                  onClick={() => setShowCart(false)}
                  className="text-green-300 hover:text-white text-3xl font-bold"
                >
                  ×
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-green-300 text-xl mb-2">{t.cartEmpty}</p>
                    <p className="text-green-400">{t.cartEmptyDescription}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map(item => (
                      <div key={item.id} className="bg-green-900/30 rounded-lg p-4 border border-green-700 flex gap-4">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-green-200 font-bold text-lg">{item.name}</h3>
                          <p className="text-green-400 text-sm">{item.type} • THC {item.thc}</p>
                          <p className="text-green-300 font-bold mt-1">
                            {item.price.startsWith('฿') ? item.price : 'Contact for Price'}
                          </p>
                        </div>
                        <div className="flex flex-col items-center justify-between">
                          <div className="flex items-center gap-2 bg-green-800/50 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-3 py-1 text-green-300 hover:text-white font-bold"
                            >
                              -
                            </button>
                            <span className="text-green-200 font-bold w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-3 py-1 text-green-300 hover:text-white font-bold"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-300 text-sm mt-2"
                          >
                            {t.remove}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Cart Footer */}
              {cart.length > 0 && (
                <div className="bg-green-900/50 px-6 py-4 border-t border-green-700">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-green-300 text-lg font-bold">{t.total}</span>
                    <span className="text-green-300 text-2xl font-bold">฿{getCartTotal()}</span>
                  </div>
                  <a 
                    href="https://ig.me/m/whiteashbkk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02] shadow-lg"
                  >
                    <span>📷</span>
                    <span>{t.placeOrder}</span>
                  </a>
                  <p className="text-green-400 text-xs text-center mt-2">
                    {t.contactToComplete}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1">
          {/* Hero Section - Joint TV */}
          <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
              {/* Elegant Cursive Title */}
              <h1 className="cursive-text text-5xl sm:text-6xl lg:text-8xl font-bold text-green-400 mb-8 sm:mb-12 animate-pulse">
                WhiteAsh BKK
              </h1>
              
              {/* Video */}
              <div className="flex justify-center mb-8 sm:mb-12 px-4">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <video 
                    key="hero-video"
                    className="w-full h-full object-cover rounded-full shadow-2xl float-animation border-4 border-green-600"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    preload="auto"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(34, 197, 94, 0.6))'
                    }}
                  >
                    <source src="/hero-video.mov" type="video/mp4" />
                    <source src="/hero-video.mov" type="video/quicktime" />
                  </video>
                  
                  {/* Glowing ring around video */}
                  <div 
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, transparent 60%, rgba(34, 197, 94, 0.2) 70%, transparent 80%)',
                      animation: 'pulse-glow 3s ease-in-out infinite'
                    }}
                  ></div>
                  
                  {/* Smoke particles around video */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute bottom-0 left-1/2 w-8 h-8 bg-green-400/20 rounded-full blur-xl"
                        style={{
                          animation: `smokeRise ${3 + i * 0.5}s ease-out infinite`,
                          animationDelay: `${i * 0.6}s`,
                          transform: 'translateX(-50%)'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Subtitle in cursive */}
              <p className="cursive-text text-xl sm:text-2xl lg:text-3xl text-green-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                {t.heroSubtitle}
              </p>
              
              <div className="flex justify-center items-center mb-6">
                <div className="bg-green-900/60 backdrop-blur-sm border border-green-600 rounded-lg px-4 sm:px-6 py-2 sm:py-3">
                  <span className="text-yellow-400 text-lg sm:text-2xl">⭐ 4.9/5</span>
                  <span className="text-green-300 ml-2 text-sm sm:text-base">{t.excellentReviews}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                <button className="bg-green-600 hover:bg-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all font-bold text-white text-base sm:text-lg hover:scale-105 w-full sm:w-auto">
                  {t.browseMenu}
                </button>
                <button className="bg-green-800 hover:bg-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all font-bold text-white text-base sm:text-lg hover:scale-105 border-2 border-green-600 w-full sm:w-auto">
                  {t.learnMore}
                </button>
              </div>
            </div>
          </section>

          {/* Category Filter */}
          <section id="menu" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-green-950/50">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-green-300 mb-4 text-center px-4">
                {t.ourMenu}
              </h3>
              
              {/* Specialization Badge */}
              <div className="flex justify-center mb-6 sm:mb-8 px-4">
                <div className="bg-green-800/80 backdrop-blur-sm border-2 border-green-500 rounded-lg px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                  <span className="text-green-200 font-semibold text-sm sm:text-base text-center block">{t.flowerSpecialist}</span>
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id}
                    className="bg-green-900/40 backdrop-blur-sm border-2 border-green-700 rounded-xl p-4 sm:p-6 hover:scale-105 transition-all hover:border-green-500 hover:shadow-2xl"
                  >
                    {/* Product Image */}
                    <div className="relative rounded-lg mb-3 sm:mb-4 h-48 sm:h-56 lg:h-64 overflow-hidden border-2 border-green-600">
            <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Strain Name */}
                    <h4 className="text-xl sm:text-2xl font-bold text-green-400 mb-2">{product.name}</h4>
                    
                    {/* Type and THC */}
                    <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                      <span className="bg-green-700/50 text-green-300 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                        {product.type}
                      </span>
                      <span className="bg-green-600/50 text-green-200 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                        THC {product.thc}
                      </span>
                    </div>
                    
                    {/* Feelings */}
                    <div className="mb-3">
                      <p className="text-green-400 text-xs font-bold mb-1">{t.feelings}</p>
                      <p className="text-green-300 text-xs sm:text-sm">{product.feelings}</p>
                    </div>
                    
                    {/* Taste */}
                    <div className="mb-4">
                      <p className="text-green-400 text-xs font-bold mb-1">{t.taste}</p>
                      <p className="text-green-300 text-xs sm:text-sm">{product.taste}</p>
                    </div>
                    
                    {/* Price Display */}
                    {product.price.startsWith('฿') ? (
                      <div className="space-y-3">
                        <div className="w-full bg-gradient-to-r from-green-700 to-green-800 py-3 sm:py-4 rounded-lg font-bold text-white shadow-lg text-center border-2 border-green-500">
                          <div className="text-2xl sm:text-3xl text-green-200">{product.price}</div>
                          <div className="text-xs sm:text-sm text-green-300 mt-1">{t.perGram}</div>
                        </div>
                        <button 
                          onClick={() => addToCart(product)}
                          className="w-full bg-green-600 hover:bg-green-700 py-2 sm:py-3 rounded-lg font-bold text-white transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
                        >
                          {t.addToCart}
                        </button>
                      </div>
                    ) : (
                      <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 py-2 sm:py-3 rounded-lg font-bold text-white transition-all shadow-lg text-sm sm:text-base">
                        {t.contactForPrice}
                      </button>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Instagram CTA */}
              <div className="mt-8 sm:mt-12 text-center px-4">
                <div className="bg-green-900/60 backdrop-blur-sm border-2 border-green-600 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
                  <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📷</div>
                  <h4 className="text-xl sm:text-2xl font-bold text-green-400 mb-2 sm:mb-3">{t.seeFullMenu}</h4>
                  <p className="text-green-200 mb-4 sm:mb-6 text-sm sm:text-base">
                    {t.instagramDescription}
                  </p>
                  <a 
                    href="https://www.instagram.com/whiteashbkk/" 
            target="_blank"
            rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-white text-base sm:text-lg transition-all hover:scale-105 shadow-lg w-full sm:w-auto"
          >
                    {t.followInstagram}
          </a>
        </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-4 sm:mb-6">{t.aboutTitle}</h3>
                  <p className="text-green-200 text-base sm:text-lg mb-3 sm:mb-4">
                    {t.aboutText1}
                  </p>
                  <p className="text-green-200 text-lg mb-4">
                    {t.aboutText2}
                  </p>
                  <p className="text-green-200 text-lg mb-6">
                    {t.aboutText3}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-900/40 border border-green-700 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">⭐</div>
                      <div className="text-green-400 font-bold">{t.rating}</div>
                    </div>
                    <div className="bg-green-900/40 border border-green-700 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">🌿</div>
                      <div className="text-green-400 font-bold">{t.flowerOnly}</div>
                    </div>
                    <div className="bg-green-900/40 border border-green-700 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">🏪</div>
                      <div className="text-green-400 font-bold">{t.wholesale}</div>
                    </div>
                    <div className="bg-green-900/40 border border-green-700 rounded-lg p-4 text-center">
                      <div className="text-3xl mb-2">🚚</div>
                      <div className="text-green-400 font-bold">{t.bangkokDelivery}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-900/40 border-2 border-green-700 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-green-400 mb-6 text-center">{t.storeHours}</h4>
                  <div className="space-y-2 text-base">
                    <div className="flex justify-between text-green-200">
                      <span>{t.monday}</span>
                      <span className="font-bold">11 AM - 12 AM</span>
                    </div>
                    <div className="flex justify-between text-green-200">
                      <span>{t.tuesday}</span>
                      <span className="font-bold">11 AM - 12 AM</span>
                    </div>
                    <div className="flex justify-between text-green-200">
                      <span>{t.wednesday}</span>
                      <span className="font-bold">11 AM - 12 AM</span>
                    </div>
                    <div className="flex justify-between text-green-200">
                      <span>{t.thursday}</span>
                      <span className="font-bold">11 AM - 12 AM</span>
                    </div>
                    <div className="flex justify-between text-green-200">
                      <span>{t.friday}</span>
                      <span className="font-bold">11 AM - 12 AM</span>
                    </div>
                    <div className="flex justify-between text-green-200">
                      <span>{t.saturday}</span>
                      <span className="font-bold">11 AM - 12 AM</span>
                    </div>
                    <div className="flex justify-between text-green-200">
                      <span>{t.sunday}</span>
                      <span className="font-bold">11 AM - 12 AM</span>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-green-700">
                    <p className="text-green-300 text-center font-bold mb-3">
                      {t.address}
                    </p>
                    <p className="text-green-200 text-center text-sm">
                      Soi Rattanathibech 38, Tambon Bang Kraso
                    </p>
                    <p className="text-green-200 text-center text-sm">
                      Mueang Nonthaburi District
                    </p>
                    <p className="text-green-200 text-center text-sm mb-3">
                      Nonthaburi 11000, Thailand
                    </p>
                    <p className="text-green-300 text-center font-bold mb-2">
                      {t.phone}
                    </p>
                    <a href="tel:0618790582" className="text-green-400 text-center block hover:text-green-300 transition-colors">
                      061 879 0582
                    </a>
                    <p className="text-green-200 text-center mt-4 text-sm">
                      {t.deliveryAvailable}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Customer Reviews Section */}
          <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-400 mb-3 sm:mb-4">{t.customerReviews}</h3>
                <div className="flex justify-center items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400 text-3xl">⭐⭐⭐⭐⭐</span>
                    <span className="text-green-300 text-2xl font-bold">4.8/5</span>
                  </div>
                </div>
                <p className="text-green-200">{t.basedOnReviews}</p>
              </div>

              {/* Review Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Review 1 */}
                <div className="bg-green-900/40 backdrop-blur-sm border-2 border-green-700 rounded-xl p-6 hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                      Si
                    </div>
                    <div className="flex-1">
                      <div className="text-yellow-400 mb-1">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p className="text-green-200 italic mb-2">
                    &ldquo;Premium products and good quality. Nice service with smiles&rdquo;
                  </p>
                  <p className="text-green-400 text-sm">- Google Review</p>
                </div>

                {/* Review 2 */}
                <div className="bg-green-900/40 backdrop-blur-sm border-2 border-green-700 rounded-xl p-6 hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                      O
                    </div>
                    <div className="flex-1">
                      <div className="text-yellow-400 mb-1">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p className="text-green-200 italic mb-2">
                    &ldquo;Super nice staff and good services.&rdquo;
                  </p>
                  <p className="text-green-400 text-sm">- Google Review</p>
                </div>

                {/* Review 3 */}
                <div className="bg-green-900/40 backdrop-blur-sm border-2 border-green-700 rounded-xl p-6 hover:scale-105 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-bold text-xl mr-3">
                      V
                    </div>
                    <div className="flex-1">
                      <div className="text-yellow-400 mb-1">⭐⭐⭐⭐⭐</div>
                    </div>
                  </div>
                  <p className="text-green-200 italic mb-2">
                    &ldquo;The owner is kind and lovely, and the prices are very friendly&rdquo;
                  </p>
                  <p className="text-green-400 text-sm">- Google Review</p>
                </div>
              </div>

              {/* Google Reviews Link */}
              <div className="text-center mt-12">
                <a 
                  href="https://www.google.com/search?q=whiteashbkk" 
          target="_blank"
          rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-8 py-4 rounded-lg font-bold text-white text-lg transition-all hover:scale-105 shadow-lg"
                >
                  {t.readAllReviews}
                </a>
              </div>
            </div>
          </section>

          {/* WhiteAsh BKK Sign Section */}
          <section id="contact" className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-green-950/50">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center">
                <div className="relative w-full max-w-4xl">
                  <Image
                    src="/unnamed (3).jpg"
                    alt="WhiteAsh BKK Sign"
                    width={1200}
                    height={400}
                    className="w-full h-auto rounded-2xl shadow-2xl border-4 border-green-600"
                    style={{
                      filter: 'drop-shadow(0 0 40px rgba(34, 197, 94, 0.4))'
                    }}
                  />
                  {/* Glowing effect */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at center, transparent 40%, rgba(34, 197, 94, 0.1) 70%, transparent 90%)',
                      animation: 'pulse-glow 3s ease-in-out infinite'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </section>
      </main>

        {/* Footer */}
        <footer className="bg-green-950/80 backdrop-blur-md border-t-2 border-green-800 px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-3">
          <Image
                    src="/IMG_2105.jpeg"
                    alt="WhiteAshBkk Logo"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <h4 className="text-xl font-bold text-green-400">WhiteAshBkk</h4>
                </div>
                <p className="text-green-200 text-sm mb-3">
                  {t.footerDescription}
                </p>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-green-300 text-sm">4.9/5</span>
                </div>
                <p className="text-green-300 text-xs">
                  {t.deliveryAvailable}
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-green-400 mb-4">{t.quickLinks}</h4>
                <ul className="space-y-2 text-green-200">
                  <li><a href="#menu" className="hover:text-green-400 transition-colors">{t.menu}</a></li>
                  <li><a href="#about" className="hover:text-green-400 transition-colors">{t.about}</a></li>
                  <li><a href="#contact" className="hover:text-green-400 transition-colors">{t.contact}</a></li>
                  <li><a href="#" className="hover:text-green-400 transition-colors">{t.faqs}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-green-400 mb-4">{t.ourSpecialty}</h4>
                <ul className="space-y-2 text-green-200">
                  <li><a href="#menu" className="hover:text-green-400 transition-colors">{t.premiumFlower}</a></li>
                  <li><a href="#menu" className="hover:text-green-400 transition-colors">{t.topShelfStrains}</a></li>
                  <li><a href="#menu" className="hover:text-green-400 transition-colors">{t.wholesaleOptions}</a></li>
                  <li><a href="#menu" className="hover:text-green-400 transition-colors">🚚 {t.bangkokDelivery}</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-green-400 mb-4">{t.connect}</h4>
                <div className="space-y-2 text-green-200">
                  <p>📱 <a href="tel:0618790582" className="hover:text-green-400 transition-colors">061 879 0582</a></p>
                  <p className="text-sm">📍 Soi Rattanathibech 38, Tambon Bang Kraso</p>
                  <p className="text-sm">Nonthaburi 11000, Thailand</p>
                  <p className="text-sm text-green-300">⏰ {t.daily} 11 AM - 12 AM</p>
                  <p className="text-sm text-green-300">{t.deliveryAvailable}</p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <button className="text-2xl hover:scale-110 transition-transform">📘</button>
                  <button className="text-2xl hover:scale-110 transition-transform">📷</button>
                  <button className="text-2xl hover:scale-110 transition-transform">🐦</button>
                </div>
              </div>
            </div>
            <div className="border-t border-green-800 pt-6 sm:pt-8 text-center">
              <p className="text-green-300 text-sm sm:text-base px-4">
                {t.copyright}
              </p>
              <p className="text-green-400 text-xs sm:text-sm mt-2">
                {t.consumeResponsibly}
              </p>
            </div>
          </div>
      </footer>
      </div>
    </div>
  );
}
