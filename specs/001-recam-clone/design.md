# Design System: RECAM Amortecedores — "Steel Blue Industrial"

## 1. Visual Theme & Atmosfera
- **Mood:** "Steel Blue Industrial" — Atmosfera de oficina técnica pesada, com tons de azul aço e cinza metálico que remetem a peças de suspensão e amortecedores. Premium porém robusto.
- **Filosofia:** Minimalismo high-contrast com detalhes metálicos. A paleta azul aço diferencia do vermelho carmesim da Jac Motors e do amarelo da Índia.

## 2. Paleta de Cores

| Token | Cor | Papel Funcional |
|---|---|---|
| `--color-primary` | `#3b82f6` (Azul Aço) | CTAs secundários, destaques de título, ícones ativos |
| `--color-primary-hover` | `#2563eb` (Azul Profundo) | Hover states |
| `--color-accent-trust` | `#22c55e` (Verde WhatsApp) | Botão CTA principal, badge "aberto" |
| `--color-accent-star` | `#f59e0b` (Dourado) | Estrelas de avaliação |
| `--color-surface-0` | `#080808` (Preto Absoluto) | Fundo principal |
| `--color-surface-1` | `#111111` (Carvão) | Cards e containers |
| `--color-surface-2` | `#1a1a1a` (Grafite) | Elementos secundários |

### Gradientes Decorativos
- **Hero headline:** `from-primary via-blue-400 to-cyan-300` (azul tecnológico fluindo para ciano)
- **Card glow:** `radial-gradient(... rgba(59,130,246,.06) ...)` (azul sutil)
- **SocialProof strip:** `from-blue-950/40 via-blue-950/20 to-blue-950/40`

## 3. Tipografia
- **Família:** `Inter` (idêntica ao template base)
- **Headlines (h1):** `font-extrabold`, `tracking-tight`, `leading-[1.05]`
- **Body:** `font-light`, `text-zinc-400`, `leading-relaxed`
- **Depoimentos:** `font-serif italic`
- **Labels/Badges:** `tracking-widest uppercase text-xs`

## 4. Mapeamento de Conteúdo (Template → RECAM)

### HeroSection.tsx
| Campo | Conteúdo RECAM |
|---|---|
| Badge | ⚡ Casa Grande • Diadema |
| h1 | Especialistas em **Recuperação de Amortecedores**. |
| h1 gradient span | "Recuperação de Amortecedores" |
| Subtítulo | Economia de até 50% em relação à troca completa. Serviço rápido, garantido e para qualquer modelo de veículo. |
| CTA button | Solicitar Orçamento |
| Trust badges | 4.9 no Google • 5,010 Avaliações • Garantia de Serviço |

### ServicesBentoBox.tsx (4 cards)
| Card | Ícone | Título | Descrição |
|---|---|---|---|
| 🔧 Principal (col-span-2) | `Wrench` | Recuperação de Amortecedores | Restauramos seus amortecedores com tecnologia de ponta. Serviço completo para dianteiros e traseiros de qualquer modelo. |
| 💰 Economia | `DollarSign` | Economia de até 50% | Recupere ao invés de trocar. Mesma qualidade e segurança por metade do preço, com garantia total. |
| ⚡ Rapidez | `Zap` | Serviço Rápido | Agilidade no diagnóstico e recuperação. Seu veículo pronto no menor tempo possível, sem perda de qualidade. |
| 🛡️ Garantia (col-span-2) | `ShieldCheck` | Garantia e Segurança | Todos os nossos serviços possuem garantia. Mais conforto, estabilidade e segurança para o seu dia a dia. |

### TrustSection.tsx
| Campo | Conteúdo |
|---|---|
| h2 | 4.9 no Google. Confiança Real. |
| Descrição | A RECAM Amortecedores é referência em recuperação de amortecedores em Diadema. |
| Depoimento 1 | "Produto e serviço de qualidade com preço justo e garantia!" — Queila Vasconcelos |
| Depoimento 2 | "Um ótimo atendimento com serviço de qualidade." — Tais Alves |
| Depoimento 3 | "Recuperaram os amortecedores do meu carro e ficou como novo. Super recomendo!" — Cliente Satisfeito |

### SocialProofStrip.tsx
- **Rating:** 4.9 no Google
- **Total:** 5,010 Avaliações Reais de Clientes

### MapSection.tsx
- **Embed Google Maps:** R. Afonso Pena, 433 - Casa Grande, Diadema - SP
- **Telefone:** (11) 99821-9940
- **Horário:** Seg-Sex 09:00-18:00

### FloatingWhatsApp.tsx
- **Número:** 5511998219940
- **Mensagem:** "Olá! Vi o site da RECAM e gostaria de solicitar um orçamento para recuperação de amortecedores."

### Footer (App.tsx)
- **Marca:** RECAM AMORTECEDORES
- **Copyright:** © 2025 RECAM Amortecedores. Especialistas em recuperação de amortecedores.

## 5. Imagens (AI Generation)

### Hero Background (`hero_bg.png`)
**Prompt:** "Professional automotive suspension workshop at night, close-up of shock absorbers and coil springs on workbench, dark moody lighting with blue accent lights, cinematic photography, 8K quality, dramatic shadows, clean organized garage, metallic textures, premium atmosphere, ultra realistic"

### Trust Image (`mechanic_trust.png`)
**Prompt:** "Professional automotive mechanic inspecting a car shock absorber under dramatic blue workshop lighting, close-up hands working on suspension parts, depth of field, premium quality, dark background, industrial atmosphere, cinematic color grading"
