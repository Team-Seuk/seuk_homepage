# seuk_homepage

Team-Seuk 팀 소개 사이트 — https://team.seuk.cloud

Vite + vanilla TS 멀티페이지 (메인 · 프로젝트 목록/상세 ×2 · 멤버 · 개발 일지). 디자인 결정·페이지 구조·대비 규칙·콘텐츠 TODO는 [DESIGN.md](DESIGN.md) 참고.

## 개발

```bash
npm install
npm run dev        # localhost:5173
npm run typecheck
npm run build      # 타입체크 + dist/ 빌드
```

## 개발 일지 쓰는 법

작성 UI 없음. [`src/data/devlog.ts`](src/data/devlog.ts) 배열 **맨 앞**에 항목 추가 후 main에 push — 끝. 형식·규칙은 파일 상단 주석 참고.

## 배포

- main 푸시 = Vercel 자동 배포 (프로젝트: `seuk-homepage`)
- 도메인: `team.seuk.cloud` — Gabia DNS에 CNAME `team` → `cname.vercel-dns.com.` (apex `seuk.cloud`는 별도 프로젝트 사용 중이라 건드리지 않는다)
- 기본 주소: https://seuk-homepage.vercel.app
