# seuk_homepage — 디자인 결정 기록

상위 지침: [`C:\TeamSeuk\DESIGN.md`](../DESIGN.md). 이 문서는 그 §1을 이 프로젝트로 확정한 기록이다.

## 게이트 (§0.1)

- **환경:** 반응형 웹 (모바일 우선 → 데스크탑 확장)
- **실행:** Claude 인라인 직접 구현 (외부 틀 없음)
- **스택:** Vite + vanilla TS 멀티페이지 · 배포 Vercel + seuk.cloud (`base: '/'`)

## §1 프로젝트 결정 (확정)

```yaml
subject:   Team-Seuk 팀 소개 사이트 (메인 + 프로젝트 상세 ×2 + 멤버)
audience:  해커톤 심사위원 · 채용담당자 · 네트워킹 상대
job:       "실제로 빠르게 만들어내는 팀" 임팩트를 남기고 프로젝트로 증명
mood:      역동적인 / 속도감 있는 / 자신만만한
refs:      Studio Dumbar · Locomotive · Gumroad
palette:
  bg:      "#FFFFFF"
  surface: "#FFF4ED"            # --bg-elev
  text:    "#211815"
  accent:  "#FF4D00"            # deep #D63A00
theme:     light
type:
  display: Paperlogy (800)      # cdn.jsdelivr.net/gh/fonts-archive/Paperlogy
  body:    Pretendard Variable  # cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9
  mono:    JetBrains Mono       # Google Fonts
motion:    rich — Lenis 단독 도입(관성 스크롤). 그 외 라이브러리 금지.
density:   balanced
signature: "'슥' 모션 문법 — 왼→오 등장 통일 + 스크롤 velocity 반응 스큐/잔상"
```

## 페이지 구조

| 경로 | 역할 |
|---|---|
| `/` | 임팩트 소개. 버튼 없는 연속 스크롤: 히어로(100dvh) → 풀스크린 쇼케이스 ×2(블록 전체 = 링크) → 팀 티저 → 슬림 푸터. 연락 섹션 없음. |
| `/projects/` | 프로젝트 목록 허브 — 카드형 링크로 상세 페이지 진입. 내비 '프로젝트'가 여기로. |
| `/log/` | 개발 일지. 작성 UI 없음 — `src/data/devlog.ts` 배열에 항목 추가 후 커밋으로 작성. |
| `/projects/yaksok/` | 상세 템플릿: 히어로(데모·repo) → 문제→해결 → 핵심 기능 → 기술 → 역할 → 회고 → 다음 프로젝트 |
| `/projects/stock-ai/` | 같은 템플릿. **이름 가제(재고관리 AI)** |
| `/members/` | 팀 서사 → 숫자 스트립 → 5인 풀 프로필 → 연락(메일·GitHub org) |

## 대비 규칙 (비타협)

- `#FF4D00`은 흰 배경 대비 3.3:1 → **대형 타이포(24px+ bold)·그래픽 전용**
- 본문·작은 텍스트·아웃라인은 `--accent-deep #D63A00` (4.7:1)
- 오렌지 풀블리드 위: 디스플레이 타이포만 흰색, 작은 텍스트는 `--ink-on-accent`

## '슥' 모션 문법 (src/styles/base.css + src/scripts/seuk.ts)

- `.seuk-reveal` — 왼→오 슬라이드 등장. IntersectionObserver가 `.is-in` 부여. `data-seuk-delay="1|2|3"` 스태거.
- `.seuk-skew` — `--seuk-vel`(Lenis velocity, 루트에 설정)에 비례해 skewX. 데스크탑 전용.
- `.seuk-progress` — 상단 고정 스크롤 프로그레스 바(accent).
- 가드: `prefers-reduced-motion` → Lenis 미기동·등장 정적. 터치 기기 → 네이티브 스크롤 유지.

## TODO (콘텐츠 확정 대기)

- [ ] 프로젝트 2 정식 이름 (현재 가제 "재고관리 AI", slug `stock-ai`)
- [ ] 멤버 5인 실명·역할·한 줄·개인 링크 (현재 플레이스홀더)
- [ ] 팀 대표 이메일 (현재 placeholder)
- [ ] Yaksok repo 공개 링크 확인 (github.com/Team-Seuk/Yaksok 가정)
