import { Product } from '@/types';

export const products: Product[] = [
  {
    id: '1',
    title: '스마트 그리드 솔루션',
    description: '효율적인 에너지 배분 및 관리를 위한 첨단 스마트 그리드 기술. 실시간 모니터링 및 전력망 최적화를 가능하게 합니다.',
    image: 'https://cdn.imweb.me/thumbnail/20240806/fedf947113d6b.png',
    category: '에너지 솔루션',
    specifications: [
      '실시간 모니터링 시스템',
      'AI 기반 부하 분산',
      '확장 가능한 인프라',
      '클라우드 기반 관리'
    ]
  },
  {
    id: '2',
    title: '고전압 송전선',
    description: '최대 효율성과 신뢰성을 위해 설계된 프리미엄 품질의 송전선. 극한 기상 조건을 견디고 중단 없는 전력 공급을 보장합니다.',
    image: 'https://cdn.imweb.me/thumbnail/20240806/37747159a4f40.png',
    category: '송전',
    specifications: [
      '500kV 용량',
      '날씨 저항 설계',
      '낮은 유지보수',
      '긴 수명'
    ]
  },
  {
    id: '3',
    title: '재생 에너지 시스템',
    description: '태양광 및 풍력 통합을 포함한 포괄적인 재생 에너지 솔루션. 에너지 효율을 유지하면서 탄소 발자국을 줄이는 데 도움이 됩니다.',
    image: 'https://cdn.imweb.me/thumbnail/20240806/495d6e480ebb5.png',
    category: '재생 에너지',
    specifications: [
      '태양광 패널 통합',
      '풍력 발전 시스템',
      '에너지 저장 솔루션',
      '그리드 연결'
    ]
  },
  {
    id: '4',
    title: '전력 배전 장비',
    description: '주거 및 상업 지역에 안정적인 전력 공급을 위한 최첨단 배전 장비. 안전성과 성능을 위해 설계되었습니다.',
    image: 'https://cdn.imweb.me/thumbnail/20240806/0cfb9a161d4d5.png',
    category: '배전',
    specifications: [
      '다중 전압 레벨',
      '안전 인증',
      '쉬운 설치',
      '원격 모니터링'
    ]
  },
  {
    id: '5',
    title: '에너지 관리 플랫폼',
    description: '포괄적인 에너지 관리, 모니터링 및 최적화를 위한 디지털 플랫폼. AI와 빅데이터를 활용한 지능형 에너지 솔루션을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    category: '디지털 솔루션',
    specifications: [
      'AI 기반 분석',
      '실시간 대시보드',
      '예측 유지보수',
      '모바일 앱 통합'
    ]
  },
  {
    id: '6',
    title: 'EPC 서비스',
    description: '에너지 인프라 프로젝트를 위한 엔드투엔드 엔지니어링, 조달 및 건설 서비스. 설계부터 완료까지 우수성을 제공합니다.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
    category: '서비스',
    specifications: [
      '전체 프로젝트 생명주기',
      '전문 엔지니어링 팀',
      '품질 보증',
      '정시 납품'
    ]
  }
];

