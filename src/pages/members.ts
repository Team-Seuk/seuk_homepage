import { initSeuk } from '../scripts/seuk'

initSeuk()

// 카드 소개 더보기/접기 토글
for (const btn of document.querySelectorAll<HTMLButtonElement>('.member-more')) {
  const card = btn.closest('.member-card')
  const label = btn.querySelector('.member-more-label')
  if (!card || !label) continue
  btn.addEventListener('click', () => {
    const expanded = card.classList.toggle('is-expanded')
    btn.setAttribute('aria-expanded', String(expanded))
    label.textContent = expanded ? '접기' : '더 보기'
  })
}
