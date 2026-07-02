import Lenis from 'lenis'

const VEL_LIMIT = 30

export function initSeuk(): void {
  const html = document.documentElement
  html.classList.add('js')

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const coarse = window.matchMedia('(pointer: coarse)').matches

  const progress = document.querySelector<HTMLElement>('.seuk-progress')
  const setProgress = (scroll: number, limit: number) => {
    if (progress) {
      progress.style.transform = `scaleX(${limit > 0 ? Math.min(scroll / limit, 1) : 0})`
    }
  }

  const reveals = document.querySelectorAll('.seuk-reveal')
  if (reduced) {
    reveals.forEach((el) => el.classList.add('is-in'))
  } else {
    const io = new IntersectionObserver(
      (entries, observer) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    reveals.forEach((el) => io.observe(el))

    // IO가 한 번도 안 돌면(임베드 웹뷰 등) 콘텐츠가 영영 숨는다 — 전체 강제 표시
    window.setTimeout(() => {
      if (!document.querySelector('.seuk-reveal.is-in')) {
        reveals.forEach((el) => el.classList.add('is-in'))
      }
    }, 1500)
  }

  if (reduced || coarse) {
    const onScroll = () => {
      setProgress(window.scrollY, document.documentElement.scrollHeight - window.innerHeight)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return
  }

  const lenis = new Lenis({ lerp: 0.1 })

  lenis.on('scroll', ({ scroll, limit, velocity }: Lenis) => {
    setProgress(scroll, limit)
    const v = Math.max(-VEL_LIMIT, Math.min(VEL_LIMIT, velocity))
    html.style.setProperty('--seuk-vel', v.toFixed(2))
  })

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const target = anchor.getAttribute('href')
      if (target && target.length > 1 && document.querySelector(target)) {
        event.preventDefault()
        lenis.scrollTo(target)
      }
    })
  })

  const raf = (time: number) => {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}
