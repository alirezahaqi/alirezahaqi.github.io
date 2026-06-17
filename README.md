# Personal Website

React/Vite personal academic website for Alireza Haqi.

Live site: `https://alirezahaqi.github.io/`

## Profile content

The current profile content is based on:

- `/Users/alirezahaqi/Downloads/my-phd-portfolio-main.zip`
- `public/Alireza_Haqi_CV.pdf`
- public arXiv records for `Alireza Haqi`
- the public GitHub profile at `https://github.com/alirezahaqi`

The copied app now includes:

- Stanford CS PhD profile and advisor links
- verified contact links, including email, LinkedIn, Google Scholar, GitHub, and CV
- six publications, including the 2026 arXiv preprints
- education, research experience, honors, teaching, and service sections

## Development

```sh
npm install
npm run dev
```

Useful checks:

```sh
npm run lint
npm run test
npm run build
```

## Deployment

Pushes to `main` run the included GitHub Pages workflow, which installs dependencies, builds the Vite app, and deploys `dist`.
