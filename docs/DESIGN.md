---
name: Alex Laurentino Advocacia
colors:
  background: '#010308'
  on-background: '#EAEAEA'
  surface: '#010308'
  surface-dim: '#000000'
  surface-bright: '#111f35'
  surface-container-lowest: '#000000'
  surface-container-low: '#02050c'
  surface-container: '#040a14'
  surface-container-high: '#0a1322'
  surface-container-highest: '#111f35'
  surface-variant: '#010812'
  on-surface: '#EAEAEA'
  on-surface-variant: '#98a2b0'
  outline: '#C2A87E'
  outline-variant: '#3a3226'
  primary: '#C2A87E'
  on-primary: '#1b1309'
  primary-container: '#E2C79C'
  on-primary-container: '#1b1309'
  primary-fixed: '#F3E4C6'
  primary-fixed-dim: '#C9A574'
  secondary: '#E9DBBE'
  on-secondary: '#1b1309'
  secondary-container: '#9C8460'
  on-secondary-container: '#F3E4C6'
  tertiary: '#000e1b'
  on-tertiary: '#EAEAEA'
  tertiary-container: '#010b16'
  on-tertiary-container: '#98a2b0'
  inverse-surface: '#EAEAEA'
  inverse-on-surface: '#010308'
  inverse-primary: '#9C8460'
  surface-tint: '#C2A87E'
  error: '#e0786a'
  on-error: '#1b0905'
  error-container: '#3a120c'
  on-error-container: '#f0b9a8'
typography:
  display-hero:
    fontFamily: Cormorant Garamond
    fontSize: clamp(50px, min(6.6vw, 11vh), 104px)
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: -0.005em
  headline-section:
    fontFamily: Cormorant Garamond
    fontSize: clamp(38px, 5vw, 68px)
    fontWeight: '500'
    lineHeight: '1.02'
    letterSpacing: -0.01em
  quote-display:
    fontFamily: Cormorant Garamond
    fontSize: clamp(36px, 4.8vw, 66px)
    fontWeight: '500'
    lineHeight: '1.08'
    letterSpacing: -0.01em
  manifesto:
    fontFamily: Cormorant Garamond
    fontSize: clamp(27px, 3.5vw, 50px)
    fontWeight: '500'
    lineHeight: '1.18'
    letterSpacing: '0'
  title-card:
    fontFamily: Cormorant Garamond
    fontSize: 29px
    fontWeight: '500'
    lineHeight: '1.08'
    letterSpacing: -0.01em
  body-base:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '300'
    lineHeight: '1.75'
    letterSpacing: '0'
  body-lead:
    fontFamily: Manrope
    fontSize: 17px
    fontWeight: '300'
    lineHeight: '1.75'
    letterSpacing: '0'
  button-pill:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.01em
  label-overline:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.32em
  label-nav:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '300'
    lineHeight: '1'
    letterSpacing: 0.2em
---

# Design System: Alex Laurentino Advocacia

Landing page de marca pessoal do Dr. Alex Laurentino, advogado criminalista (OAB/PB). Página única estática em HTML e CSS puro, com GSAP 3.12 e ScrollTrigger para os reveals e o parallax. Publicada na Netlify (`alexlaurentino.netlify.app`).
Extraído do código do site (`site/index.html` e `site/css/site.css`) em 14/11/2026.

## 1. Visual Theme & Atmosphere

É um plenário à meia-noite. O fundo é quase preto com um véu azul-marinho profundo (`#010308` a `#000e1b`). O dourado champanhe aparece com parcimônia, como o brilho de uma abotoadura sob luz baixa. A página respira devagar: seções altas, com 90 a 160 px de respiro vertical, poucas peças por tela e muito escuro em volta. Cada foto do Alex se dissolve no fundo por máscaras em degradê de 8 a 12 paradas, sem borda dura. A sensação é de luz de cinema recortando a figura num ambiente sóbrio.

O tom é de autoridade sem ostentação. É o que a ética da OAB pede (Provimento 205/2021): nada de martelo, balança em destaque, promessa ou luxo. A sofisticação vem de três escolhas. A primeira é a tipografia: uma serifada editorial de alto contraste, com itálico usado como ênfase emocional ("*técnica*", "*firme*"). A segunda é o vidro escuro: botões, selos e cards translúcidos com desfoque de fundo e um fio de luz no topo. A terceira é a **geometria de vidro arredondado** (desde 14/11/2026, no lugar da antiga aba de pasta): fotos, cards e painéis com cantos de 14 px, borda champanhe translúcida e um fio de luz no topo; botões e selo em cápsula. O resultado é coeso com os botões pílula, com ar de produto premium. A temperatura é fria nos fundos e quente apenas no acento dourado.

## 2. Color Palette & Roles

### Primary Foundation
- **Preto Tribunal** (`#010308`): fundo-base de toda a página, cor do `theme-color` e das transições entre seções.
- **Preto Absoluto** (`#000000`): borda esquerda do hero, onde o degradê horizontal começa.
- **Grafite Noturno** (`#02050c` / `#02060c`): fundo de transição na seção Tribunal do Júri.
- **Azul Abissal** (`#010b16`, `#000e1b`, `#010812`): o véu azul-marinho das faixas de seção (Manifesto, Sobre, Instituto). Sempre em degradê vertical que nasce e morre no preto.
- **Marinho Toga** (`#0a1322`, `#111f35`): superfícies elevadas, como o fundo do selo de vidro da foto do Sobre.
- **Brilho Marinho** (`rgba(2,28,52,.45)` / `rgba(3,30,58,.24)`): halos radiais suaves atrás do conteúdo, a "luz de sala" que tira o preto do chapado.

### Accent & Interactive
- **Champanhe** (`#C2A87E`): o acento principal. Losangos, ícones de traço, overlines, foco dos campos, a barra de rolagem e o "+" do FAQ.
- **Champanhe Claro** (`#E9DBBE`): bordas de vidro com 18 a 40% de opacidade e o realce central do degradê de ouro.
- **Bronze Velho** (`#9C8460`) e **Ouro Escovado** (`#B09670`): extremos do degradê metálico.
- **Degradê Ouro** (`linear-gradient(100deg, #9C8460 → #C2A87E → #E9DBBE → #B09670 → #9C8460)`): texto em ouro (`.ouro`), fios de overline e botão sólido. Imita metal escovado com um reflexo central.
- **Pílula Dourada** (`linear-gradient(180deg, #F3E4C6 → #E2C79C → #C9A574)`): o cabochão do CTA principal, com brilho externo (`rgba(226,199,156,.35)`) e luz interna no topo.
- **Tinta sobre Ouro** (`#1b1309`): castanho quase preto usado como texto e ícone sobre superfícies douradas.
- **Fio Champanhe** (`rgba(194,168,126,.26)`): a cor de todas as linhas divisórias (`--linha`).

### Typography & Text Hierarchy
- **Marfim Frio** (`#EAEAEA`): títulos, texto principal e itens de lista.
- **Cinza Ardósia** (`#98a2b0`): textos de apoio, parágrafos de seção, links do menu e rótulos de formulário. É um cinza levemente azulado, coerente com o fundo frio.
- **Cinza Pedra** (`#7d7671`, `#77706b`): avisos legais do formulário e rodapé final. Quente e bem apagado.

### Functional States
- **Foco:** a borda inferior do campo passa de `rgba(234,234,234,.22)` para o Champanhe `#C2A87E`.
- **Hover em links:** o texto vai de Cinza Ardósia para Marfim Frio.
- **Erro e sucesso:** sem estilo dedicado no código. O envio vai para `obrigado.html`, e a validação é a nativa do navegador. Se for preciso, use um terracota suave (`#e0786a` sobre `#3a120c`), nunca vermelho saturado.

## 3. Typography Rules

**Cormorant Garamond** (Google Fonts, 500 e itálico 500; 600 disponível) cuida de toda a voz da marca: títulos, manifesto, citação, perguntas do FAQ, números dos passos, nome no selo e a faixa de credenciais. Garamond de display com contraste alto, da mesma família visual das letras do logo; passa tradição jurídica e elegância. Usa o peso 500 (o 400 fica fino demais no fundo escuro). Algarismos alinhados (`font-variant-numeric: lining-nums` no body). Escolhida pelo usuário em 15/11/2026 (opção 2 de 5), no lugar da Instrument Serif.

**Manrope** (300, 400, 500) cuida da leitura e da interface. Grotesca humanista e limpa, entra em peso 300 no corpo, o que dá leveza contra o fundo escuro. O peso 500 fica para botões, overlines e rótulos. Substituiu a Poppins em 15/11/2026.

### Hierarchy & Weights
| Papel | Fonte | Tamanho | Peso | Altura de linha | Espaçamento |
|---|---|---|---|---|---|
| H1 do hero | Cormorant Garamond | clamp(46px, min(6vw, 10vh), 92px) | 500 | 1 | -0.005em |
| H2 de seção | Cormorant Garamond | clamp(38px, 5vw, 68px) | 500 | 1.02 | -0.01em |
| Citação (Tribunal do Júri) | Cormorant Garamond | clamp(36px, 4.8vw, 66px) | 500 | 1.08 | — |
| Manifesto | Cormorant Garamond | clamp(27px, 3.5vw, 50px) | 500 | 1.18 | — |
| Número do passo | Cormorant Garamond | 62px (46px no celular) | 500 | 1 | — |
| Título de form | Cormorant Garamond | 32px | 500 | 1.08 | — |
| H3 de card | Cormorant Garamond | 29px | 500 | 1.08 | -0.01em |
| H3 de passo | Cormorant Garamond | 25px | 500 | 1.08 | — |
| Pergunta do FAQ | Cormorant Garamond | clamp(21px, 1.95vw, 26px) | 500 | 1.3 | — |
| Faixa de credenciais | Cormorant Garamond, caixa-alta | clamp(11px, .92vw, 14px) | 500 | — | 0.13em |
| Corpo | Manrope | 16px | 300 | 1.75 | — |
| Lead do hero | Manrope | 17px (15px no celular) | 300 | 1.75 | — |
| Texto de card e passo | Manrope | 14.5px | 300 | 1.75 | — |
| Botão pílula | Manrope | 15px (13px na navbar) | 500 | 1 | 0.01em |
| Overline | Manrope, caixa-alta | 11px | 500 | 1 | 0.32em |
| Menu | Manrope, caixa-alta | 12px | 300 | — | 0.2em |
| Rótulo de campo / título de rodapé | Manrope, caixa-alta | 11px | 300 / 500 | — | 0.2em / 0.24em |

**Ênfase:** palavras-chave dos títulos entram em itálico, às vezes com o degradê de ouro como cor do texto (`.ouro`). É a assinatura tipográfica da página.

### Spacing Principles
- Os títulos são justos (altura de linha de 1 a 1.08, espaçamento levemente negativo), para parecerem blocos gráficos.
- O corpo é arejado (1.75), compensando o peso 300 e o fundo escuro.
- Tudo em caixa-alta leva espaçamento largo, de 0.13em a 0.32em: é o registro "institucional" da página. Caixa-alta nunca aparece sem esse espaçamento.
- A overline vem sempre antes do H2, com um fio dourado de 34 px à esquerda. A distância até o título é de 18 a 28 px.

## 4. Component Stylings

### Buttons
- **Pílula (CTA principal, `.btn-pilula`):** cápsula de vidro escuro totalmente arredondada (999px), com degradê branco de 7% a 2%, borda de 12% de branco, desfoque de 14px e sombra profunda (`0 18px 40px rgba(0,0,0,.5)`). Uma luz interna marca o topo e uma sombra interna marca a base. À esquerda fica um cabochão dourado de 78×44 px com seta fina escura (traço de 1.5). O texto vem depois, em caixa normal: "Fale com o escritório". No hover, o botão sobe 2px, a borda clareia e a pílula desliza 3px para a direita (0.3s).
- **Pílula da navbar (`.btn-pilula-nav`):** a mesma peça em escala menor, com cerca de 42 px de altura, cabochão de 54×34, seta de 24 px, texto de 13 px e sombra mais curta. Sobe só 1px no hover.
- **Vidro em cápsula (`.btn-hero`):** botão secundário totalmente arredondado (999px) em vidro (5% de branco, borda champanhe a 22%, desfoque de 14px), texto em caixa-alta de 13px com espaçamento de 0.14em e seta dourada. Usado no Sobre e no envio do formulário.
- **Linha e ouro sólido (`.btn-linha`, `.btn-ouro`):** variantes de borda fina e de fundo em degradê de ouro com texto `#1b1309`, ambas retas. Ficaram como reserva no CSS.
- Todos os botões usam transição de 0.3s em transform, sombra e fundo. Não há estado pressionado próprio.

### Cards & Painéis de Vidro
- **Card de área de atuação (`.card`):** vidro escuro com cantos de 14 px, degradê de 6% a 1.5% de branco, desfoque de 12px, borda champanhe a 16%, sombra `0 18px 40px rgba(0,0,0,.4)` e fio de luz interno no topo. Espaçamento interno de 44/34/38 px. Por dentro: ícone de traço dourado de 34 px, H3 de 29 px e texto cinza de 14.5 px. No hover sobe 2px e a borda clareia (0.3s).
- **Foto do Sobre (`.moldura`):** foto 4:5 com brilho de 0.84, cantos de 14 px, borda champanhe a 18%, sombra profunda e fio de luz no topo. Sem recorte nem contorno deslocado.
- **Fotos das etapas (`.etapa-foto`):** mesma moldura de 14 px, com degradê escuro suave na base e zoom 1.03 da foto no hover, dentro da moldura.
- **Selo de vidro (`.selo`):** cartão marinho translúcido (`rgba(10,19,34,.42)`), raio de 14px, desfoque de 16px, borda champanhe a 18% e sombra de 50px, sobreposto ao canto da foto. Leva um número ou título em serifada de 25px e uma legenda dourada de 12px.
- **Formulário:** painel de vidro escuro (`rgba(2,4,7,.6)`), raio de 14px, borda champanhe a 16% e desfoque de 16px.

### Navigation
- Barra fixa, transparente no topo, com 66 px de altura: logo de 32px à esquerda, menu centralizado e pílula à direita.
- O menu fica em Manrope 12px, caixa-alta, espaçamento de 0.2em, Cinza Ardósia, com 38px entre itens. No hover vai para Marfim, sem sublinhado.
- Depois de 40px de rolagem, ganha vidro (`rgba(0,0,0,.2)`, desfoque de 16px) e um fio champanhe a 12% na base, em transição de 0.4s.
- No celular (até 820px), menu e pílula somem e entra um "☰". O menu abre como painel em tela cheia por baixo da barra (`rgba(2,4,7,.97)`), em coluna, com 26px entre itens.

### Inputs & Forms
- Campos sem caixa: fundo transparente, só uma linha inferior de 1px (`rgba(234,234,234,.22)`), texto em Manrope 300 de 16px e 10px de espaçamento vertical.
- O foco troca a linha para o Champanhe em 0.3s, sem anel e sem brilho.
- Rótulos em caixa-alta de 11px com espaçamento de 0.2em, em Cinza Ardósia, acima do campo.
- Nome e telefone ficam lado a lado (2 colunas, 24px de espaço) e empilham no celular. O textarea tem altura mínima de 64 a 90px e redimensiona só na vertical.
- Um aviso de sigilo em 12px Cinza Pedra fecha o formulário.

### Domain-Specific Components
- **Selo do hero (`.etiqueta`):** cápsula de vidro totalmente arredondada (999px) flutuando sobre a foto do hero, a 56% da altura. Traz o ícone de balança em traço dourado de 28px, o nome em serifada de 15.5px e "ADVOCACIA CRIMINAL · OAB/PB" em 7px com espaçamento de 0.2em. Fica escondido no celular.
- **Faixa de credenciais (`.valores`):** barra de vidro de 56px entre dois fios champanhe, sobreposta à base do hero (margem de -56px). Os itens são em serifada caixa-alta, separados por losangos dourados de 5px girados a 45°. Os itens menos importantes somem em 1100px e 960px.
- **Losango:** quadrado dourado girado a 45°, de 5, 7 ou 9px, usado como marcador de lista, separador da faixa de credenciais e nó da linha do tempo. Faz o papel do bullet redondo em toda a página.
- **Etapas "Como funciona" (`.passos`):** cabeçalho em linha (overline + H2 à esquerda, lead à direita) e 4 colunas, cada uma com foto real do Alex (moldura de 14 px), linha de número (losango de 7px + "01" em serifada dourada + fio champanhe até a borda), H3 de 25px e texto cinza. Sem trilha ligando as etapas e sem numerais gigantes. No celular, lista com a foto à esquerda (38%) e o texto à direita.
- **FAQ (`details`):** separadores em fio champanhe, pergunta em serifada e um "+" dourado em Manrope 300 que gira 45° (vira "×") ao abrir. O título da seção fica fixo (sticky a 120px) enquanto as perguntas rolam.
- **Fotos com dissolução:** hero, Tribunal do Júri e Contato usam a foto como fundo lateral, com `mask-image` de muitas paradas (horizontal cruzada com vertical via `mask-composite: intersect`). Assim a pessoa nasce do escuro, sem retângulo visível.

## 5. Layout Principles

### Grid & Structure
- Container de no máximo `1320px`, centralizado, com respiro lateral fluido `clamp(20px, 5vw, 96px)` (`--gut`).
- O hero tem altura de 100svh (mínimo 620px). O texto fica numa coluna de até 640px à esquerda e a foto é absoluta à direita, com largura `min(68vw, 102% da altura)`.
- As seções de duas colunas usam grade assimétrica: Sobre 0.9fr/1.1fr, Instituto 1.1fr/0.9fr, FAQ 0.8fr/1.2fr e Contato 1fr/1fr com o conteúdo na coluna 2. O espaço entre colunas é `clamp(40px, 7vw, 110px)`.
- Cards: 3 colunas, 2 em 1024px e 1 em 820px, com 22px de espaço.
- Pontos de quebra: 1100px e 960px (só a faixa de credenciais), 1024px (grades) e 820px (virada para celular).

### Whitespace Strategy
- O respiro vertical padrão de seção é `clamp(90px, 12vw, 160px)`. O Manifesto tem um respiro inferior maior, `clamp(110px, 16vw, 200px)`, como pausa dramática.
- Não há escala em múltiplos de 8. Os valores são escolhidos à mão (14, 18, 22, 26, 34, 40, 48, 64px), com tendência a números pares e generosos.
- As seções se fundem sem corte: degradês verticais sempre começam e terminam no Preto Tribunal, e o Tribunal do Júri sobe 140px sobre a Atuação para a foto continuar de uma seção na outra.

### Alignment & Visual Balance
- O texto fica alinhado à esquerda no desktop. Só o Manifesto é centralizado, como uma frase emoldurada.
- A pessoa fica do lado oposto ao texto: hero e Tribunal do Júri com foto à direita, Contato com foto à esquerda. Isso cria um zigue-zague na rolagem.
- O peso visual vem da foto e do H1. Todo o resto é discreto: dourado em doses pequenas, cinza no texto de apoio.

### Responsive Behavior & Touch
- O CSS é escrito para o desktop, com ajustes para baixo via `max-width`.
- No celular (até 820px), o hero vira foto em cima, com altura `min(100vw, 50svh)`, e texto centralizado embaixo, subindo 28px sobre a foto. As máscaras laterais viram verticais, com a foto dissolvendo para baixo. Selo e faixa de credenciais saem, e o parallax é desligado.
- O Contato mostra a foto com 40svh de altura antes do formulário. As grades viram uma coluna, e o título do FAQ deixa de ser fixo.
- Nos toques, os botões pílula têm 44 a 58px de altura no desktop. Os campos têm cerca de 40px de área útil.
- Movimento: reveals de 34px para cima com fade (GSAP, `power3.out`, 1 a 1.1s, disparo a 88% da tela) e parallax leve (6% na foto do hero, 10% na do júri) só acima de 821px. Com `prefers-reduced-motion`, tudo aparece de uma vez, sem animação.
- A barra de rolagem é fina, de 6px: trilho transparente, alça champanhe a 35% (60% no hover), sem setas.

## 6. Design System Notes for Stitch Generation

### Language to Use
"Plenário à meia-noite", "preto com véu azul-marinho", "dourado champanhe usado com parcimônia", "vidro escuro fosco com fio de luz no topo", "serifada editorial condensada com itálico de ênfase", "foto que se dissolve no escuro, luz de cinema", "vidro escuro arredondado com fio de luz", "losangos dourados no lugar de bullets", "autoridade sóbria, sem ostentação".

Evite: martelo, balança grande, colunas gregas, mármore, dourado brilhante ou em excesso, botões coloridos, aba de pasta ou recortes decorativos, cantos retos misturados aos arredondados e qualquer coisa que pareça promessa de resultado.

### Color References
- Fundo: **Preto Tribunal** `#010308`, com faixas de **Azul Abissal** `#000e1b` em degradê.
- Superfície elevada: **Marinho Toga** `#0a1322`.
- Acento: **Champanhe** `#C2A87E`. Realce: **Champanhe Claro** `#E9DBBE`. Metal: degradê `#9C8460 → #C2A87E → #E9DBBE → #B09670`.
- CTA: **Pílula Dourada** `#F3E4C6 → #E2C79C → #C9A574`, com **Tinta sobre Ouro** `#1b1309` por cima.
- Texto: **Marfim Frio** `#EAEAEA`. Apoio: **Cinza Ardósia** `#98a2b0`. Linhas: **Fio Champanhe** a 26%.

### Component Prompts
1. "Hero de landing page para advogado criminalista: fundo quase preto com halo azul-marinho difuso à esquerda. Título enorme em serifada Garamond de display (Cormorant Garamond 500), três linhas, com uma palavra em itálico dourado metálico. Acima dele, uma overline em caixa-alta espaçada com fio dourado. À direita, retrato do advogado de terno escuro, dissolvendo no fundo por degradê suave nas bordas, com luz de cinema. CTA em cápsula de vidro escuro com pílula dourada à esquerda contendo uma seta fina, e o texto 'Fale com o escritório' em sans-serif leve."
2. "Grade de 3 cards de áreas de atuação em vidro quase transparente sobre fundo preto. Cada card tem cantos de 14px, borda champanhe translúcida, sombra profunda e um fio de luz no topo. Por dentro: ícone de traço fino dourado, título em serifada de 29px e descrição curta em cinza azulado, com bastante espaço interno."
3. "Seção 'Como funciona' com 4 etapas em colunas: cada uma com um retrato real do advogado em moldura de vidro de cantos 14px, abaixo um pequeno losango dourado com o número em serifada e um fio fino até a borda, título em serifada e texto curto em cinza. No celular, foto à esquerda e texto à direita."

### Incremental Iteration
- Comece pelo fundo e pela tipografia. Se a página não parecer cara só com preto, serifada e cinza, o dourado não vai salvar.
- Acrescente o dourado em doses: primeiro overlines e losangos, depois o CTA. Mais de dois elementos dourados grandes na mesma tela já é excesso.
- Vidro só sobre foto ou halo. Sobre preto chapado, o desfoque não aparece e o componente fica sem graça.
- Toda foto nova de pessoa precisa de máscara em degradê de muitas paradas e luz direcional. Retângulo de foto com borda visível quebra o sistema.
- Cantos: cápsula (999px) para todos os botões e o selo do hero; 14px para fotos, cards, selos e formulário. Não misture outros valores. A aba de pasta foi aposentada em 14/11/2026.
- Antes de publicar, confira as regras da OAB: sem promessa de resultado, sem preço, sem "consulta grátis" e sem exposição de clientes.

## Símbolo na seção Tribunal do Júri (15/11/2026)
O símbolo do logo (vetor tirado do PDF original, `IDENTIDADE VISUAL/LOGOS/EDITÁVEIS/LOGO - VERS 01.pdf`) fica atrás do advogado, cortado pela borda direita: degradê dourado (E9DBBE → C2A87E → 9C8460) a 14%, right 7%, top 4%, até 840 px; no celular right -4%, 96vw. Camadas: foto de fundo (.bg) > símbolo > recorte da pessoa (.bg.pessoa, juri-tribuna-recorte.webp), as duas fotos com o mesmo parallax. Opção B de 4, em tamanho menor, escolhida pelo usuário.
