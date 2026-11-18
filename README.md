# Neil Elkadi — Personal Website

Source for [neilelkadi.com](https://neilelkadi.com): a single-page personal portfolio
built with React and TypeScript.

## What's in it

- **Hero** — intro and call-to-action
- **About** — short bio
- **Experience** — work history
- **Projects** — selected work with case-study links
- **Contact** — links and resume download (`public/resume.pdf`)

Light/dark theme toggle, animated with framer-motion.

## Tech stack

| Layer | Choice |
| --- | --- |
| Framework | React 18 + TypeScript (Create React App / react-scripts) |
| Styling | Tailwind CSS + Sass |
| Animation | framer-motion |
| Icons | Font Awesome (`react-fontawesome`) + react-icons |
| Routing | react-router-dom (single route + 404) |

## Development

```bash
npm install
npm start          # dev server with hot reload
npm run build      # production build -> build/
npm test           # react-scripts test (Jest + Testing Library)
```

## Project layout

```
src/
  App.tsx           # routes + page shell (navbar, theme button, background)
  routes/           # Home, NotFound
  components/       # Hero, About, Experience, Projects, Contact, fixed/
  shared/           # navbar and shared UI
  constants/        # content data (projects, experience, links)
  resources/        # media and project assets
public/             # index.html, favicon, manifest, resume.pdf, robots.txt
deploy/nginx/       # production nginx vhost for neilelkadi.com
```

Site content (projects, experience, copy) lives mostly under `src/constants/`
and `src/resources/` — updating those is usually all a content change needs.

## Deployment

The production build is served as static files by nginx
(`deploy/nginx/neilelkadi.com.conf`) behind Cloudflare. The vhost points at
`/var/www/neilelkadi.com/current`, a symlink flipped atomically to each
release; unknown paths fall through to `index.html` so React Router can
render its 404 route, and content-hashed assets under `/static/` are cached
forever while `index.html` is never cached.
