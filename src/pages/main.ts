import '../styles/theme.css'
import '../styles/base.css'
import '../styles/main.css'
import { initSeuk } from '../scripts/seuk'

initSeuk()

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// 새로고침 시 스크롤 위치를 복원하지 않고 항상 히어로 인트로부터 시작
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'
}

// 히어로 퇴장 — 스크롤 진행(0~85dvh)을 --hero-exit(0~1)로 매핑
const heroInner = document.querySelector<HTMLElement>('.hero-inner')

if (heroInner && !reduced) {
  const onScroll = () => {
    const progress = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.85), 0), 1)
    heroInner.style.setProperty('--hero-exit', progress.toFixed(4))
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
}

// bfcache 복원(뒤로가기 등)에도 진입 애니메이션 재생 (키프레임 재시작)
window.addEventListener('pageshow', (event) => {
  if (!event.persisted) return
  const els = document.querySelectorAll<HTMLElement>('.hero-enter')
  els.forEach((el) => {
    el.style.animation = 'none'
  })
  void document.documentElement.offsetWidth
  window.requestAnimationFrame(() => {
    els.forEach((el) => {
      el.style.removeProperty('animation')
    })
  })
})
