# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page website for the Supervised Internship (Estágio Supervisionado) discipline of the Computer Science course at UFPI (Universidade Federal do Piauí). No build tools, no framework, no package manager.

## Development

Open `index.html` directly in a browser — no server or build step required. To serve locally with live reload you can use any static file server (e.g. `npx serve .` or VS Code Live Server extension), but it is not mandatory.

## Architecture

- **[index.html](index.html)** — HTML structure and content. Fonts loaded from Google Fonts (Manrope + Inter).
- **[css/style.css](css/style.css)** — all styles: design tokens via CSS custom properties, responsive layout, tonal architecture.
- **[js/script.js](js/script.js)** — accordion (FAQ), hamburger menu, dark mode toggle, scroll fade-in animations, active navigation section tracking (IntersectionObserver).
- **[assets/](assets/)** — static assets organized in subdirectories:
  - `assets/forms/` — downloadable form documents (.docx and .pdf)
  - `assets/img/` — images and icons
- **[docs/DESIGN.md](docs/DESIGN.md)** — design system specification ("The Academic Luminary"). Defines colors, typography, elevation, components, and do's/don'ts. **Primary source of truth for visual design.**
- **[SPEC.md](SPEC.md)** — spec de melhorias UI/UX aplicadas ao projeto.

## Design System

The visual design follows "The Academic Luminary" system defined in `docs/DESIGN.md`. Key principles:

- **Tonal Architecture**: Surface hierarchy with 4 layers (`--surface`, `--surface-container-low`, `--surface-container-lowest`, `--surface-container-high`) instead of flat backgrounds.
- **"No-Line" Rule**: No 1px borders for sectioning — boundaries defined through background color shifts only.
- **Typography**: Manrope (display/headline, extra-bold) + Inter (body/title/label). No pure black — all text uses `--on-surface` (#2a3439).
- **Glassmorphism**: Header uses `backdrop-filter: blur(20px)` with 80% opacity background.
- **Elevation**: Tonal layering (stacking colored surfaces) instead of traditional drop shadows. Ambient shadows use tinted `rgba(42, 52, 57, 0.06)`, never pure black.
- **Interactions**: Card hover shifts to `--primary-container` with `-4px` Y translation and `cubic-bezier(0.2, 0, 0, 1)` easing.
- **CTAs**: Full roundedness (`border-radius: 9999px`) with primary gradient.

## Design Tokens

CSS custom properties are defined in `:root` at the top of `css/style.css`. Colors follow the tonal architecture palette (primary `#3a5f94`, primary-container `#d5e3ff`, surfaces `#f7f9fb`/`#f0f4f7`/`#ffffff`). UFPI accent colors (verde `#006633`, amarelo `#f5a623`) are retained for sparing use. Always use CSS variables rather than hardcoding color values.

## Content

The page implements all 10 sections:

1. **Hero** (`section.hero`) — title, subtitle, CTA buttons, highlight badge cards (300h, 1 semester min, no oral presentation, Apto/Inapto)
2. **Objetivos** (`#objetivos`) — why the internship exists; displayed as icon cards
3. **Pré-requisitos** (`#prerequisitos`) — mandatory prerequisites (visual checklist), what cannot be counted, conditions for the internship location
4. **Fluxo (Passo a Passo)** (`#fluxo`) — 6-step process from agreement (convênio) to final report; displayed as timeline/stepper
5. **Regras Importantes** (`#regras`) — rules on hours, duration, start date, etc.; displayed as cards
6. **Obrigações do Aluno** (`#obrigacoes`) — student obligations; displayed as cards
7. **Avaliação** (`#avaliacao`) — grading criteria, supervisor's role, Apto (10) / Inapto (0)
8. **Documentos** (`#documentos`) — formulários para download (convênio, TCE, cronograma); displayed as numbered cards
9. **FAQ** (`#faq`) — Q&A pairs; displayed as accordion
10. **Contato / Rodapé** (`#contato` + `<footer>`) — coordinator email, SIGAA link, CGE link, legal sources

**All text is in Brazilian Portuguese.**
