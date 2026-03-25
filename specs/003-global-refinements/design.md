# Design: Refinamentos Globais

## 1. Cards de Serviços — Layout Bento Assimétrico

### Grid Structure
- **Desktop:** `grid-cols-3`, 2 rows
- **Tablet:** `grid-cols-2`
- **Mobile:** `grid-cols-1`

### Variantes de Card

#### A) Featured Card (`col-span-2`)
- Fundo: imagem com overlay gradiente `from-black/60 to-transparent`
- Conteúdo: badge topo-esquerdo + título grande + descrição + mini-chip de tag
- Altura: `min-h-[280px]`

#### B) Card Médio Colorido (padrão, `col-span-1`)
- Fundo: gradiente único por serviço (2 cores harmônicas)
- Ícone: `52px`, arredondado, destaque no topo
- Conteúdo: título `text-xl font-serif` + 1-2 linhas de descrição compacta
- Sem padding excessivo: `p-6`

#### C) Card Compacto Horizontal (`col-span-1 h-auto`)
- Ícone à esquerda (36px) + título + stat/badge à direita
- Layout: `flex items-center gap-4`
- Fundo: `bg-surface-0` com borda `border border-primary/10`
- Ideal para o último card (menos conteúdo)

### Tokens
- `gap-4` entre cards (reduzido de `gap-5-6`)
- Cantos: `rounded-3xl`
- Hover: `hover:-translate-y-1 transition-transform`

---

## 2. MapSection — Contraste e Visibilidade

### Container
```css
.map-wrapper {
  background: #18181b; /* zinc-900 */
  border-radius: 24px;
  overflow: hidden;
  border: 2px solid rgba(primary, 0.15);
  box-shadow: 0 8px 30px rgba(0,0,0,0.08);
}
```

### Iframe
- Remover filtros de desaturação extrema
- Aplicar: `mix-blend-mode: luminosity; opacity: 0.85`
- Dimensões: `w-full h-[360px] md:h-[500px]`

### Alternativa: Dark Map Style
- Usar parâmetro `style` do Maps Embed API para tema escuro
- URL: `?style=feature:all|element:all|saturation:-80|lightness:-30`

---

## 3. Footer DaviCode Badge

### Componente Compartilhado
Criar `src/components/ui/DaviCodeBadge.tsx` em cada projeto:

```tsx
// Layout
<div className="text-center text-xs text-muted/60">
  Feito com ♥ por{' '}
  <a href="https://davicode.me" target="_blank" rel="noopener noreferrer">
    DaviCode <span className="arrow">→</span>
  </a>
</div>
```

### Animação Desktop (Hover)
- CSS: `.arrow { transition: transform 0.2s ease; display: inline-block; }`
- `:hover .arrow { transform: translateX(4px); }`
- Link underline: `text-decoration-thickness` animado via CSS

### Animação Mobile (Click)
- `onClick` dispara classe CSS `animate-bounce-once` por 400ms
- Ou via Framer Motion: `whileTap={{ y: -3 }}` no link

### Posição no Footer
- Após o copyright `© {year}`
- Separado por `border-t border-primary/5 mt-4 pt-4`

### Adaptação por Tema
| Projeto | Cor do hover |
|---|---|
| lp-dra-ingrid-diadema | `text-[#c9a882]` (rose-gold) |
| lp-amigovet-diadema | `text-emerald-500` |
| lp-mecanica-india-diadema | `text-orange-400` |
| Todos outros | `text-primary` (variável já definida em cada projeto) |
