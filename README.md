# Grad SDE Portfolio

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/dgera-3854s-projects/v0-grad-sde-portfolio)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/n2M8kGwDDX4)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

This repo can be deployed either on Vercel or GitHub Pages.

### GitHub Pages

This project is configured to export as a static site during GitHub Actions builds.

1. Push this repository to GitHub.
2. In GitHub, open `Settings -> Pages`.
3. Under `Source`, select `GitHub Actions`.
4. Keep your default branch as `main`.
5. Push to `main`; the workflow at `.github/workflows/deploy.yml` will build and publish the `out/` directory.

If the repository is not named `geradivij.github.io`, the site will be served from a subpath such as `https://geradivij.github.io/portfolio-dp/`. The Next.js config already adjusts the base path automatically for that GitHub Pages build.

### Vercel

Your project is also live at:

**[https://vercel.com/dgera-3854s-projects/v0-grad-sde-portfolio](https://vercel.com/dgera-3854s-projects/v0-grad-sde-portfolio)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/n2M8kGwDDX4](https://v0.dev/chat/projects/n2M8kGwDDX4)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
