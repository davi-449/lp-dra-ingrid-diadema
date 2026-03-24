# Design: Seções Interativas Premium — LP Dra. Ingrid

## 1. BeforeAfterSection — Slider de Transformações

### Layout
- **Posição:** Entre `ServicesBentoBox` e `TrustSection`
- **Fundo:** `surface-0` (branco) com padding `py-24 md:py-36`
- **Container:** max `800px` centralizado — foco total na imagem

### Componente `BeforeAfterSlider`
- Container `aspect-[4/3]` com `overflow-hidden rounded-3xl`
- Imagem "depois" como fundo base (posição absoluta)
- Imagem "antes" com `clip-path: inset(0 {100 - position}% 0 0)` controlado por estado
- Barra divisória: `2px` rose-gold + handle circular `48px` branco com sombra, ícone `⟵⟶`
- **Touch:** `onTouchMove` captura `clientX` relativo ao container calculando porcentagem
- **Mouse:** `onMouseDown` ativa drag, `onMouseMove` atualiza, `onMouseUp` desativa
- **Initial:** Slider começa em 50% (metade e metade)

### Carrossel de Cases
- 3 cases com dots de navegação centralizados abaixo
- Swipe horizontal entre cases via `framer-motion` `AnimatePresence` + `drag="x"`
- label abaixo: nome do tratamiento + breve descrição
- Dots: bolinhas `8px`, ativa = rose-gold, inativa = `surface-2`

### Cores & Tipografia
- Título seção: `font-serif text-4xl md:text-5xl text-text-main`
- Badge: `tracking-widest uppercase text-sm text-primary`
- Label "Arraste para comparar": `text-xs text-text-muted uppercase tracking-widest`

### Imagens (AI)
> **Nota:** Quota de imagem AI esgotada. Usar imagens stock de Unsplash tipo "dental before after" ou placeholder sólido com texto "Antes" / "Depois" até que as imagens reais estejam disponíveis.

---

## 2. SmileJourneySection — Timeline Imersiva

### Layout
- **Posição:** Entre `TrustSection` e `MapSection`
- **Fundo:** Gradiente sutil `from-surface-1 to-surface-0`, `section-rounded`

### Estrutura Visual
- **Desktop:** Linha vertical central `2px border-primary/20` com steps alternando esquerda/direita
- **Mobile:** Linha vertical à esquerda, todos steps à direita (sem alternação)

### Step Component
- Container com `relative` e linha vertical
- Bolha circular `48px` no centro da linha, com ícone Lucide + número
- Bolha inativa: `bg-surface-2 border-primary/10` → ativa (in view): `bg-primary/10 border-primary/40 scale-1.1`
- Card ao lado: `bg-white rounded-2xl p-6 shadow-sm border border-primary/5`
- Animação de entrada: `whileInView` `opacity 0→1` + `x: 30→0` (direita) ou `x: -30→0` (esquerda)
- `staggerChildren: 0.1` entre steps

### CTA Final
- Após o último step, seção com CTA grande:
  - "Comece Sua Jornada" (botão WhatsApp verde, `PulseRing`)
  - Subtítulo: "Agende sua avaliação sem compromisso"

### Responsividade
- `lg:` = timeline com 2 colunas alternadas
- `<lg` = timeline 1 coluna, linha à esquerda, cards à direita
- Steps com `gap-12 md:gap-16`

### Cores
- Linha: `border-primary/15`
- Bolha ativa: `bg-primary/10`, ícone `text-primary`
- Bolha inativa: `bg-surface-2`, ícone `text-text-muted`
