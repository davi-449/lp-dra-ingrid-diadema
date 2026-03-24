# Proposal: Seções Interativas Premium — LP Dra. Ingrid

## Contexto
A landing page atual da Dra. Ingrid já possui Hero, SocialProof, Serviços, Sobre, Mapa e Footer. O usuário quer **1-2 seções novas** que sejam interativas, mobile-first, imersivas e 100% temáticas de odontologia premium.

## Seções Propostas

### 1. 🪄 "Antes & Depois" — Slider Interativo de Transformações
**Conceito:** Carrossel horizontal (swipe no mobile, drag no desktop) com 3 cases de transformação dental. Cada case mostra uma imagem dividida em duas metades com um **slider arrastável** — o paciente desliza para ver o "antes" e "depois" do tratamento.

**Por que funciona:**
- É o formato de maior conversão em marketing odontológico.
- Toque/arrasto é naturalmente mobile-first e altamente interativo.
- Gera "wow factor" imediato e prova visual de resultado.

**Cases:**
| Nº | Tratamento | Descrição curta |
|---|---|---|
| 1 | Facetas em Porcelana | De um sorriso amarelado e desalinhado para harmonia total |
| 2 | Clareamento + Lentes | Teeth whitening com transformação de cor dramática |
| 3 | Implante Total | De falhas dentárias para sorriso completo e natural |

**Interação:**
- **Mobile:** swipe horizontal entre cases + drag vertical no slider antes/depois
- **Desktop:** hover + drag no divisor central
- Barra divisória com ícone de seta `⟵ ⟶` e label "Arraste para comparar"
- Transição suave entre cases com dots de navegação

---

### 2. 🦷 "Jornada do Sorriso" — Timeline Imersiva com Scroll
**Conceito:** Timeline vertical interativa que conta a experiência do paciente desde o primeiro contato até o resultado final. Cada etapa revela-se ao scrollar, com animações staggered e ícones temáticos.

**Por que funciona:**
- Reduz ansiedade do paciente ao mostrar transparência do processo.
- Scroll-triggered é naturalmente mobile-first.
- Cria narrativa emocional que aumenta confiança e converte.

**Etapas:**
| Step | Ícone | Título | Descrição |
|---|---|---|---|
| 1 | 📱 | Primeiro Contato | Agende pelo WhatsApp ou telefone. Sem burocracia. |
| 2 | 🏥 | Avaliação Completa | Exame clínico detalhado com fotos intra-orais e planejamento digital. |
| 3 | 📋 | Plano Personalizado | Apresentamos as melhores opções de tratamento, prazos e valores com total transparência. |
| 4 | ✨ | Tratamento Premium | Procedimentos feitos com materiais de última geração e conforto garantido. |
| 5 | 😁 | Sorriso Novo | Resultado natural e harmonioso. Acompanhamento pós-tratamento incluído. |

**Interação:**
- Linha vertical central com bolhas que "acendem" conforme o scroll avança
- Cada etapa alterna esquerda/direita (desktop), empilha vertical (mobile)
- Animação scroll-triggered: `opacity 0→1` + `x: ±30→0` alternando lados
- Última etapa com CTA "Comece sua jornada" (WhatsApp)

---

## Critérios de Aceite
- [ ] Ambas seções responsivas e touch-friendly (mobile-first).
- [ ] Animações respeitam `prefers-reduced-motion`.
- [ ] Slider antes/depois funciona com toque (touch events) e mouse (drag).
- [ ] Timeline revela etapas progressivamente com scroll.
- [ ] Build sem erros após integração.
- [ ] Commit na origin após validação.
