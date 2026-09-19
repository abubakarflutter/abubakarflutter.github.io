# Muhammad Abubakar — Flutter Portfolio

Personal site for **Muhammad Abubakar**, Senior Flutter Developer & Mobile Engineer.

Live (current version on `main`): [https://abubakarflutter.github.io](https://abubakarflutter.github.io)

The page is a static GitHub Pages site:

- `index.html` — homepage shell, SEO, JSON-LD
- `assets/css/styles.css` — custom design system (no Tailwind)
- `assets/js/data.js` — `window.PORTFOLIO` (projects, experience, skills, stats)
- `assets/js/main.js` — rendering, hamburger nav, scroll spy, hash case studies

Case studies use GitHub Pages–safe hash routes:

```text
#/projects/tapday
#/projects/aqarmap
#/projects/forall
#/projects/almohannad-cards
#/projects/sakoon
#/projects/nautaes
```

Resume download stays hidden until `resumeUrl` is set in `data.js`.
Store and live-project buttons stay hidden unless a URL is provided.
