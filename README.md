# Semana Tecnológica UCPel 2026

Landing page institucional desenvolvida para divulgação da Semana Tecnológica da Universidade Católica de Pelotas (UCPel), edição 2026.

Projeto Integrador (PI-4A) — disciplinas de **Engenharia de Software** e **Ferramentas de Desenvolvimento Web**, sob orientação dos professores Carlos Vinícius Rasch Alves e Morgana Macedo Azevedo da Rosa.

## Autores

- Paulo César Rodrigues Masson
- Érick Ferreira Garcia

## Sobre o projeto

A página apresenta as informações essenciais do evento: programação, participantes, oficinas, inscrições, localização e canais de contato. O desenvolvimento seguiu um processo estruturado de engenharia de software, com levantamento de requisitos, modelagem UML (diagrama de casos de uso e diagrama de classes) e prototipação visual (wireframe) antes da implementação.

## Funcionalidades

- Banner rotativo (slideshow) com três imagens temáticas
- Menu de navegação responsivo, com versão em hambúrguer para mobile
- Seção de programação com a agenda dos 6 dias do evento
- Cards de participantes/palestrantes
- Formulário de inscrição integrado ao Google Forms (envio direto via POST)
- Mapa de localização embutido (Google Maps)
- Ícones de redes sociais e contato via WhatsApp
- Botão de "voltar ao topo"
- Animações de entrada ao rolar a página (scroll reveal)

## Tecnologias utilizadas

- **HTML5** — estrutura semântica
- **CSS3** — variáveis customizadas, Grid e Flexbox, media queries para responsividade
- **JavaScript** (vanilla) — interatividade (menu, scroll, animações)
- **Google Forms** — coleta das inscrições
- **Google Maps Embed** — localização do evento

## Estrutura de pastas

```
├── index.html
├── CSS/
│   └── style.css
├── JS/
│   └── script.js
├── img/
│   ├── banner/          # imagens do slideshow
│   ├── logo/             # logo em versões negativa e preferencial
│   ├── participantes/    # avatares placeholder
│   └── favicon-ucpel-preto.png
└── .prettierrc
```

## Como executar localmente

Não há dependências ou build necessários, é um site estático.

1. Clone o repositório:

```bash
   git clone https://github.com/erickgarcia-dev/Semana-Tecnologica-UCPEL-2026.git
```

2. Abra o arquivo `index.html` diretamente no navegador, ou sirva a pasta com uma extensão como Live Server (VS Code).

## Publicação

A página está publicada via **Vercel**, a partir da branch `main`.

🔗 **Link público:** https://semana-tecnologica-ucpel-2026.vercel.app/

## Acessibilidade

O projeto segue diretrizes da **WCAG 2.2**, incluindo:

- HTML semântico (`header`, `main`, `nav`, `footer`, `section`)
- Texto alternativo (`alt`) em imagens informativas
- `aria-label` em ícones e botões sem texto visível
- Navegação por teclado com foco visível
- Contraste adequado de cores
- Respeito à preferência `prefers-reduced-motion` do usuário

## Créditos

- Ícones de redes sociais: [Simple Icons](https://simpleicons.org) (CC0)
- Ícone de placeholder de participantes: [Flaticon](https://www.flaticon.com/free-icons/placeholder) — Placeholder icons created by Lagot Design - Flaticon

## Contexto acadêmico

Trabalho desenvolvido para a disciplina de Ferramentas de Desenvolvimento Web e Engenharia de Software, curso de Tecnologia em Análise e Desenvolvimento de Sistemas — UCPel.