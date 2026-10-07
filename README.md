# McCorry.dev

The source code for [mccorry.dev](https://mccorry.dev), a personal website featuring a CV, blog, and demos. It is built with Gatsby, TypeScript, and React, with Preact configured for the site.

## Getting started

Install Node.js 20 and Yarn, then run:

```sh
yarn install --frozen-lockfile
yarn develop
```

Gatsby serves the site at [http://localhost:8000](http://localhost:8000). To create and serve a production build locally, run:

```sh
yarn build
yarn serve
```

## Available commands

- `yarn develop` — start the local development server.
- `yarn build` — generate the production site in `public/`.
- `yarn serve` — serve the generated site locally.
- `yarn lint` — lint the source files.
- `yarn type-check` — check TypeScript types.
- `yarn clean` — clear Gatsby's generated files.

## Project structure

- `src/pages/` — site pages, including the home page, blog index, and demos.
- `src/components/` — reusable page and content components.
- `src/blog/` — blog posts written in Markdown.
- `src/markdownComponents/` — Markdown content used by site components.
- `gatsby-config.ts` and `gatsby-node.ts` — Gatsby plugins and build configuration.

## Deployment

Pushing to `master` runs the GitHub Actions deployment workflow. It builds the site and publishes the generated `public/` directory to the `built-pages` branch.
