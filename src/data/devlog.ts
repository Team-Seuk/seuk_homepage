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
    date: '2026-07-02',
    title: '팀 홈페이지 v1 공개',
    body: [
      '팀 소개 사이트 첫 버전을 올렸다. 메인 · 프로젝트 · 멤버 구조에 관성 스크롤(Lenis)과 "슥" 모션 문법을 얹었다.',
      '남은 일 — 멤버 프로필 실명 채우기, 재고관리 AI 정식 이름 정하기, 프로젝트 스크린샷 교체.',
    ],
    author: 'Team-Seuk',
  },
]
