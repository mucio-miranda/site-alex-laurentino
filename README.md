# Alex Laurentino Advocacia

Site institucional do Dr. Alex Laurentino, advogado criminalista inscrito na OAB/PB. É uma página única, feita para quem
precisa de um criminalista com urgência (prisão em flagrante, audiência de custódia, intimação) e para quem pesquisa
o advogado antes de contratar.

**No ar:** [alexlaurentinoadvocacia.com](https://alexlaurentinoadvocacia.com) (domínio na Hostinger: A @ → 75.2.60.5, CNAME www → alexlaurentino.netlify.app; HTTPS Let's Encrypt pela Netlify)

![Topo do site no computador](docs/img/topo-desktop.jpg)

<p align="center"><img src="docs/img/topo-celular.jpg" alt="Topo do site no celular" width="300"></p>

## O que a página precisava resolver

- **Urgência primeiro.** Quem chega com um parente preso precisa achar o contato em segundos. O WhatsApp aparece no
  topo, no destaque de "Prisão em flagrante", na mensagem do chat do canto ("Alguém da sua família foi preso?") e numa barra fixa no celular.
- **Autoridade sem ostentação.** A publicidade na advocacia segue o Provimento 205/2021 da OAB: nada de promessa de
  resultado, preço ou exposição de clientes. A confiança vem da trajetória (formação, plenário do júri, Comissão de
  Prerrogativas) e do cuidado visual, não de frases de venda.
- **Respostas antes da consulta.** A FAQ (dúvidas sobre flagrante, custódia, intimação e crimes contra a honra) está
  desativada desde 16/11/2026: continua no `index.html` com `hidden`, e o comentário acima dela explica como reativar.

## Direção visual

Um plenário à noite: fundo quase preto com um véu azul-marinho, dourado champanhe usado só na ação (botões e
marcadores) e fotos que se dissolvem no escuro, iluminadas por uma luz quente lateral. A proporção ficou em torno de
80% preto, 13% azul e 1–2% dourado.

- **Tipografia:** Cormorant Garamond (títulos, com o itálico como ênfase) e Manrope (texto e interface).
- **Fotos:** retratos reais do advogado com tratamento de luz e cor para manter a mesma atmosfera em todas as seções. As fotos das
  Quatro etapas são cenas do contexto (flagrante, delegacia, custódia, fórum) geradas com IA, sem rostos, com a mesma edição.
- **Tribuna:** o símbolo do logo fica atrás da foto do plenário e, no computador, se move em outra velocidade na
  rolagem, o que dá profundidade.
- **Chat de suporte:** no computador, a foto do advogado fica no canto e uma mensagem curta sai ao lado dela, uma vez
  por visita, depois de 12 s ou de uma tela de rolagem, e some em 8 s. A resposta abre o WhatsApp.

O sistema completo (cores, tipos, espaçamentos e componentes) está em [docs/DESIGN.md](docs/DESIGN.md).

<details>
<summary>Página inteira</summary>

![Página inteira no computador](docs/img/pagina-inteira.jpg)

</details>

## Tecnologia

- HTML e CSS puros, sem framework nem etapa de compilação de front-end.
- [GSAP 3.12](https://gsap.com) com ScrollTrigger para as entradas e o parallax.
- [Lenis 1.1](https://github.com/darkroomengineering/lenis) para a rolagem suave com mouse.
- Google Tag Manager (`GTM-T9FHTKV2` e `GTM-KQFW9V29`, do gestor de tráfego; a lista `GTM_IDS` fica em `scripts/build.py`): o build injeta o código só em produção, nos marcadores `<!--%%GTM_HEAD%%-->` e `<!--%%GTM_BODY%%-->` de cada página. Prévias e branches ficam sem a tag, para não sujar as métricas.
- Contato só pelo WhatsApp e telefone: a janela de conversa repassa a mensagem ao WhatsApp e não guarda nada.
- SEO: canonical, Open Graph, sitemap e JSON-LD (`LegalService`/`Attorney`, `Person` e `WebSite`, com cidade e área de atuação, sem o endereço da rua; o `FAQPage` saiu junto com a FAQ).
- Acessibilidade: foco visível, alvos de toque de 44 px e respeito a `prefers-reduced-motion`. Sem
  JavaScript, ou se o GSAP não carregar, todo o conteúdo aparece normalmente.

## Estrutura

```
site/                 o que vai para o ar
  index.html          página principal
  404.html            página de erro
  privacidade.html    política de privacidade
  links/index.html    página de links (/links) enviada pelo WhatsApp: mapa, Instagram, site e WhatsApp
  bio/index.html      link da bio do Instagram (/bio): site, flagrante e WhatsApp, sem localização
  css/                site.css (principal), paginas.css (404), privacidade.css, links.css
  js/site.js          menu, carrossel das etapas no celular e animações
  assets/img/         fotos
  assets/marca/       logos
scripts/build.py      gera dist/ para publicação
docs/                 sistema visual e imagens deste README
netlify.toml          build e cabeçalhos (segurança e cache)
```

## Rodar localmente

```bash
python scripts/build.py
python -m http.server 8000 -d dist
```

Depois abra http://localhost:8000. Para editar, sirva direto a pasta `site/` (`-d site`). Nesse caso as URLs de
canonical e Open Graph ficam com o marcador `%%SITE_URL%%`, que o build troca pela URL de cada deploy.

## Publicação

A Netlify roda `python3 scripts/build.py` e publica `dist/`.

- Um push no `main` atualiza o site principal.
- Outros branches e pull requests viram prévias com outro endereço. Nesse caso o build marca as páginas como
  `noindex` e bloqueia robôs, para a prévia não aparecer no Google.

Sem o repositório vinculado, o mesmo vale pela CLI:

```bash
python scripts/build.py --url https://alexlaurentinoadvocacia.com
npx netlify-cli deploy --prod --dir dist
```

As imagens ficam 7 dias em cache. Ao trocar uma foto, troque também o nome do arquivo.

## Direitos

O código está aqui como portfólio. Nome, marca, textos e fotografias pertencem ao Dr. Alex Laurentino e não podem ser
reutilizados.
