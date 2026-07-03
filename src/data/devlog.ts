/**
 * 개발 일지 작성법
 * 1. 아래 배열 맨 앞에 항목 하나를 추가한다 (형식은 DevlogEntry 참고).
 * 2. commit & push — 끝. 페이지는 date 내림차순으로 자동 정렬된다.
 * body는 문단 배열이다. HTML 태그는 쓰지 않는다(텍스트로 그대로 출력됨).
 */
export type DevlogEntry = {
  date: string // YYYY-MM-DD
  title: string
  body: string[]
  project?: 'Yaksok' | '재고관리 AI'
  author?: string
}

export const devlog: DevlogEntry[] = [
  {
    date: '2026-07-03',
    title: '알약 인식 어플에서 건강 관리 게임으로',
    body: [
      '처음엔 카메라로 알약을 찍으면 무슨 약인지 알려주는 인식 어플을 구상했다. 그런데 만들면서 "인식"만으로는 사용자가 다시 찾을 이유가 약하다는 게 계속 걸렸다.',
      '방향을 틀었다. 알약 인식은 그대로 두되, 복약·건강 관리를 게임처럼 만드는 어플로 확장한다. 매일 약을 챙기고 건강 습관을 지키면 보상이 쌓이는 구조로, 꾸준히 돌아오게 만드는 게 목표다.',
      '남은 일 — 게임 루프(퀘스트·보상) 설계, 알약 인식 결과를 복약 스케줄로 연결하는 흐름 정리.',
    ],
    project: 'Yaksok',
    author: 'Team-Seuk',
  },
  {
    date: '2026-07-02',
    title: '팀 홈페이지 v1 공개',
    body: [
      '팀 소개 사이트 첫 버전을 올렸다. 메인 · 프로젝트 · 멤버 구조에 관성 스크롤(Lenis)과 "슥" 모션 문법을 얹었다.',
      '남은 일 — 멤버 프로필 실명 채우기, 재고관리 AI 정식 이름 정하기, 프로젝트 스크린샷 교체.',
    ],
    author: 'Team-Seuk',
  },
]
