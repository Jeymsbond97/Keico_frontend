"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Award, Zap } from "lucide-react";
import Image from "next/image";
import PageBanner from "@/components/Layout/PageBanner";

export default function AboutPage() {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Leading the industry with cutting-edge technology and forward-thinking solutions",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Excellence",
      description:
        "Committed to delivering the highest quality products and services",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "Dedicated to creating a greener future through sustainable practices",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Partnership",
      description:
        "Building strong relationships with clients and partners worldwide",
    },
  ];

  const historyData = [
    {
      year: "2024",
      events: [
        "2024 유망중소기업 선정",
        "EMCS & AM(AI Metaverse)(에너지 효율화 & 가상공간 메타버스) 통합 플랫폼 출시",
        "IOS 9001(품질), ISO 14001(환경) 인증",
        "벤처창업혁신조달상품 지정(조달청)",
        "나라장터(조달청) 등록",
        "종합쇼핑몰(조달청) 입점",
        "녹색기술 인증",
        "2024 전국 스마트상점 구축 사업",
        "AIoT 기반 페코(FECO) 시스템 출시",
        "공공기관 '에너지다어어트10' 시스템 자동화",
        "기관 특성별(교육ㆍ의료ㆍ숙박ㆍ종교) 시스템 자동화",
        "무선 키홀더 연동 에너지 관리 시스템 출시",
        "대한예수교장로회(개혁) 사업 협약",
        "스마트 에너지 디바이스(3) 추가 출시",
        "특허 추가 출원",
        "동반성장몰 입점(중소기업유통센터)",
        "경쟁입찰참가 자격 등록",
        "학교장터(S2B) 입점",
      ],
    },
    {
      year: "2023-2022",
      events: [
        "기술혁신형 중소기업(Inno-Biz A등급) 인증",
        "공공기관 시범구매제품 지정",
        "금융기관(신협) 에너지 절감 시스템 구축",
        "소상공인 에너지 절감 지원 사업(하나은행)",
        "도민참여형 에너지 자립 선도사업(경기도)",
        "구매조건부 기술(정부 R&D) 사업화(전통시장)",
        "초기창업패키지사업(정부 R&D) 최우수 기업 선정",
        "그린벤처기업(경기도경제과학진흥원)",
        "전국 스마트상점 구축 사업(소상공인시장진흥공단)",
        "스마티시티 융합 얼라이언스(국토부_스마트시티협회)",
        "그린클래스멤버쉽(GCM) 인증(SDX재단)",
        "에너지밸리 사업 협약(전남ㆍ나주시ㆍ광주시ㆍ한전)",
        "DR 수요관리사업자 시스템 연계",
        "공인기관 성적 평가(에너지 절감률ㆍ시스템 성능)",
        "공공기관 데이터 연계 시스템 개발",
        "엣지 컴퓨팅 시스템 개발",
        "직접생산증명 인증",
        "성과공유기업 인증",
        "특허(4) 등록",
        "상표권(3) 출원",
      ],
    },
    {
      year: "2021-2019",
      events: [
        "에너지 절감 테스트베드 사업(서울산업진흥원)",
        "벤처기업 인증",
        "고객전담센터(콜센터) 구축",
        "클라우드 시스템 구축",
        "공인기관(KTL) 시험성적 평가(에너지 절감률)",
        "에너지관리 및 수요반응 자동화 연동 시스템 개발(EMCS Auto-DR)",
        "제어장치 추가 개발ㆍ인증",
        "특허(1) 등록",
      ],
    },
    {
      year: "2018",
      events: [
        "EMCS(V.1) 연동 제어 디바이스 및 프로그램 개발",
        "IoT 기반 지능형 에너지관리시스템 개발(EMCS_Energy Management Control System)",
        "법인 설립",
      ],
    },
  ];

  return (
    <div className="about-page">
      <PageBanner
        title="About Keico Plus"
        subtitle="Leading new technologies for green transformation. We are committed to realizing carbon reduction with core technologies of the 4th Industrial Revolution."
      />

      {/* Mission Section */}
      <section className="about-section about-mission">
        <div className="about-container">
          {/* Title and Image Row */}
          <div className="about-mission-header">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="about-mission-title-wrapper"
            >
              <h2 className="about-mission-title">KEICO 탄소감축 선도 기업</h2>
              <h3 className="about-mission-subtitle">
                (Korea Energy Industry Corp.)
              </h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-mission-image"
            >
              <Image
                src="https://cdn.imweb.me/thumbnail/20240807/98acdd4ecc259.png"
                alt="KEICO 탄소감축 선도 기업"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Full Width Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-mission-text-content-full"
          >
            <p className="about-mission-text">
              <strong>탄소중립, ESG 시대</strong>
            </p>
            <p className="about-mission-text">
              한국에너지산업이 4차 산업기술을 기반으로 미래산업를 육성하고
              고객의 가치를 실현합니다.
            </p>
            <p className="about-mission-text">
              기후위기 극복은 전 인류가 합심하여 해결해야 할 중요한 공동
              과제로서, 국제에너지기구(IEA)에서는 '에너지 효율화' 기여도를 가장
              높게 평가하고 있습니다.
            </p>
            <p className="about-mission-text">
              이제 인류는 디지털 전환시대를 맞이하여 에너지 수요를 보다
              적극적으로 효율화하고 에너지 지출비용을 낮추어야합니다.
            </p>
            <p className="about-mission-text">
              한국에너지산업은 이러한 시대적 과제 해결의 중심에 서기 위해 오랜
              기간 연구 개발에 매진해왔으며, 그 결과 각 소비자의 환경을
              반영하고, 운용 기기의 용도와 특성, 전력 데이터 등에 관한 정보를
              종합적으로 수집ㆍ분석하여 에너지 소비를 최적화하는 토탈 솔루션을
              운영하고 있습니다.
            </p>
            <p className="about-mission-text">
              또한, 당사의 에너지 효율화 플랫폼은 전기에너지의 사용전력과
              대기전력, 불필요 소모전력 뿐만 아니라 사용자의 환경과 기기별 특성
              및 운용 패턴 등을 실시간 반영하여 에너지를 효율화하고 전력 수요의
              전략적 저감과 조절, 부하 평준화 등을 통해 에너지 소비 원가를
              절감하고 국가 전력 수급안정화에 기여하고 있습니다.
            </p>
            <p className="about-mission-text">
              앞으로도, (주)한국에너지산업은 4차 산업기술을 기반으로 에너지
              수요효울화에 앞장서고, 탄소중립을 선도하는 미래 신기술로
              신성장산업의 주역이 되도록 최선의 노력을 다할 것을 약속드립니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section about-values">
        <div className="about-values-background">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop"
            alt="Our Values"
            fill
            className="about-values-bg-image"
            priority={false}
          />
        </div>
        <div className="about-container about-values-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-section-header"
          >
            <h2 className="about-section-title about-values-title">
              Our Values
            </h2>
          </motion.div>
          <div className="about-values-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="about-value-card"
            >
              <h3 className="about-value-title">Mission</h3>
              <ul className="about-value-list">
                <li>고객 중심 기술의 혁신</li>
                <li>고객을 위한 신개념 가치 창출</li>
                <li>고객 삶의 질 향상과 공공 이익 기여</li>
                <li>지속가능발전(SDGs)의 이념 실현</li>
                <li>스마트 비지니스 체계 형성</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="about-value-card"
            >
              <h3 className="about-value-title">Vision</h3>
              <ul className="about-value-list">
                <li>글로벌 리딩 그룹 도약</li>
                <li>사회적 가치 창출과 미래사업에 공헌하는 기업</li>
                <li>도전과 열정으로 변화를 주도하는 기업</li>
                <li>친환경 기반 녹색 에너지 전문 기업</li>
                <li>DX(Digital Transformation) 성장 파트너</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="about-value-card"
            >
              <h3 className="about-value-title">Core values</h3>
              <ul className="about-value-list">
                <li>저탄소 친환경 혁신기술</li>
                <li>기후기술 투자 확대</li>
                <li>스마트 에너지 협력 체계 확산</li>
                <li>지속가능발전목표(SDGs) 이행</li>
                <li>탄소중립 순환사회 구축에 이바지</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-section about-timeline">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-section-header"
          >
            <h2 className="about-section-title">History</h2>
          </motion.div>
          <div className="about-history-container">
            {historyData.map((period, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="about-history-period"
              >
                <div className="about-history-year">{period.year}</div>
                <div className="about-history-events">
                  {period.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="about-history-event">
                      {event}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-section about-vision">
        <div className="about-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-section-header"
          >
            <h2 className="about-section-title">Research & Innovation</h2>
            <p className="about-section-description">
              기술혁신ㆍ미래가치ㆍ시장확대
            </p>
          </motion.div>

          <div className="about-vision-grid">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-vision-image"
            >
              <Image
                src="https://cdn.imweb.me/thumbnail/20241022/f5799bf50925b.png"
                alt="Research & Innovation"
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="about-vision-content"
            >
              <div className="about-vision-intro">
                <h3 className="about-vision-intro-title">
                  Research and Development
                </h3>
                <h4 className="about-vision-intro-subtitle">연구개발</h4>
                <p className="about-vision-intro-text">
                  다양한 소통과 협업을 통한 최선의 연구
                </p>
                <p className="about-vision-intro-description">
                  (주)한국에너지산업의 가치실현은 '행복한 동행'을 기반으로 열린
                  연구개발로 실현되고 있습니다.
                </p>
              </div>

              <div className="about-vision-cards">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="about-vision-card"
                >
                  <h4 className="about-vision-card-title">오픈 리서치</h4>
                  <ul className="about-vision-card-list">
                    <li>기술의 발굴과 육성</li>
                    <li>융합연구 생태계 조성</li>
                    <li>DX 가치창출</li>
                    <li>미래 성장동력 확보</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="about-vision-card"
                >
                  <h4 className="about-vision-card-title">고객 연구센터</h4>
                  <ul className="about-vision-card-list">
                    <li>4차 산업혁명 에너지 융복합 기술</li>
                    <li>미래지향형 기술 고도화</li>
                    <li>AIoT 통합 에너지 솔루션</li>
                    <li>기후기술 투자 및 육성</li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="about-vision-card"
                >
                  <h4 className="about-vision-card-title">에너지 연구센터</h4>
                  <ul className="about-vision-card-list">
                    <li>ESG 경영 확산</li>
                    <li>친환경 에너지 생태계 조성</li>
                    <li>지속 가능한 신개념 비지니스 모델 구축</li>
                    <li>자발적 탄소감축의 실행과 공유</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
