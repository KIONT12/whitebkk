"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NewLocation() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cartGlow, setCartGlow] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [language, setLanguage] = useState('en'); // 'en', 'th', 'zh', 'ja', 'ko'
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [heroVideoReady, setHeroVideoReady] = useState(false);
  const [heroVideoSrc, setHeroVideoSrc] = useState("/Sure_heres_a_202511120840_c7sbc.mp4");
  const heroVideoRef = useRef(null);

  // Ekkamai Location Photo Slideshow
  const slideshowImages = [
    "/IMG_2320.jpeg",                        // Logo/Sign
    "/PHOTO-2025-11-11-18-41-13 (1).jpg",   // Gaming Room - PS5 area
    "/PHOTO-2025-11-11-18-41-13.jpg",       // Gaming Room - Dual TVs
    "/PHOTO-2025-11-11-18-41-15.jpg",       // Gaming Area with aquarium
    "/PHOTO-2025-11-11-18-41-12.jpg",       // Exterior Night - Green Sign
    "/PHOTO-2025-11-11-18-41-16 (2).jpg",   // Counter with Pricing Board
    "/PHOTO-2025-11-11-18-41-16 (1).jpg",   // Interior Gaming View
    "/PHOTO-2025-11-11-18-41-16.jpg",       // WhiteAsh BKK Sign Close-up
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length);
  };

  // Translations
  const translations = {
    en: {
      nowOpen: "NOW OPEN",
      newLocationOpen: "New Location NOW OPEN!",
      weveExpanded: "We've expanded! Visit our brand new WhiteAsh BKK store at Ekkamai.",
      experiencePremium: "Experience premium cannabis flower at our beautiful new location now!",
      joinNewsletter: "Join Our Newsletter",
      newsletterDesc: "Get updates on new strains, special offers & more!",
      subscribe: "Subscribe!",
      thankYou: "Thank you! Welcome to our newsletter!",
      premiumFlowerSpecialist: "Premium Cannabis Flower Specialist",
      addToCart: "Add to Cart",
      yourCart: "Your Cart",
      cartEmpty: "Your cart is empty. Add some products!",
      total: "Total:",
      orderOnInstagram: "Order on Instagram",
      clickToComplete: "Click to complete your order via Instagram DM",
      followUs: "Follow us for updates:",
      callUs: "Line App",
      backToMain: "Back to Main Website",
      ourLocations: "Our Locations",
      ekkamaiNowOpen: "Ekkamai Location (NOW OPEN!)",
      originalLocation: "Original Location",
      daily: "Daily: 11 AM - 12 AM",
      newLocationAddress: "New Location Address",
      storeTourTitle: "Step inside the lounge",
      storeTourDescription: "Press play to take a quick walk-through of our freshly opened Ekkamai shop."
    },
    th: {
      nowOpen: "เปิดแล้ว",
      newLocationOpen: "สาขาใหม่เปิดแล้ว!",
      weveExpanded: "เราขยายธุรกิจ! มาเยี่ยมชมร้าน WhiteAsh BKK สาขาใหม่ที่เอกมัย",
      experiencePremium: "สัมผัสประสบการณ์กัญชาดอกพรีเมียมที่สาขาใหม่ของเราตอนนี้!",
      joinNewsletter: "สมัครรับจดหมายข่าว",
      newsletterDesc: "รับข้อมูลล่าสุดเกี่ยวกับสายพันธุ์ใหม่ และโปรโมชั่นพิเศษ!",
      subscribe: "สมัครสมาชิก!",
      thankYou: "ขอบคุณ! ยินดีต้อนรับสู่จดหมายข่าวของเรา!",
      premiumFlowerSpecialist: "ผู้เชี่ยวชาญกัญชาดอกพรีเมียม",
      addToCart: "เพิ่มในตะกร้า",
      yourCart: "ตะกร้าสินค้า",
      cartEmpty: "ตะกร้าว่างเปล่า เพิ่มสินค้าบางอย่าง!",
      total: "รวม:",
      orderOnInstagram: "สั่งทาง Instagram",
      clickToComplete: "คลิกเพื่อสั่งซื้อผ่าน Instagram DM",
      followUs: "ติดตามเราเพื่อรับข้อมูลล่าสุด:",
      callUs: "Line App",
      backToMain: "กลับไปหน้าหลัก",
      ourLocations: "สาขาของเรา",
      ekkamaiNowOpen: "สาขาเอกมัย (เปิดแล้ว!)",
      originalLocation: "สาขาเดิม",
      daily: "ทุกวัน: 11:00 - 24:00 น.",
      newLocationAddress: "ที่อยู่สาขาใหม่",
      storeTourTitle: "ชมบรรยากาศภายในร้าน",
      storeTourDescription: "กดเล่นเพื่อชมบรรยากาศภายในร้านสาขาเอกมัยที่เพิ่งเปิดใหม่ของเรา"
    },
    zh: {
      nowOpen: "现已开业",
      newLocationOpen: "新店现已开业！",
      weveExpanded: "我们扩大了！访问我们在Ekkamai的全新WhiteAsh BKK商店。",
      experiencePremium: "立即体验我们美丽新店的优质大麻花！",
      joinNewsletter: "订阅我们的通讯",
      newsletterDesc: "获取新品种和特别优惠的更新！",
      subscribe: "订阅！",
      thankYou: "谢谢！欢迎订阅我们的通讯！",
      premiumFlowerSpecialist: "优质大麻花专家",
      addToCart: "加入购物车",
      yourCart: "您的购物车",
      cartEmpty: "您的购物车是空的。添加一些产品！",
      total: "总计：",
      orderOnInstagram: "Instagram下单",
      clickToComplete: "点击通过Instagram DM完成订单",
      followUs: "关注我们获取更新：",
      callUs: "Line App",
      backToMain: "返回主页",
      ourLocations: "我们的分店",
      ekkamaiNowOpen: "Ekkamai分店（现已开业！）",
      originalLocation: "原分店",
      daily: "每日：11:00 - 24:00",
      newLocationAddress: "新店地址",
      storeTourTitle: "走进我们的休闲空间",
      storeTourDescription: "点击播放，快速参观我们全新的 Ekkamai 店面。"
    },
    ja: {
      nowOpen: "営業中",
      newLocationOpen: "新店舗オープン！",
      weveExpanded: "拡大しました！エカマイの新しいWhiteAsh BKK店舗をご覧ください。",
      experiencePremium: "美しい新店舗でプレミアム大麻フラワーを今すぐ体験してください！",
      joinNewsletter: "ニュースレターに登録",
      newsletterDesc: "新品種と特別オファーの更新を受け取りましょう！",
      subscribe: "登録する！",
      thankYou: "ありがとうございます！ニュースレターへようこそ！",
      premiumFlowerSpecialist: "プレミアム大麻フラワー専門店",
      addToCart: "カートに追加",
      yourCart: "カート",
      cartEmpty: "カートは空です。商品を追加してください！",
      total: "合計：",
      orderOnInstagram: "Instagramで注文",
      clickToComplete: "Instagram DMで注文を完了するにはクリック",
      followUs: "最新情報をフォロー：",
      callUs: "Line App",
      backToMain: "メインサイトに戻る",
      ourLocations: "店舗一覧",
      ekkamaiNowOpen: "エカマイ店（営業中！）",
      originalLocation: "本店",
      daily: "毎日：11:00 - 24:00",
      newLocationAddress: "新店舗住所",
      storeTourTitle: "店内ツアーをご覧ください",
      storeTourDescription: "再生ボタンを押して、オープンしたばかりのエカマイ店を覗いてみましょう。"
    },
    ko: {
      nowOpen: "영업 중",
      newLocationOpen: "새 매장 오픈！",
      weveExpanded: "확장했습니다! 에까마이에 있는 새로운 WhiteAsh BKK 매장을 방문하세요.",
      experiencePremium: "아름다운 새 매장에서 프리미엄 대마초 꽃을 경험하세요!",
      joinNewsletter: "뉴스레터 구독",
      newsletterDesc: "새로운 품종과 특별 할인 정보를 받아보세요!",
      subscribe: "구독하기!",
      thankYou: "감사합니다! 뉴스레터에 오신 것을 환영합니다!",
      premiumFlowerSpecialist: "프리미엄 대마초 꽃 전문점",
      addToCart: "장바구니에 추가",
      yourCart: "장바구니",
      cartEmpty: "장바구니가 비어 있습니다. 제품을 추가하세요!",
      total: "총액：",
      orderOnInstagram: "Instagram에서 주문",
      clickToComplete: "Instagram DM으로 주문을 완료하려면 클릭",
      followUs: "업데이트 팔로우하기：",
      callUs: "Line App",
      backToMain: "메인 웹사이트로 돌아가기",
      ourLocations: "매장 위치",
      ekkamaiNowOpen: "에까마이 매장 (영업 중!)",
      originalLocation: "본점",
      daily: "매일: 11:00 - 24:00",
      newLocationAddress: "새 매장 주소",
      storeTourTitle: "라운지를 둘러보세요",
      storeTourDescription: "재생 버튼을 눌러 새롭게 오픈한 에까마이 매장을 미리 만나보세요."
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
      setCart(cart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    // Trigger glow animation
    setCartGlow(true);
    setTimeout(() => setCartGlow(false), 1000);
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter(item => item.name !== productName));
  };

  const updateQuantity = (productName, change) => {
    setCart(cart.map(item => {
      if (item.name === productName) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      window.open('https://instagram.com/whiteashbkk', '_blank');
    }
  };

  const openImage = (src, alt) => {
    setEnlargedImage({ src, alt });
  };

  const closeImage = () => {
    setEnlargedImage(null);
  };

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    setHeroVideoReady(false);

    const ensurePlayback = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          video.muted = true;
          setTimeout(() => {
            video.play().catch(() => {});
          }, 150);
        });
      }
    };

    video.addEventListener("loadeddata", ensurePlayback);
    video.addEventListener("canplay", ensurePlayback);
    ensurePlayback();

    return () => {
      video.removeEventListener("loadeddata", ensurePlayback);
      video.removeEventListener("canplay", ensurePlayback);
    };
  }, [heroVideoSrc]);

  return (
    <div 
      className="bigparty-theme min-h-[100dvh] bg-black text-white overflow-hidden relative"
      style={{ 
        fontFamily: "'Poppins', sans-serif",
        color: '#fff6d6',
        letterSpacing: '0.02em'
      }}
    >

      {/* Video Background */}
      <div className="fixed inset-0 flex items-center justify-center overflow-hidden">
        {/* Background Video - Scaled smaller on mobile */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover scale-75 sm:scale-90 lg:scale-100"
          style={{
            opacity: '0.8',
            filter: 'brightness(1.1)'
          }}
        >
          <source src="/ScreenRecording_11-11-2025 20-26-35_1.mov" type="video/mp4" />
        </video>
        
        {/* Lighter overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/40 via-black/20 to-yellow-900/40"></div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
 
        @font-face {
          font-family: 'BigPartyC2';
          src: url('/bigpartyc2-font/Bigpartyc2blue-9Yy0K.ttf') format('truetype');
          font-display: swap;
        }

        .bigparty-theme .product-card h4 {
          color: #fffef2 !important;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
        }

        .bigparty-theme .product-card p {
          color: #fdf5c8 !important;
        }

        .bigparty-theme .product-card .text-green-300,
        .bigparty-theme .product-card .text-green-200,
        .bigparty-theme .product-card .text-green-400,
        .bigparty-theme .product-card .text-green-100 {
          color: #fffdf5 !important;
        }

        body {
          background-color: #211b01;
        }

        .bigparty-theme {
          font-family: 'Poppins', sans-serif;
        }

        .bigparty-theme h1,
        .bigparty-theme h2,
        .bigparty-theme h3,
        .bigparty-theme h4,
        .bigparty-theme h5,
        .bigparty-theme h6 {
          font-family: 'BigPartyC2', cursive;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
        }

        .bigparty-theme p,
        .bigparty-theme li,
        .bigparty-theme span,
        .bigparty-theme a,
        .bigparty-theme button,
        .bigparty-theme input,
        .bigparty-theme label {
          font-family: 'Poppins', sans-serif !important;
          font-size: 1em !important;
          letter-spacing: 0.015em;
          text-shadow: none;
        }

        .text-green-400 {
          color: #fff5a8 !important;
        }

        .text-green-300 {
          color: #ffeebe !important;
        }

        .text-green-200 {
          color: #fff7d9 !important;
        }

        .text-green-100 {
          color: #fffdf0 !important;
        }

        .text-green-300.mb-4 {
          color: #ffecb0 !important;
        }

        .bg-green-900\\/40 {
          background-color: rgba(93, 74, 3, 0.78) !important;
        }

        .bg-green-950\\/30 {
          background-color: rgba(60, 46, 0, 0.75) !important;
        }

        .bg-green-900\\/25 {
          background-color: rgba(80, 62, 2, 0.7) !important;
        }

        .bg-green-950\\/60 {
          background-color: rgba(55, 42, 0, 0.85) !important;
        }

        .border-green-500\\/50 {
          border-color: rgba(255, 233, 103, 0.35) !important;
        }

        .border-green-600\\/50 {
          border-color: rgba(255, 229, 79, 0.42) !important;
        }

        .border-green-500\\/60 {
          border-color: rgba(255, 233, 103, 0.5) !important;
        }

        .from-green-500 {
          --tw-gradient-from: #ffd351 !important;
          --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(255, 211, 81, 0)) !important;
        }

        .to-emerald-600 {
          --tw-gradient-to: #ffb400 !important;
        }

        .bg-green-600 {
          background-color: #ffb400 !important;
        }

        .hover\\:bg-green-500:hover {
          background-color: #ffd351 !important;
        }

        .border-green-500 {
          border-color: rgba(255, 216, 74, 0.6) !important;
        }

        .bg-green-950\\/30 input {
          color: #fff9d9 !important;
        }

        .bg-black\\/70 {
          background-color: rgba(29, 21, 0, 0.78) !important;
        }

        .bg-green-900\\/50 {
          background-color: rgba(78, 60, 2, 0.8) !important;
        }
      `}</style>

      <style jsx>{`
        @keyframes fade-out {
          to {
            opacity: 0;
            transform: scale(2);
          }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.4);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 50px rgba(34, 197, 94, 0.8), 0 0 100px rgba(34, 197, 94, 0.6);
            transform: scale(1.05);
          }
        }
        @keyframes text-glow {
          0%, 100% { 
            text-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(34, 197, 94, 0.6);
          }
          50% { 
            text-shadow: 0 0 30px rgba(34, 197, 94, 1), 0 0 60px rgba(34, 197, 94, 0.8);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes cart-glow {
          0% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.4);
            transform: scale(1);
          }
          25% {
            box-shadow: 0 0 80px rgba(34, 197, 94, 1), 0 0 140px rgba(34, 197, 94, 0.9), 0 0 200px rgba(34, 197, 94, 0.7), 0 0 260px rgba(34, 197, 94, 0.5);
            transform: scale(1.25) rotate(5deg);
          }
          50% {
            box-shadow: 0 0 100px rgba(34, 197, 94, 1), 0 0 160px rgba(34, 197, 94, 0.95), 0 0 240px rgba(34, 197, 94, 0.8), 0 0 320px rgba(34, 197, 94, 0.6);
            transform: scale(1.3);
          }
          75% {
            box-shadow: 0 0 80px rgba(34, 197, 94, 1), 0 0 140px rgba(34, 197, 94, 0.9), 0 0 200px rgba(34, 197, 94, 0.7), 0 0 260px rgba(34, 197, 94, 0.5);
            transform: scale(1.25) rotate(-5deg);
          }
          100% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.4);
            transform: scale(1);
          }
        }
        @keyframes cart-pulse {
          0% { 
            transform: scale(1) rotate(0deg); 
          }
          25% { 
            transform: scale(1.3) rotate(-10deg); 
          }
          50% { 
            transform: scale(1.4) rotate(10deg); 
          }
          75% { 
            transform: scale(1.3) rotate(-10deg); 
          }
          100% { 
            transform: scale(1) rotate(0deg); 
          }
        }
      `}</style>

      {/* Organized Top Header Bar - SMALLER */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-sm border-b border-green-500/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2">
          <div className="flex items-center justify-between">
            
            {/* Left Side - Logo */}
            <div className="flex items-center">
              <div 
                className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border-2 border-green-500 shadow-lg hover:scale-110 transition-transform duration-300"
                style={{
                  boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)'
                }}
              >
                <Image
                  src="/IMG_2320.jpeg"
                  alt="WhiteAsh BKK Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="ml-2 sm:ml-3 hidden sm:block">
                <h1 className="text-sm sm:text-base lg:text-lg font-bold text-green-400" style={{ textShadow: '0 0 10px rgba(34, 197, 94, 0.8)' }}>
                  WhiteAsh BKK
                </h1>
                <p className="text-[10px] sm:text-xs text-green-300">Ekkamai</p>
              </div>
            </div>

            {/* Right Side - Language & Cart */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/"
                className="inline-flex sm:hidden items-center gap-1 bg-green-700/80 hover:bg-green-600 text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-full border border-green-400 shadow-md transition-transform hover:scale-105"
              >
                ←
              </Link>
              <Link
                href="/"
                className="hidden sm:inline-flex items-center gap-2 bg-green-700/80 hover:bg-green-600 text-white text-xs sm:text-sm font-semibold px-3 py-2 rounded-full border border-green-400 shadow-md transition-transform hover:scale-105"
              >
                ← Back to Home
              </Link>
              
              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowLangMenu(!showLangMenu);
                  }}
                  className="flex items-center gap-1 bg-green-700/90 hover:bg-green-600 rounded-full px-2 py-1.5 text-xs transition-all text-white shadow-md hover:shadow-lg border border-green-500"
                  title="Change Language"
                >
                  <span className="text-sm sm:text-base">{languageFlags[language]}</span>
                  <svg className={`w-2 h-2 sm:w-2.5 sm:h-2.5 transition-transform ${showLangMenu ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
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
                      className="absolute top-full right-0 mt-2 bg-green-900 border-2 border-green-500 rounded-lg shadow-2xl overflow-visible z-[99] w-[140px] sm:w-[160px]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {Object.keys(languageNames).map((lang) => (
                        <button
                          key={lang}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLanguage(lang);
                            setShowLangMenu(false);
                          }}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-left transition-all hover:scale-[1.02] ${
                            language === lang
                              ? 'bg-green-600 text-white font-bold'
                              : 'text-green-200 hover:bg-green-700 hover:text-white'
                          }`}
                        >
                          <span className="text-base">{languageFlags[lang]}</span>
                          <span className="font-medium text-xs sm:text-sm">{languageNames[lang]}</span>
                          {language === lang && <span className="ml-auto text-green-300 text-xs">✓</span>}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Cart Button */}
              <button
                onClick={() => setShowCart(!showCart)}
                className={`relative bg-green-600 hover:bg-green-500 text-white rounded-full p-2 sm:p-2.5 lg:p-3 shadow-lg transition-all duration-300 ${
                  cartGlow ? 'animate-glow' : ''
                }`}
                style={{
                  boxShadow: cartGlow ? '0 0 60px rgba(34, 197, 94, 1), 0 0 100px rgba(34, 197, 94, 0.8)' : '0 0 20px rgba(34, 197, 94, 0.6)',
                  border: cartGlow ? '2px solid rgba(34, 197, 94, 1)' : '2px solid rgba(34, 197, 94, 0.5)',
                  animation: cartGlow ? 'cart-glow 1s ease-in-out' : 'none',
                  background: cartGlow ? 'linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%)' : ''
                }}
              >
                <span 
                  className="text-2xl sm:text-2xl lg:text-3xl"
                  style={{
                    animation: cartGlow ? 'cart-pulse 0.5s ease-in-out' : 'none',
                    filter: cartGlow ? 'drop-shadow(0 0 20px rgba(34, 197, 94, 1))' : 'none'
                  }}
                >
                  🛒
                </span>
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] sm:text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center animate-pulse border-2 border-white">
                    {getTotalItems()}
                  </span>
                )}
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-green-900/95 to-emerald-950/95 backdrop-blur-md border-4 border-green-500 rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            style={{
              boxShadow: '0 0 60px rgba(34, 197, 94, 0.6)'
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-green-400">
                🛒 {t.yourCart}
              </h2>
              <button
                onClick={() => setShowCart(false)}
                className="text-green-400 hover:text-green-300 text-3xl"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-green-300 text-center py-8 text-lg">{t.cartEmpty}</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.name} className="bg-black/40 border-2 border-green-600/50 rounded-xl p-4 flex items-center gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-green-300">{item.name}</h3>
                        <p className="text-green-400">฿{item.price}/g</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.name, -1)}
                          className="bg-green-700 hover:bg-green-600 text-white w-8 h-8 rounded-full font-bold"
                        >
                          -
                        </button>
                        <span className="text-green-300 font-bold text-lg w-8 text-center">{item.quantity}g</span>
                        <button
                          onClick={() => updateQuantity(item.name, 1)}
                          className="bg-green-700 hover:bg-green-600 text-white w-8 h-8 rounded-full font-bold"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold text-lg">฿{item.price * item.quantity}</p>
                        <button
                          onClick={() => removeFromCart(item.name)}
                          className="text-red-500 hover:text-red-400 text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t-2 border-green-600 pt-4 mb-6">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span className="text-green-300">{t.total}</span>
                    <span className="text-green-400">฿{getTotalPrice()}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-lg py-4 rounded-full transition-all duration-300 border-2 border-green-400"
                  style={{
                    boxShadow: '0 0 30px rgba(34, 197, 94, 0.6)'
                  }}
                >
                  📱 {t.orderOnInstagram}
                </button>
                <p className="text-green-400 text-sm text-center mt-3">
                  {t.clickToComplete}
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-start px-3 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16">
        
        {/* Hero: Store Name + Looping Tour Video */}
        <div className="w-full max-w-full sm:max-w-5xl mx-auto mb-10 space-y-4 sm:space-y-6">
          <div className="text-center flex flex-col items-center gap-3 sm:gap-4 px-2">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-green-400 shadow-lg">
                <Image
                  src="/IMG_2320.jpeg"
                  alt="WhiteAsh BKK Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-300"
                style={{
                  textShadow: '0 0 25px rgba(34, 197, 94, 0.7), 0 0 50px rgba(34, 197, 94, 0.5)',
                  animation: 'text-glow 3s ease-in-out infinite'
                }}
              >
                WhiteAsh BKK Store at Ekkamai
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-green-200">
              {t.newLocationOpen}
            </p>
          </div>
          <div className="mt-4 sm:mt-6 relative w-full overflow-hidden rounded-2xl sm:rounded-[26px] border border-green-500/40 shadow-[0_18px_45px_rgba(34,197,94,0.35)] bg-black/80">
            <div className="relative aspect-[16/9] sm:aspect-[16/9]">
              <video
                key={heroVideoSrc}
                ref={heroVideoRef}
                src={heroVideoSrc}
                poster="/PHOTO-2025-11-11-18-41-12.jpg"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                onContextMenu={(e) => e.preventDefault()}
                onLoadedData={() => setHeroVideoReady(true)}
                onError={() => {
                  if (heroVideoSrc === "/Sure_heres_a_202511120840_c7sbc.mp4") {
                    setHeroVideoSrc("/ScreenRecording_11-11-2025 20-26-35_1.mov");
                  } else if (heroVideoSrc !== "/Sure_heres_a_202511120840_c7sbc.mp4") {
                    setHeroVideoSrc("/Sure_heres_a_202511120840_c7sbc.mp4");
                  }
                }}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${heroVideoReady ? 'opacity-100' : 'opacity-0'}`}
                style={{ pointerEvents: 'none' }}
              >
                <source src={heroVideoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Premium Cannabis Flower Specialist Section - SEPARATE */}
        <div className="max-w-5xl w-full mb-8">
          <div className="bg-gradient-to-br from-green-900/40 to-emerald-950/40 backdrop-blur-sm border-3 border-green-500/60 rounded-2xl p-6 sm:p-8 shadow-2xl"
            style={{
              boxShadow: '0 0 40px rgba(34, 197, 94, 0.4), inset 0 0 20px rgba(34, 197, 94, 0.05)'
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-green-300 mb-6"
              style={{
                textShadow: '0 0 20px rgba(234, 179, 8, 0.8)',
                animation: 'text-glow 2s ease-in-out infinite'
              }}
            >
              🌿 {t.premiumFlowerSpecialist}
            </h3>
            
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-4 lg:gap-5">
              
              {/* Product Card 1 - Super Boof */}
                <div className="product-card group bg-green-950/30 border-2 border-green-600/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
                {/* Product Image - BIGGER */}
                 <div
                   className="relative h-56 sm:h-72 w-full overflow-hidden bg-black/40 cursor-zoom-in focus:outline-none"
                   onClick={() => openImage("/IMG_2357.jpeg", "Super Boof")}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       openImage("/IMG_2357.jpeg", "Super Boof");
                     }
                   }}
                   aria-label="View Super Boof strain image"
                 >
                  <Image
                    src="/IMG_2357.jpeg"
                    alt="Super Boof"
                    fill
                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                   <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                     Super Boof
                   </span>
                   </div>
                </div>
                {/* Product Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-green-300 mb-1">Super Boof</h4>
                  <p className="text-xs text-green-200 mb-2">THC: 28%</p>
                  <p className="text-sm text-green-400 mb-1">Feelings: Relaxed, Happy</p>
                  <p className="text-sm text-green-400 mb-2">Taste: Earthy, Sweet</p>
                  <button
                    onClick={() => addToCart({ name: 'Super Boof', price: 300 })}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-full transition-all duration-300"
                  >
                    🛒 {t.addToCart}
                  </button>
                </div>
              </div>

              {/* Product Card 2 - Ice Cream Cake */}
               <div className="product-card group bg-green-950/30 border-2 border-green-600/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
                {/* Product Image - BIGGER */}
                 <div
                   className="relative h-56 sm:h-72 w-full overflow-hidden bg-black/40 cursor-zoom-in focus:outline-none"
                   onClick={() => openImage("/IMG_2359.jpeg", "Ice Cream Cake")}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       openImage("/IMG_2359.jpeg", "Ice Cream Cake");
                     }
                   }}
                   aria-label="View Ice Cream Cake strain image"
                 >
                  <Image
                    src="/IMG_2359.jpeg"
                    alt="Ice Cream Cake"
                    fill
                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                       Ice Cream Cake
                     </span>
                   </div>
                </div>
                {/* Product Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-green-300 mb-1">Ice Cream Cake</h4>
                  <p className="text-xs text-green-200 mb-2">THC: 23%</p>
                  <p className="text-sm text-green-400 mb-1">Feelings: Relaxed, Euphoric</p>
                  <p className="text-sm text-green-400 mb-2">Taste: Sweet, Vanilla</p>
                  <button
                    onClick={() => addToCart({ name: 'Ice Cream Cake', price: 300 })}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-full transition-all duration-300"
                  >
                    🛒 {t.addToCart}
                  </button>
                </div>
              </div>

              {/* Product Card 3 - Ice Cherry Gelato */}
               <div className="product-card group bg-green-950/30 border-2 border-green-600/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
                {/* Product Image - BIGGER */}
                 <div
                   className="relative h-56 sm:h-72 w-full overflow-hidden bg-black/40 cursor-zoom-in focus:outline-none"
                   onClick={() => openImage("/IMG_2360.jpeg", "Ice Cherry Gelato")}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       openImage("/IMG_2360.jpeg", "Ice Cherry Gelato");
                     }
                   }}
                   aria-label="View Ice Cherry Gelato strain image"
                 >
                  <Image
                    src="/IMG_2360.jpeg"
                    alt="Ice Cherry Gelato"
                    fill
                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                       Ice Cherry Gelato
                     </span>
                   </div>
                </div>
                {/* Product Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-green-300 mb-1">Ice Cherry Gelato</h4>
                  <p className="text-xs text-green-200 mb-2">THC: 24%</p>
                  <p className="text-sm text-green-400 mb-1">Feelings: Uplifted, Creative</p>
                  <p className="text-sm text-green-400 mb-2">Taste: Cherry, Sweet</p>
                  <button
                    onClick={() => addToCart({ name: 'Ice Cherry Gelato', price: 200 })}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-full transition-all duration-300"
                  >
                    🛒 {t.addToCart}
                  </button>
                </div>
              </div>

              {/* Product Card 4 - La Rose */}
               <div className="product-card group bg-green-950/30 border-2 border-green-600/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
                {/* Product Image - BIGGER */}
                 <div
                   className="relative h-56 sm:h-72 w-full overflow-hidden bg-black/40 cursor-zoom-in focus:outline-none"
                   onClick={() => openImage("/IMG_2361.jpeg", "La Rose")}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       openImage("/IMG_2361.jpeg", "La Rose");
                     }
                   }}
                   aria-label="View La Rose strain image"
                 >
                  <Image
                    src="/IMG_2361.jpeg"
                    alt="La Rose"
                    fill
                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                       La Rose
                     </span>
                   </div>
                </div>
                {/* Product Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-green-300 mb-1">La Rose</h4>
                  <p className="text-xs text-green-200 mb-2">THC: 22%</p>
                  <p className="text-sm text-green-400 mb-1">Feelings: Relaxed, Happy</p>
                  <p className="text-sm text-green-400 mb-2">Taste: Floral, Sweet</p>
                  <button
                    onClick={() => addToCart({ name: 'La Rose', price: 200 })}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-full transition-all duration-300"
                  >
                    🛒 {t.addToCart}
                  </button>
                </div>
              </div>

              {/* Product Card 5 - Black Runtz */}
               <div className="product-card group bg-green-950/30 border-2 border-green-600/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
                {/* Product Image - BIGGER */}
                 <div
                   className="relative h-56 sm:h-72 w-full overflow-hidden bg-black/40 cursor-zoom-in focus:outline-none"
                   onClick={() => openImage("/IMG_2363.jpeg", "Black Runtz")}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       openImage("/IMG_2363.jpeg", "Black Runtz");
                     }
                   }}
                   aria-label="View Black Runtz strain image"
                 >
                  <Image
                    src="/IMG_2363.jpeg"
                    alt="Black Runtz"
                    fill
                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                       Black Runtz
                     </span>
                   </div>
                </div>
                {/* Product Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-green-300 mb-1">Black Runtz</h4>
                  <p className="text-xs text-green-200 mb-2">THC: 25%</p>
                  <p className="text-sm text-green-400 mb-1">Feelings: Euphoric, Sleepy</p>
                  <p className="text-sm text-green-400 mb-2">Taste: Fruity, Grape</p>
                  <button
                    onClick={() => addToCart({ name: 'Black Runtz', price: 200 })}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-full transition-all duration-300"
                  >
                    🛒 {t.addToCart}
                  </button>
                </div>
              </div>

              {/* Product Card 6 - Gorilla Glue */}
               <div className="product-card group bg-green-950/30 border-2 border-green-600/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
                {/* Product Image - BIGGER */}
                 <div
                   className="relative h-56 sm:h-72 w-full overflow-hidden bg-black/40 cursor-zoom-in focus:outline-none"
                   onClick={() => openImage("/IMG_2364.jpeg", "Gorilla Glue")}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       openImage("/IMG_2364.jpeg", "Gorilla Glue");
                     }
                   }}
                   aria-label="View Gorilla Glue strain image"
                 >
                  <Image
                    src="/IMG_2364.jpeg"
                    alt="Gorilla Glue"
                    fill
                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                       Gorilla Glue
                     </span>
                   </div>
                </div>
                {/* Product Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-green-300 mb-1">Gorilla Glue</h4>
                  <p className="text-xs text-green-200 mb-2">THC: 27%</p>
                  <p className="text-sm text-green-400 mb-1">Feelings: Relaxed, Euphoric</p>
                  <p className="text-sm text-green-400 mb-2">Taste: Earthy, Pungent</p>
                  <button
                    onClick={() => addToCart({ name: 'Gorilla Glue', price: 300 })}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-full transition-all duration-300"
                  >
                    🛒 {t.addToCart}
                  </button>
                </div>
              </div>

              {/* Product Card 7 - Tropicana Cherry */}
               <div className="product-card group bg-green-950/30 border-2 border-green-600/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
                {/* Product Image - BIGGER */}
                 <div
                   className="relative h-56 sm:h-72 w-full overflow-hidden bg-black/40 cursor-zoom-in focus:outline-none"
                   onClick={() => openImage("/IMG_2365.jpg", "Tropicana Cherry")}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       openImage("/IMG_2365.jpg", "Tropicana Cherry");
                     }
                   }}
                   aria-label="View Tropicana Cherry strain image"
                 >
                  <Image
                    src="/IMG_2365.jpg"
                    alt="Tropicana Cherry"
                    fill
                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                       Tropicana Cherry
                     </span>
                   </div>
                </div>
                {/* Product Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-green-300 mb-1">Tropicana Cherry</h4>
                  <p className="text-xs text-green-200 mb-2">THC: 26%</p>
                  <p className="text-sm text-green-400 mb-1">Feelings: Uplifted, Energetic</p>
                  <p className="text-sm text-green-400 mb-2">Taste: Cherry, Citrus</p>
                  <button
                    onClick={() => addToCart({ name: 'Tropicana Cherry', price: 300 })}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-full transition-all duration-300"
                  >
                    🛒 {t.addToCart}
                  </button>
                </div>
              </div>

              {/* Product Card 8 - White Truffle */}
               <div className="product-card group bg-green-950/30 border-2 border-green-600/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
                {/* Product Image - BIGGER */}
                 <div
                   className="relative h-56 sm:h-72 w-full overflow-hidden bg-black/40 cursor-zoom-in focus:outline-none"
                   onClick={() => openImage("/IMG_2366.jpeg", "White Truffle")}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       openImage("/IMG_2366.jpeg", "White Truffle");
                     }
                   }}
                   aria-label="View White Truffle strain image"
                 >
                  <Image
                    src="/IMG_2366.jpeg"
                    alt="White Truffle"
                    fill
                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                       White Truffle
                     </span>
                   </div>
                </div>
                {/* Product Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-green-300 mb-1">White Truffle</h4>
                  <p className="text-xs text-green-200 mb-2">THC: 23%</p>
                  <p className="text-sm text-green-400 mb-1">Feelings: Calm, Focused</p>
                  <p className="text-sm text-green-400 mb-2">Taste: Earthy, Diesel</p>
                  <button
                    onClick={() => addToCart({ name: 'White Truffle', price: 200 })}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-full transition-all duration-300"
                  >
                    🛒 {t.addToCart}
                  </button>
                </div>
              </div>

              {/* Product Card 9 - Pink Runtz */}
               <div className="product-card group bg-green-950/30 border-2 border-green-600/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 focus-within:ring-2 focus-within:ring-green-400 focus-within:ring-offset-2 focus-within:ring-offset-black">
                {/* Product Image - BIGGER */}
                 <div
                   className="relative h-64 sm:h-72 w-full overflow-hidden bg-black/40 cursor-zoom-in focus:outline-none"
                   onClick={() => openImage("/IMG_2401.jpeg", "Pink Runtz")}
                   role="button"
                   tabIndex={0}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                       openImage("/IMG_2401.jpeg", "Pink Runtz");
                     }
                   }}
                   aria-label="View Pink Runtz strain image"
                 >
                  <Image
                    src="/IMG_2401.jpeg"
                    alt="Pink Runtz"
                    fill
                     className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                   <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                     <span className="text-2xl font-bold text-white tracking-wide drop-shadow-lg">
                       Pink Runtz
                     </span>
                   </div>
                </div>
                {/* Product Info */}
                <div className="p-4 text-center">
                  <h4 className="text-lg font-bold text-green-300 mb-1">Pink Runtz</h4>
                  <p className="text-xs text-green-200 mb-2">THC: 25%</p>
                  <p className="text-sm text-green-400 mb-1">Feelings: Happy, Relaxed</p>
                  <p className="text-sm text-green-400 mb-2">Taste: Sweet, Fruity</p>
                  <button
                    onClick={() => addToCart({ name: 'Pink Runtz', price: 300 })}
                    className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-full transition-all duration-300"
                  >
                    🛒 {t.addToCart}
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Photo Slideshow */}
        <section className="mt-10 px-2 w-full">
          <div className="max-w-3xl mx-auto w-full">
            <div 
              className="relative w-full rounded-2xl overflow-hidden border-2 border-green-500/70 shadow-[0_15px_35px_rgba(34,197,94,0.35)] bg-black/70"
              style={{
                boxShadow: '0 0 24px rgba(34, 197, 94, 0.45), 0 0 40px rgba(34, 197, 94, 0.25)'
              }}
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={slideshowImages[currentSlide]}
                  alt={`WhiteAsh BKK Lounge - Slide ${currentSlide + 1}`}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-3 right-3 bg-black/70 text-green-300 px-3 py-1 rounded-full text-xs font-bold">
                  {currentSlide + 1} / {slideshowImages.length}
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-green-600 text-white p-2 sm:p-2.5 rounded-full transition-all duration-300 border border-green-500/70"
                style={{
                  boxShadow: '0 0 14px rgba(34, 197, 94, 0.5)'
                }}
                aria-label="Previous photo"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-green-600 text-white p-2 sm:p-2.5 rounded-full transition-all duration-300 border border-green-500/70"
                style={{
                  boxShadow: '0 0 14px rgba(34, 197, 94, 0.5)'
                }}
                aria-label="Next photo"
              >
                →
              </button>

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                {slideshowImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-green-500 w-8' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`View photo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Connect & Location Summary */}
        <section className="mt-10 px-2">
          <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-3">
            <div className="bg-green-900/45 border-2 border-green-500/60 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-green-400 mb-2">Connect</p>
                <h4 className="text-xl sm:text-2xl font-bold text-green-100">{t.followUs}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://instagram.com/whiteashbkk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[9rem] text-center px-4 py-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 border border-pink-200/60 shadow-lg"
                >
                  📷 Instagram
                </a>
              </div>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-green-800/80 text-green-100 rounded-full font-semibold text-sm hover:bg-green-700/80 transition-all duration-300 border border-green-500 shadow-lg"
              >
                ← {t.backToMain}
              </Link>
            </div>

            <div className="bg-green-900/30 border-2 border-green-500/60 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-green-400 mb-2">Locations</p>
              <h4 className="text-xl sm:text-2xl font-bold text-green-100 mb-5">{t.ourLocations}</h4>
              <div className="space-y-5 text-sm sm:text-base">
                <div className="rounded-xl border border-green-500/50 bg-black/30 px-4 py-3">
                  <p className="text-green-200 font-semibold mb-1">✅ {t.ekkamaiNowOpen}</p>
                  <p className="text-green-300 text-sm">WhiteAsh BKK Store at Ekkamai</p>
                  <p className="text-green-400 text-xs mt-1">{t.daily}</p>
                </div>
                <div className="rounded-xl border border-green-500/50 bg-black/30 px-4 py-3">
                  <p className="text-green-200 font-semibold mb-1">✅ {t.originalLocation}</p>
                  <p className="text-green-300 text-sm">Soi Rattanathibech 38, Nonthaburi 11000</p>
                  <p className="text-green-400 text-xs mt-1">{t.daily}</p>
                </div>
              </div>
            </div>

            <div className="bg-green-900/30 border-2 border-green-500/60 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-green-400 mb-2">Visit</p>
                <h4 className="text-xl sm:text-2xl font-bold text-green-100 mb-4">{t.newLocationAddress}</h4>
                <p className="text-green-300 text-sm mb-4">
                  WhiteAsh BKK Store at Ekkamai<br />
                  ✉️ hello@whiteashbkk.com
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Whiteashbkk+Smoking+Lounge+(ekkamai)/@13.7146165,100.5823503,17z/data=!4m6!3m5!1s0x30e29f4c843edc41:0x8b99dfdc68305430!8m2!3d13.7146109!4d100.5814546!16s%2Fg%2F11zjp70l6j?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full border border-blue-300/60 shadow-lg hover:scale-105 transition-transform"
              >
                🗺️ View on Google Maps
              </a>
            </div>
          </div>
        </section>

      </div>
      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4 sm:p-6 cursor-zoom-out"
          onClick={closeImage}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
              closeImage();
            }
          }}
          aria-label="Close enlarged strain image"
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={enlargedImage.src}
              alt={enlargedImage.alt}
              fill
              className="object-contain rounded-3xl shadow-2xl"
              priority
            />
            <button
              type="button"
              onClick={closeImage}
              className="absolute top-3 right-3 bg-black/70 text-white text-2xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-black/90 transition-colors"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

