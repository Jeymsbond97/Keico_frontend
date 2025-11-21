"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Zap, Globe, Leaf, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import HeroSlider from "@/components/Hero/HeroSlider";
import ProductCard from "@/components/Products/ProductCard";
import NewsCard from "@/components/News/NewsCard";
import { products } from "@/data/products";
import { news } from "@/data/news";

export default function Home() {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Grid Technology",
      description: "Advanced AI-powered energy management systems",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients across multiple continents",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Green Energy",
      description: "Leading the transition to renewable energy",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge solutions for tomorrow's challenges",
    },
  ];

  const sustainableChoices = [
    {
      title: "Choices for a Sustainable Future",
      subtitle: "지속 가능한 미래를 위한 선택",
      description:
        "한국에너지산업은 디지털전환(DX)을 가속화하여 에너지효율을 제고하고, 지속가능한 발전(SD)을 위한 인식의 전환과 현실 세계를 최적화하는 데 기여합니다.",
      icon: <Leaf className="w-12 h-12" />,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Energy Efficiency and Technology Innovation",
      subtitle: "DX 플랫폼 기반 에너지 효율 및 기술 혁신",
      description:
        "에너지 최적화를 통한 기후위기 극복과 새로운 기술과 가치 창조에 기여합니다.",
      icon: <Zap className="w-12 h-12" />,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Carbon Neutrality and ESG Initiatives",
      subtitle: "탄소중립ㆍESG 경영 선도",
      description:
        "ICBM(IoT, Cloud Computing, Big data, Mobile)과 AI를 활용하여 탄소중립과 ESG 기반 사회적 가치를 실현합니다.",
      icon: <TrendingUp className="w-12 h-12" />,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  return (
    <div className="homepage">
      {/* Hero Section */}
      <HeroSlider />

      {/* Sustainable Choices Section */}
      <section className="homepage-section homepage-stats">
        <div className="homepage-container">
          <div className="homepage-stats-grid">
            {sustainableChoices.map((choice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="homepage-sustainable-card"
              >
                <div
                  className={`homepage-sustainable-icon bg-gradient-to-br ${choice.gradient}`}
                >
                  {choice.icon}
                </div>
                <h3 className="homepage-sustainable-title">{choice.title}</h3>
                <h4 className="homepage-sustainable-subtitle">
                  {choice.subtitle}
                </h4>
                <p className="homepage-sustainable-description">
                  {choice.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="homepage-section homepage-features">
        <div className="homepage-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="homepage-section-header"
          >
            <h2 className="homepage-section-title">Why Choose Keico Plus</h2>
            <p className="homepage-section-description">
              Leading the future of energy with innovative solutions and
              sustainable practices
            </p>
          </motion.div>
          <div className="homepage-features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="homepage-feature-card"
              >
                <div className="homepage-feature-icon">{feature.icon}</div>
                <h3 className="homepage-feature-title">{feature.title}</h3>
                <p className="homepage-feature-description">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="homepage-section homepage-products">
        <div className="homepage-container">
          <div className="homepage-products-header">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="homepage-products-title">Our Products</h2>
              <p className="homepage-products-description">
                Innovative solutions for modern energy challenges
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link href="/products">
                <button className="flex items-center gap-3 px-[3rem] py-[1.5rem] md:px-[2.875rem] md:py-[1.5rem] bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all">
                  View All
                  <ArrowRight size={20} />
                </button>
              </Link>
            </motion.div>
          </div>
          <div className="homepage-products-grid">
            {products.slice(0, 6).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Video Only */}
      <section className="homepage-section homepage-cta">
        <div className="homepage-cta-video-wrapper">
          <iframe
            className="homepage-cta-video"
            src="https://www.youtube.com/embed/efgX7WjLTAk?autoplay=1&loop=1&playlist=efgX7WjLTAk&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&iv_load_policy=3&cc_load_policy=0&fs=0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      </section>

      {/* News Section */}
      <section className="homepage-section homepage-news">
        <div className="homepage-container" style={{ overflow: "visible" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="homepage-section-header"
          >
            <h2 className="homepage-section-title">Latest News</h2>
            <p className="homepage-section-description">
              Stay updated with our latest developments and achievements
            </p>
          </motion.div>

          {/* News Slider */}
          <div className="homepage-news-slider-wrapper">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={1}
              spaceBetween={24}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 32,
                },
              }}
              className="homepage-news-swiper"
            >
              {news.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <NewsCard news={item} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* All News Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="homepage-news-button-wrapper"
          >
            <Link href="/news">
              <button className="homepage-news-all-button">
                All News
                <ArrowRight size={20} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="homepage-section homepage-brands">
        <div className="homepage-brands-background">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
            alt="AIoT Energy Solutions"
            fill
            className="homepage-brands-bg-image"
            priority={false}
          />
        </div>
        <div className="homepage-container homepage-brands-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="homepage-section-header"
          >
            <h2 className="homepage-section-title homepage-brands-title">
              AIoT-based Energy Optimization and Management
            </h2>
            <p className="homepage-section-description homepage-brands-description">
              사용자의 특성과 환경, 업종에 맞는 특화 서비스를 제공합니다
            </p>
          </motion.div>

          <div className="homepage-brands-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="homepage-brand-card"
            >
              <div className="homepage-brand-icon-wrapper">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="homepage-brand-title">Our Service</h3>
              <h4 className="homepage-brand-subtitle">
                에너지 최적화 서비스 플랫폼
              </h4>
              <p className="homepage-brand-description">
                AIoT 기반 에너지 최적화 및 관리 플랫폼을 통해 실시간 모니터링과
                효율적인 에너지 관리를 제공합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="homepage-brand-card"
            >
              <div className="homepage-brand-icon-wrapper">
                <Zap className="w-12 h-12" />
              </div>
              <h3 className="homepage-brand-title">AIoT Devices & S/W</h3>
              <h4 className="homepage-brand-subtitle">
                지능형 에너지 제어 디바이스 · 프로그램
              </h4>
              <p className="homepage-brand-description">
                지능형 IoT 디바이스와 소프트웨어를 통한 스마트 에너지 제어
                시스템으로 에너지 효율을 극대화합니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="homepage-brand-card"
            >
              <div className="homepage-brand-icon-wrapper">
                <TrendingUp className="w-12 h-12" />
              </div>
              <h3 className="homepage-brand-title">AI Metaverse</h3>
              <h4 className="homepage-brand-subtitle">
                3차원 가상세계 AI 시뮬레이션과 통합 관제
              </h4>
              <p className="homepage-brand-description">
                3차원 가상세계에서 AI 시뮬레이션을 통한 에너지 시스템 최적화 및
                통합 관제 솔루션을 제공합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
