# Checklist de Implementação: RECAM Amortecedores (001)

## Fase 1 — Clone do Template
- [ ] 1.1 Copiar diretório `lp-mecanica-india-diadema` para `lp-recam-amortecedores-diadema`.
- [ ] 1.2 Atualizar `package.json` (name, description).
- [ ] 1.3 Atualizar `index.html` (título, meta description, favicon).
- [ ] 1.4 Rodar `npm install` para validar dependências.

## Fase 2 — Design Tokens (Paleta "Steel Blue Industrial")
- [ ] 2.1 Atualizar `index.css` com nova paleta (primary `#3b82f6`, surfaces escuros).
- [ ] 2.2 Atualizar `MouseFollowCard.tsx` radial-gradient para azul `rgba(59,130,246,.06)`.
- [ ] 2.3 Garantir PulseRing com overflow-hidden (já vem corrigido do template Jac? Se não, aplicar fix).

## Fase 3 — Conteúdo e Textos
- [ ] 3.1 `HeroSection.tsx`: trocar textos (h1, subtítulo, badge, trust badges) conforme design.md.
- [ ] 3.2 `ServicesBentoBox.tsx`: trocar 4 cards para serviços RECAM (recuperação, economia, rapidez, garantia).
- [ ] 3.3 `TrustSection.tsx`: trocar depoimentos + texto descritivo.
- [ ] 3.4 `SocialProofStrip.tsx`: atualizar rating para 5,010 avaliações + gradientes azuis.
- [ ] 3.5 `MapSection.tsx`: atualizar endereço, telefone e horário.
- [ ] 3.6 `FloatingWhatsApp.tsx`: número (11) 99821-9940.
- [ ] 3.7 `App.tsx` Footer: marca "RECAM AMORTECEDORES" + copyright.

## Fase 4 — Gradientes e Detalhes Visuais
- [ ] 4.1 `HeroSection.tsx`: gradiente h1 `from-primary via-blue-400 to-cyan-300`, overlay multi-camada.
- [ ] 4.2 `ServicesBentoBox.tsx`: card principal com gradiente `to-blue-950/15`, linha decorativa azul.
- [ ] 4.3 `SocialProofStrip.tsx`: gradientes `blue-950/40`.

## Fase 5 — Imagens Premium (AI)
- [ ] 5.1 Gerar `hero_bg.png` via AI (suspensão/amortecedores + luzes azuis).
- [ ] 5.2 Gerar `mechanic_trust.png` via AI (mecânico trabalhando em amortecedor).
- [ ] 5.3 Copiar imagens para `src/assets/`.

## Fase 6 — Validação & Deploy
- [ ] 6.1 `npm run lint` — 0 erros.
- [ ] 6.2 `npm run build` — 0 erros.
- [ ] 6.3 Inicializar git, criar repositório e push para GitHub.
