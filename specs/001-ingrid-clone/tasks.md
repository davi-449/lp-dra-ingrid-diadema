# Tasks: LP Dra. Ingrid Guedes Segatti

## Fase 1 — Setup do Projeto
- [ ] 1.1 Clonar `lp-recam-amortecedores-diadema` para `lp-dra-ingrid-diadema`.
- [ ] 1.2 Atualizar `package.json` → `name: "lp-dra-ingrid-diadema"`.
- [ ] 1.3 Executar `npm install` para instalar dependências.
- [ ] 1.4 Adicionar fonte `Playfair Display` ao `index.html` via Google Fonts link tag.

## Fase 2 — Design System
- [ ] 2.1 Atualizar `src/index.css` com tokens "Ivory & Rose Prestige" (branco, rose-gold, beige).
- [ ] 2.2 Atualizar `SEO + Schema.org` no `index.html` (nome, endereço, telefone, horários, rating).
- [ ] 2.3 Adaptar `MouseFollowCard.tsx` com glow rose-gold (`rgba(201,168,130,.06)`).
- [ ] 2.4 Atualizar `Button.tsx` → modo light (texto carvão no fundo branco/rose-gold).

## Fase 3 — Conteúdo e Textos
- [ ] 3.1 `HeroSection.tsx` — badge, h1 com fonte serif, subtítulo, CTAs.
- [ ] 3.2 `ServicesBentoBox.tsx` → renomear para ServiçoSection com 6 cards odonto.
- [ ] 3.3 `TrustSection.tsx` — 3 depoimentos reais + seção "Sobre a Dra. Ingrid".
- [ ] 3.4 `SocialProofStrip.tsx` — 5.0 ★ · 5.038 avaliações, fundo rose-50.
- [ ] 3.5 `MapSection.tsx` — endereço Vila Nogueira, horários completos (Qua: Fechado).
- [ ] 3.6 `FloatingWhatsApp.tsx` — número (11) 97269-0513.
- [ ] 3.7 `App.tsx` — Footer com marca e Instagram.

## Fase 4 — Animações Apple-Style (Framer Motion)
- [ ] 4.1 Hero stagger: badge → h1 → subtítulo → CTAs com delays `0.1s` entre cada um.
- [ ] 4.2 Ken Burns sutil na imagem hero: `scale 1.05 → 1.0` + `opacity: 0 → 1` em `1s`.
- [ ] 4.3 Scroll-trigger (`whileInView`, `once: true`) em todos os h2 das seções: `y: 20 → 0`.
- [ ] 4.4 Cards de serviços com `staggerChildren: 0.08` + `y: 30 → 0` ao entrar na viewport.
- [ ] 4.5 Depoimentos: `scale: 0.97 → 1` + `opacity: 0 → 1` ao entrar na viewport.
- [ ] 4.6 Contador animado no SocialProofStrip: `0 → 5.038` com `ease: circOut` em `1.5s`.
- [ ] 4.7 Hover nos cards: `scale: 1.02` + borda rose-gold acende via `transition-all`.
- [ ] 4.8 Hover na foto da Dra.: `scale: 1.01` com `overflow-hidden` no container.
- [ ] 4.9 Suporte a `prefers-reduced-motion` via variante `reducedMotion` no Framer Motion.
- [ ] 4.10 Transição Apple entre seções: `border-radius` na borda superior de seções alternadas.

## Fase 5 — Gradientes e Tema Claro
- [ ] 4.1 `HeroSection.tsx` — fundo branco, textos escuros, overlay ivory.
- [ ] 4.2 Inverter tema: garantir que todas as seções usam fundo claro (não dark).
- [ ] 4.3 `SocialProofStrip.tsx` — fundo rose-50, estrelas douradas.

## Fase 5 — Imagens AI
- [ ] 5.1 Gerar `hero_bg.png` (consultório clean Apple-style).
- [ ] 5.2 Gerar `dentist_portrait.png` (Dra. Ingrid — IA).
- [ ] 5.3 Gerar `smile_closeup.png` (close de sorriso premium).
- [ ] 5.4 Transferir todas para `src/assets/`.

## Fase 6 — Deploy
- [ ] 6.1 `npm run lint` & `npm run build` — 0 erros.
- [ ] 6.2 Git Init, commit inicial e push para GitHub (`davi-449/lp-dra-ingrid-diadema`).
