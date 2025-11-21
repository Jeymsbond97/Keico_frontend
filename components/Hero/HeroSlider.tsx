"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const heroSlides = [
  {
    id: 1,
    title: "Leading New Technologies for Green Transformation",
    subtitle: "그린 전환(Green Transformation) 미래 기술혁신 실현",
    description:
      "한국에너지산업은 AIㆍBig Data 및 에너지 융합 기술로 그린 전환 기술혁신을 선도합니다",
    image:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&h=1080&fit=crop",
    gradient: "from-purple-900/80 via-blue-900/80 to-cyan-900/80",
  },
  {
    id: 2,
    title: "Realizing Carbon Reduction with Core Technologies",
    subtitle: "4차 산업혁명의 핵심기술로 자발적 탄소감축을 실현합니다",
    description:
      "한국에너지산업은 각 기업과 기관, 공공ㆍ지자체의 탄소감축 활동과 관리체계를 확립하는 맞춤형 솔루션을 제공합니다",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop",
    gradient: "from-green-900/80 via-emerald-900/80 to-teal-900/80",
  },
  {
    id: 3,
    title: "Optimizing Energy for A Happier World",
    subtitle: "새로운 기술과 문화, 가치를 창출합니다",
    description:
      "한국에너지산업은 에너지효율 제고, 순환 경제 활성화, 그린테크 육성 등을 통해 새로운 기술과 문화 및 가치를 창출합니다",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop",
    gradient: "from-blue-900/80 via-indigo-900/80 to-purple-900/80",
  },
  {
    id: 4,
    title: "Digital Transformation and Green Transformation",
    subtitle: "탄소중립 인식의 전환과 그린 생태계 조성에 기여합니다",
    description:
      "한국에너지산업은 기후테크에 기반 한 디지털 전환(DX)과 사회적 · 그린 전환(SX-DX)을 함께 완성해 나갑니다",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&h=1080&fit=crop",
    gradient: "from-cyan-900/80 via-blue-900/80 to-purple-900/80",
  },
];

const HeroSlider = () => {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        className="hero-slider-swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slider-slide">
              {/* Background Image */}
              <div className="hero-slider-background">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="hero-slider-image"
                  priority={slide.id === 1}
                />
                <div
                  className={`hero-slider-gradient bg-gradient-to-br ${slide.gradient}`}
                />
              </div>

              {/* Content */}
              <div className="hero-slider-content">
                <div className="hero-slider-container">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-slider-text-wrapper"
                  >
                    <h1 className="hero-slider-title">{slide.title}</h1>
                    <h2 className="hero-slider-subtitle">{slide.subtitle}</h2>
                    <p className="hero-slider-description">
                      {slide.description}
                    </p>
                    <div className="hero-slider-buttons">
                      <motion.a
                        href="/products"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hero-slider-button-primary"
                      >
                        Discover Products
                      </motion.a>
                      <motion.a
                        href="/about"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hero-slider-button-secondary"
                      >
                        Learn More
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="hero-slider-scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="hero-slider-scroll-mouse"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="hero-slider-scroll-dot"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSlider;
