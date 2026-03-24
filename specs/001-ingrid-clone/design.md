# Design System: Dra. Ingrid Guedes Segatti — "Ivory & Rose Prestige"

## 1. Visual Theme & Atmosfera
- **Mood:** "Apple Health Meets Premium Dental" — Atmosfera de clínica premium luxuosa e acolhedora. Espaços brancos generosos, tipografia elegante serif, toque feminino e sofisticado em rose-gold. Inspira confiança clínica e calor humano ao mesmo tempo.
- **Filosofia:** Menos é mais. Cada elemento respira. Bordas brancas e off-white com acentos de blush/rose-gold criam um contraste sofisticado sem agressividade. Imagens limpas de consultório odontológico de alto padrão.
- **Referência visual:** Apple.com Healthcare + Clinique (cosmético) + Studio odontológico paulistano premium.

## 2. Paleta de Cores
| Token | Cor | Papel Funcional |
|---|---|---|
| `--color-primary` | `#c9a882` (Rose Gold Warm) | CTAs, destaques de ícone, bordas sutis ativas |
| `--color-primary-hover` | `#b8936e` (Rose Gold Escuro) | Hover states nos botões |
| `--color-accent-trust` | `#4ade80` (Verde WhatsApp) | Botão CTA WhatsApp, badge de avaliação |
| `--color-accent-star` | `#f59e0b` (Dourado) | Estrelas do Google |
| `--color-surface-0` | `#ffffff` (Branco Puro) | Fundo principal — hero e seções principais |
| `--color-surface-1` | `#fafaf8` (Ivory Quase-Branco) | Cards, seções alternadas |
| `--color-surface-2` | `#f3f0ea` (Beige Raso) | Fundos de rodapé e depoimentos |
| `--color-text-main` | `#1a1a1a` (Carvão Soft) | Texto principal |
| `--color-text-muted` | `#8a8070` (Taupe Discreto) | Texto secundário, legendas |

### Gradientes Decorativos
- **Hero overlay:** `from-white via-white/90 to-white/0` (transição limpa da esquerda)
- **Card glow:** `radial-gradient(... rgba(201,168,130,.06) ...)` (rose-gold sutil)
- **SocialProof strip:** `from-rose-50 via-white to-rose-50`

## 3. Tipografia
- **Família headline:** `Playfair Display` (Google Fonts — serif elegante, premium, feminino)
- **Família corpo:** `Inter` (legibilidade máxima em mobile)
- **Headlines (h1, h2):** `font-serif font-bold`, `tracking-tight`, `leading-[1.1]`, cor `#1a1a1a`
- **Nome da Dra.:** `font-serif font-light tracking-widest` (elegância discreta)
- **Body:** `font-sans font-light text-[#8a8070]`, `leading-relaxed`
- **Depoimentos:** `font-serif italic text-lg`
- **Labels/Badges:** `tracking-widest uppercase text-xs font-sans font-medium text-primary`

## 4. Mapeamento de Conteúdo (Seções)

### HeroSection
| Campo | Conteúdo |
|---|---|
| Pré-badge | Clínica Exclusiva • Vila Nogueira • Diadema |
| h1 | "Seu Sorriso Merece o Melhor Cuidado." |
| h1 serif accent | "o Melhor Cuidado" em Playfair Display rose-gold |
| Subtítulo | Odontologia humanizada, personalizada e de alto padrão. Sem convênio. Resultados que transformam. |
| CTA principal | Agendar Consulta (WhatsApp, verde) |
| CTA secundário | Ver Avaliações |
| Background | Foto de consultório clean com luz natural — branco, madeira clara, sem distrações |

### SocialProofStrip
- **Rating:** 5.0 ★ no Google
- **Total:** 5.038 Avaliações
- **Detalhe:** fundo rose-50, texto carvão, estrelas douradas

### ServiçosSection (Cards minimalistas)
| Card | Ícone | Título |
|---|---|---|
| Estética Dental | `Sparkles` | Sorrisos Perfeitos |
| Clareamento | `Sun` | Clareamento |
| Implantes | `Wrench` | Implantes Dentários |
| Ortodontia | `GitBranch` | Ortodontia & Alinhadores |
| Harmonização | `Star` | Harmonização Orofacial |
| Atendimento | `Heart` | Atendimento Humanizado |

### SobreDra (Sobre a Profissional)
- Foto da Dra. Ingrid (AI) lado direito com fundo marfim
- Bio textual: atendimento humanizado, foco no paciente, profissionais especializados
- Detalhe: **"❌ Não aceitamos convênio"** como diferencial de posicionamento premium

### TrustSection (Depoimentos)
| Campo | Conteúdo |
|---|---|
| Depoimento 1 | "Tudo ótimo e trabalha bem e preços melhor ainda" — Andrea Barbosa ⭐⭐⭐⭐⭐ |
| Depoimento 2 | "Excelente dentista, profissional e pessoa admirável." — Brenda Nascimento ⭐⭐⭐⭐⭐ |
| Depoimento 3 | "Materiais de alta qualidade e tecnologia." — Daniela Pereira ⭐⭐⭐⭐⭐ |

### MapSection
- **Embed Google Maps:** R. Bruno Spinosa, 231 - Vila Nogueira, Diadema - SP
- **Link GPS:** https://www.google.com/maps?kgmid=/g/11rzwvyd12&daddr=R.+Bruno+Spinosa,+231+-+Vila+Nogueira,+Diadema+-+SP,+09951-010
- **Telefone:** (11) 97269-0513
- **Horário:** Seg, Ter, Qui, Sex: 09:00–19:00 · Sáb: 09:00–14:00 · Qua e Dom: Fechado

### FloatingWhatsApp
- **Número:** 5511972690513
- **Mensagem pré-digitada:** "Olá, Dra. Ingrid! Vi o site e gostaria de agendar uma consulta."

### Footer
- **Marca:** DRA. INGRID GUEDES SEGATTI
- **Instagram:** @draingridsegatti → https://www.instagram.com/draingridsegatti/
- **Copyright:** © 2025 Dra. Ingrid Guedes Segatti. Odontologia Premium em Diadema.

## 5. Imagens (AI Generation)

### Hero Background (`hero_bg.png`)
**Prompt:** "Ultra-clean modern dental clinic interior, flooded with natural warm light, white walls, light wood accents, minimal medical equipment, fresh flowers, luxury feel, no people, architectural photography, 8K, depth of field, Apple-style product photography aesthetic"

### Dra. Ingrid Portrait (`dentist_portrait.png`)
**Prompt:** "Professional elegant Brazilian female dentist in her 30s, warm smile, white dental coat, pearl stud earrings, photographed in a bright luxury dental clinic, soft natural light, shallow depth of field, high-end commercial portrait photography, warm white tones, trustworthy and approachable expression"

### Sorriso Closeup (`smile_closeup.png`)
**Prompt:** "Close up of a perfect bright warm white smile, beautiful teeth, soft natural lighting, skin healthy, premium dental photography, warm tones, luxury aesthetic, ultra-realistic"

## 6. Animation System

### Filosofia
Animações **utilitárias e discretas** — efeito de polimento, nunca distração. Apple Human Interface Guidelines.
- Durations: `300ms–600ms`, nunca longas
- Easing entradas: `cubic-bezier(0.25, 0.1, 0.25, 1.0)` (Apple ease)
- Easing saídas: `[0.4, 0, 0.2, 1]` (Material ease-in-out)
- `prefers-reduced-motion: reduce` respeitado em **todas** as animações
- Animar apenas `opacity` + `transform` (GPU composited — zero layout shifts)

### Scroll-Triggered (Framer Motion `whileInView`)
| Elemento | Animação | Config |
|---|---|---|
| h2 de seções | `y: 20->0` + `opacity 0->1` | `duration: 0.5, ease: easeOut` |
| Cards de serviços | `y: 30->0` + `opacity 0->1` | `staggerChildren: 0.08` |
| Depoimentos | `scale: 0.97->1` + `opacity 0->1` | `duration: 0.4` |
| Foto da Dra. | `x: 20->0` + `opacity 0->1` | `duration: 0.6` |
| Contador reviews | `0 -> 5.038` (useCountUp hook) | `duration: 1.5, ease: circOut` |

Usar `viewport={{ once: true, margin: "-80px" }}` em todos — não repetir ao rolar de volta.

### Hover Micro-Interactions
| Componente | Comportamento |
|---|---|
| Cards de serviço | `scale: 1.02` + borda rose-gold acende + shadow sobe |
| Botão CTA WhatsApp | `scale: 1.03` + brightness leve |
| Botão outline | pseudo `::before` desliza fundo rose-gold da esquerda |
| Container foto Dra. | `overflow-hidden` + inner image `scale: 1.02` |
| Card depoimento | `translateY: -4px` + shadow mais profunda |

### Hero Section Stagger
Badge → h1 → subtítulo → CTAs com `delay` incremental de `0.12s`. Imagem hero Ken Burns: `scale 1.06 → 1.0` em `1.2s ease-out`.

### Transições Apple entre Seções
- Seções alternadas (branco ↔ ivory) com `border-radius: 48px 48px 0 0` no topo da próxima seção — técnica apple.com
- `scroll-behavior: smooth` no `html`
- Separadores: espaços brandos `py-28 md:py-36` em vez de `<hr>`
