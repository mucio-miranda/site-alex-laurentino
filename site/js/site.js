/* Alex Laurentino Advocacia: menu, carrossel das etapas e animações (GSAP) */
(function(){
  var topo=document.getElementById('topo');
  addEventListener('scroll',function(){topo.classList.toggle('rolou',scrollY>40)},{passive:true});
  var menu=document.getElementById('menu'),bg=document.getElementById('burger');
  function fecha(){menu.classList.remove('aberto');bg.setAttribute('aria-expanded','false');bg.setAttribute('aria-label','Abrir menu')}
  bg.addEventListener('click',function(){var a=menu.classList.toggle('aberto');bg.setAttribute('aria-expanded',a?'true':'false');bg.setAttribute('aria-label',a?'Fechar menu':'Abrir menu')});
  document.querySelectorAll('.menu a').forEach(function(a){a.addEventListener('click',fecha)});
  addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('aberto')){fecha();bg.focus()}});
  var ol=document.querySelector('.etapas'),dots=document.querySelector('.car-dots');
  if(ol&&dots){var lis=[].slice.call(ol.children);var pad=function(){return parseFloat(getComputedStyle(ol).paddingLeft)||0};
    lis.forEach(function(li,k){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Etapa '+(k+1));b.addEventListener('click',function(){ol.scrollTo({left:li.offsetLeft-ol.offsetLeft-pad(),behavior:'smooth'})});dots.appendChild(b)});
    var marca=function(){var x=ol.scrollLeft,m=0,d=1e9;lis.forEach(function(li,k){var dd=Math.abs(li.offsetLeft-ol.offsetLeft-pad()-x);if(dd<d){d=dd;m=k}});[].forEach.call(dots.children,function(b,k){b.setAttribute('aria-current',k===m?'true':'false')})};
    ol.addEventListener('scroll',marca,{passive:true});marca()}
  var barra=document.querySelector('.barra-ct'),heroEl=document.getElementById('inicio');
  if(barra&&heroEl&&'IntersectionObserver' in window){new IntersectionObserver(function(en){barra.classList.toggle('mostra',!en[0].isIntersecting)},{rootMargin:'-60% 0px 0px 0px'}).observe(heroEl)}else if(barra){barra.classList.add('mostra')}
  var reduz=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var loader=document.getElementById('loader');
  function tiraLoader(){if(loader&&!loader.classList.contains('sai')){loader.classList.add('sai');setTimeout(function(){loader.remove()},800)}}
  if(document.documentElement.classList.contains('sem-loader'))tiraLoader();
  else{var t0=Date.now();var fim=function(){setTimeout(tiraLoader,Math.max(0,1150-(Date.now()-t0)))};if(document.readyState==='complete')fim();else addEventListener('load',fim);setTimeout(tiraLoader,2200)}
  if(!window.gsap||reduz){document.querySelectorAll('.rv').forEach(function(e){e.style.opacity=1;e.style.transform='none'});return}
  gsap.registerPlugin(ScrollTrigger);
  var desk=matchMedia('(min-width:821px)').matches;
  var atraso=document.documentElement.classList.contains('sem-loader')?.1:1.05;
  /* rolagem suave (só com mouse) */
  if(window.Lenis&&matchMedia('(pointer:fine)').matches){
    var lenis=new Lenis({lerp:.12});
    lenis.on('scroll',ScrollTrigger.update);
    document.querySelectorAll('details').forEach(function(d){d.addEventListener('toggle',function(){setTimeout(function(){lenis.resize();ScrollTrigger.refresh()},500)})});gsap.ticker.add(function(tm){lenis.raf(tm*1000)});gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(ev){var id=a.getAttribute('href');if(id.length<2)return;var alvo=document.querySelector(id);if(!alvo)return;ev.preventDefault();lenis.scrollTo(alvo,{offset:-66})})});
  }
  /* palavras com máscara */
  function quebra(el){var nos=[];var w=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);while(w.nextNode())nos.push(w.currentNode);
    nos.forEach(function(n){if(!n.nodeValue.trim())return;var f=document.createDocumentFragment();n.nodeValue.split(/(\s+)/).forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){f.appendChild(document.createTextNode(p));return}var o=document.createElement('span');o.className='w';var d=document.createElement('span');d.textContent=p;o.appendChild(d);f.appendChild(o)});n.parentNode.replaceChild(f,n)});
    [].forEach.call(el.querySelectorAll('em'),function(em){var nx=em.nextSibling;if(nx&&nx.nodeType===1&&nx.classList.contains('w')&&/^[,.;:!?]/.test(nx.textContent)){var g=document.createElement('span');g.style.whiteSpace='nowrap';em.parentNode.insertBefore(g,em);g.appendChild(em);g.appendChild(nx)}});
    return el.querySelectorAll('.w>span')}
  /* topo: a foto sai do escuro, o título entra palavra por palavra e "técnica" acende por último */
  var h1=document.querySelector('.hero h1');
  if(h1){h1.style.opacity=1;h1.style.transform='none';var ws=quebra(h1);gsap.from(ws,{yPercent:110,duration:1.05,ease:'power4.out',stagger:.07,delay:atraso+.15});
    var dour=h1.querySelector('em');if(dour)gsap.from(dour,{opacity:.25,duration:1.2,ease:'power2.out',delay:atraso+.9})}
  gsap.to('.hero .rv:not(h1)',{opacity:1,y:0,duration:1,ease:'power3.out',stagger:.12,delay:atraso+.45});
  gsap.fromTo('.hero-foto img',{scale:1.08,filter:'brightness(.35)'},{scale:1,filter:'brightness(1)',duration:1.8,ease:'power2.out',delay:atraso-.2,clearProps:'filter'});
  /* títulos das seções */
  gsap.utils.toArray('main h2.rv, .tribuna blockquote.rv').forEach(function(el){el.style.opacity=1;el.style.transform='none';var ws=quebra(el);
    gsap.from(ws,{yPercent:110,duration:1,ease:'power4.out',stagger:.05,scrollTrigger:{trigger:el,start:'top 86%'}})});
  /* fotos: revelação por recorte, de baixo para cima, com respiro */
  gsap.utils.toArray('.etapa-foto, .sobre-foto, .dest').forEach(function(f){var img=f.querySelector('img,.dest-bg');
    var tl=gsap.timeline({scrollTrigger:{trigger:f,start:'top 85%'}});
    tl.fromTo(f,{clipPath:'inset(100% 0% 0% 0%)'},{clipPath:'inset(0% 0% 0% 0%)',duration:1.25,ease:'power3.inOut',clearProps:'clipPath'});
    if(img)tl.fromTo(img,{scale:1.12},{scale:1,duration:1.6,ease:'power3.out',clearProps:'scale'},0)});
  gsap.set('.sobre-foto.rv, .dest.rv',{opacity:1,y:0});
  /* fios que se desenham */
  gsap.utils.toArray('.dossie div, .atu-lista li, .faq details').forEach(function(el,k){el.classList.add('linha-anim');
    ScrollTrigger.create({trigger:el,start:'top 92%',once:true,onEnter:function(){setTimeout(function(){el.classList.add('on')},(k%6)*90)}})});
  /* o resto: só aparece, sem deslizar muito */
  gsap.utils.toArray('.rv').filter(function(e){return !e.closest('.hero')&&e.style.opacity!=='1'}).forEach(function(e){
    gsap.fromTo(e,{opacity:0,y:16},{opacity:1,y:0,duration:.9,ease:'power2.out',scrollTrigger:{trigger:e,start:'top 90%'}})});
  /* tribuna em profundidade: foto e recorte juntos, o símbolo em outra velocidade */
  if(desk){
    gsap.to('.hero-foto img',{yPercent:6,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
    gsap.to('[data-parallax]',{yPercent:10,ease:'none',scrollTrigger:{trigger:'.tribuna',start:'top bottom',end:'bottom top',scrub:true}});
    gsap.fromTo('.tribuna .simbolo',{yPercent:18},{yPercent:-14,ease:'none',scrollTrigger:{trigger:'.tribuna',start:'top bottom',end:'bottom top',scrub:true}});
  }
  gsap.from('.tribuna .simbolo',{opacity:0,duration:1.6,ease:'power2.out',scrollTrigger:{trigger:'.tribuna',start:'top 70%'}});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){ScrollTrigger.refresh()});
  addEventListener('load',function(){ScrollTrigger.refresh()});
})();
