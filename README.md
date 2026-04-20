# Estágio Supervisionado — CC/UFPI

Landing page informativa sobre a disciplina de **Estágio Supervisionado** do curso de Ciência da Computação da Universidade Federal do Piauí (UFPI).

## Demo

Acesse o site em: **https://estagio-supervisionado-cc-ufpi.vercel.app/**

## Sobre

Site estático de página única que reúne todas as informações essenciais para o aluno: objetivos, pré-requisitos, fluxo do processo, regras, obrigações, avaliação, documentos necessários e FAQ.

## Tecnologias

- HTML5, CSS3, JavaScript (vanilla)
- Sem framework, sem build tools, sem package manager
- Fontes: [Manrope](https://fonts.google.com/specimen/Manrope) + [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)

## Como usar

Abra `index.html` diretamente no navegador. Para live reload, use qualquer servidor estático:

```bash
npx serve .
```

## Estrutura do Projeto

```
├── index.html              # Página principal
├── css/style.css           # Estilos e design tokens
├── js/script.js            # Accordion, menu mobile, dark mode, animações
├── assets/
│   ├── img/                # Imagens e ícones
│   └── forms/              # Documentos para download
├── docs/
│   └── DESIGN.md           # Especificação do design system
├── SPEC.md                 # Spec de melhorias UI/UX
├── CLAUDE.md               # Instruções para Claude Code
└── README.md
```

## Design

O design segue o sistema **"The Academic Luminary"** (documentado em `docs/DESIGN.md`), com foco em:

- Arquitetura tonal (hierarquia de superfícies em vez de bordas)
- Tipografia editorial (Manrope para títulos, Inter para corpo)
- Glassmorfismo na navegação
- Dark mode com toggle integrado na navbar
- Elevação por camadas tonais, sem sombras tradicionais
- Interações suaves com transições cubic-bezier

## Licença

Projeto acadêmico — UFPI.
