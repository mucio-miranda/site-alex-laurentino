"""Gera a pasta de publicação (dist/) a partir de site/.

Na Netlify roda sozinho (netlify.toml). Fora dela:
    python scripts/build.py --url https://alexlaurentino.netlify.app

- troca %%SITE_URL%% (canonical, og:url, og:image, JSON-LD) pela URL do deploy;
- gera sitemap.xml e robots.txt;
- em deploy preview e branch deploy (CONTEXT da Netlify diferente de "production"), ou com --noindex,
  marca as páginas como noindex e bloqueia robôs, para a versão de teste não entrar no Google.
"""
import argparse
import datetime
import os
import pathlib
import shutil

RAIZ = pathlib.Path(__file__).resolve().parents[1]
SITE = RAIZ / "site"

ap = argparse.ArgumentParser()
ap.add_argument("--url", help="URL final do site (padrão: variáveis da Netlify ou localhost)")
ap.add_argument("--saida", default=str(RAIZ / "dist"))
ap.add_argument("--noindex", action="store_true", help="força a versão de teste (sem indexação)")
a = ap.parse_args()

contexto = os.environ.get("CONTEXT")  # production | deploy-preview | branch-deploy (só na Netlify)
teste = a.noindex or (contexto is not None and contexto != "production")
url = a.url or (os.environ.get("DEPLOY_PRIME_URL") if teste else os.environ.get("URL")) or "http://localhost:8000"
url = url.rstrip("/")

out = pathlib.Path(a.saida)
if out.exists():
    shutil.rmtree(out)
shutil.copytree(SITE, out, ignore=shutil.ignore_patterns("desktop.ini", ".DS_Store"))

ROBOTS_PROD = '<meta name="robots" content="index, follow, max-image-preview:large">'
for f in out.rglob("*.html"):
    t = f.read_text(encoding="utf-8").replace("%%SITE_URL%%", url)
    if teste:
        t = t.replace(ROBOTS_PROD, '<meta name="robots" content="noindex, nofollow">')
    f.write_text(t, encoding="utf-8", newline="\n")

if teste:
    (out / "robots.txt").write_text("User-agent: *\nDisallow: /\n", encoding="utf-8")
else:
    hoje = datetime.date.today().isoformat()
    (out / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"  <url><loc>{url}/</loc><lastmod>{hoje}</lastmod></url>\n"
        f"  <url><loc>{url}/links/</loc><lastmod>{hoje}</lastmod></url>\n</urlset>\n", encoding="utf-8")
    (out / "robots.txt").write_text(
        f"User-agent: *\nAllow: /\n\nSitemap: {url}/sitemap.xml\n", encoding="utf-8")

print(f"pronto: {out}  ({'teste, sem indexação' if teste else 'produção'})  {url}")
