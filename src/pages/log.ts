import { initSeuk } from '../scripts/seuk'
import { devlog } from '../data/devlog'

const list = document.querySelector('.log-list')

if (list) {
  const entries = [...devlog].sort((a, b) => b.date.localeCompare(a.date))

  for (const entry of entries) {
    const article = document.createElement('article')
    article.className = 'log-entry seuk-reveal'

    const meta = document.createElement('p')
    meta.className = 'log-meta'
    const time = document.createElement('time')
    time.dateTime = entry.date
    time.textContent = entry.date
    meta.append(time)
    if (entry.project) meta.append(` · ${entry.project}`)
    if (entry.author) meta.append(` · ${entry.author}`)

    const body = document.createElement('div')
    body.className = 'log-body'
    const title = document.createElement('h2')
    title.className = 'log-title'
    title.textContent = entry.title
    body.append(title)
    for (const para of entry.body) {
      const p = document.createElement('p')
      p.className = 'log-para'
      p.textContent = para
      body.append(p)
    }

    article.append(meta, body)
    list.append(article)
  }
}

initSeuk()
