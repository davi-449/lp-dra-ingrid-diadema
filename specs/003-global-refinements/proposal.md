# Proposal: Refinamentos Globais — Cards, Mapa e Footer DaviCode

## Contexto
Feedback do usuário após revisão visual das landing pages ativas. Três problemas críticos identificados:

---

## Problema 1 — Cards de Serviços Genéricos

### Problema
Os cards atuais ocupam muito espaço, têm layouts muito similares entre si (ícone + título + texto) e não transmitem diferenciação visual nem personalidade. Na screenshot da AmigoVet, o card grande fica com muito espaço vazio e as variações são quase imperceptíveis.

### Solução Proposta: Layout Bento Assimétrico com Densidade Variável
- **Card Destaque (Featured):** 1 card largo (col-span-2) com imagem real de fundo, texto branco sobreposto e tag colorida. _Efeito visual de "capa de revista"._
- **Cards Médios:** 2-3 cards com gradiente único, ícone grande (40-48px), título e 1-2 linhas de texto. Sem padding excessivo.
- **Cards Compactos:** 1-2 cards menores, exibem apenas ícone + título + stat ou badge (ex: "✓ Mais popular")
- **Regra geral:** Altura auto (sem `min-h` fixo), `gap-4` ao invés de `gap-6-8`, conteúdo denso e direto.

### Critérios de Aceite
- [ ] Nenhum card com `min-h` fixo que gere espaço em branco.
- [ ] Pelo menos 2 variações visuais de card distintas (featured + compacto).
- [ ] Responsivo: mobile empilha em 1 coluna, tablet 2.

---

## Problema 2 — Mapa Invisível (Tonalidade Quase Branca)

### Problema
O Google Maps embed aparece com filtro quase idêntico ao fundo branco/ivory da página, tornando o mapa praticamente invisível. Na screenshot do AmigoVet, o mapa some no background branco.

### Solução Proposta: Card Mapa com Contraste
- Remover o filtro de desaturação extrema do iframe.
- Envolver o mapa em container com borda `border-2 border-primary/20` e sombra `shadow-md`.
- Adicionar fundo escuro no container do mapa: `bg-zinc-900 rounded-3xl overflow-hidden`.
- Mapa com `opacity-80 mix-blend-luminosity` para dar charme sem sumir.
- Alternativamente: usar o estilo JSON de mapa noturno (via Static Maps API) para contraste máximo.

### Critérios de Aceite
- [ ] Mapa visível e reconhecível em fundos claros.
- [ ] Área do mapa com contraste sufficiente vs. entorno.

---

## Problema 3 — Footer "Feito por DaviCode" em Todas as Landings

### Requisitos
- Aparece no rodapé de **todas** as landing pages do portfólio (10+ projetos).
- Layout: `Feito com ❤️ por DaviCode` → link animado `→ davicode.me`
- **Animação desktop (hover):** O `→` cresce e o texto sublinha suavemente.
- **Animação mobile (tap/click):** Pequena animação de "bounce" ou "pulse" no link.
- Consistente em todas as landings (mesma fonte e estilo base, adaptada à cor do tema do projeto).

### Projetos para Atualizar
| Projeto | Tema |
|---|---|
| lp-dra-ingrid-diadema | Rose Gold / Ivory |
| lp-amigovet-diadema | Verde Esmeralda |
| lp-mecanica-india-diadema | Laranja / Escuro |
| lp-mecanica-japones-diadema | Vermelho / Escuro |
| lp-nkam-suspensao-sbc | Azul / Escuro |
| lp-oficina-jac-motors-diadema | Azul Noturno |
| lp-recam-amortecedores-diadema | Vermelho Metal |
| lp-centro-automotivo-aguia-diadema | A confirmar |
| lp-suspensao-lcar-diadema | A confirmar |
| lp-tratocao-sbc | A confirmar |

### Design do Badge DaviCode
```
Feito com ♥ por [DaviCode →]
```
- Fonte: `text-xs font-light tracking-wider`
- Cor: `text-muted/60` com `:hover text-primary`
- Link `[DaviCode →]`: hover animado com `translateX(2px)` na seta `→` via Framer Motion ou CSS transition
- Em mobile: toque dispara `animate-bounce` 1 vez na seta

### Critérios de Aceite
- [ ] Badge presente no footer de todos os 10 projetos.
- [ ] Animação da seta `→` funciona no hover e click/tap.
- [ ] Link aponta para `https://davicode.me` com `target="_blank"`.
- [ ] Não quebra layout em nenhum tamanho de tela.
