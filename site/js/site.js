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
    var marca=function(){var x=ol.scrollLeft,m=0,d=1e9;lis.forEach(function(li,k){var dd=Math.abs(li.offsetLeft-ol.offsetLeft-pad()-x);if(dd<d){d=dd;m=k}});[].forEach.call(dots.children,function(b,k){b.setAttribute('aria-current',k===m?'true':'false')});lis.forEach(function(li,k){li.classList.toggle('ativa',k===m)});ol.classList.add('pronto')};
    ol.addEventListener('scroll',marca,{passive:true});marca()}
  var vw=document.querySelector('.valores .wrap');if(vw&&matchMedia('(max-width:820px)').matches&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var cp=vw.innerHTML;vw.insertAdjacentHTML('beforeend','<i></i>'+cp.replace(/<span>/g,'<span aria-hidden="true">')+'<i></i>')}
  var barra=document.querySelector('.barra-ct'),heroEl=document.getElementById('inicio');
  if(barra&&heroEl&&'IntersectionObserver' in window){new IntersectionObserver(function(en){barra.classList.toggle('mostra',!en[0].isIntersecting)},{rootMargin:'-60% 0px 0px 0px'}).observe(heroEl)}else if(barra){barra.classList.add('mostra')}
  var reduz=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var loader=document.getElementById('loader');
  function tiraLoader(){if(loader&&!loader.classList.contains('sai')){loader.classList.add('sai');setTimeout(function(){loader.remove()},800)}}
  if(document.documentElement.classList.contains('sem-loader'))tiraLoader();
  else{var t0=Date.now();var fim=function(){setTimeout(tiraLoader,Math.max(0,1150-(Date.now()-t0)))};if(document.readyState==='complete')fim();else addEventListener('load',fim);setTimeout(tiraLoader,2200)}
  /* chat no canto: aparece depois do topo; no computador a prévia chega com "digitando"; a resposta abre o WhatsApp */
  var ch=document.getElementById('chat'),topoH=document.getElementById('inicio');
  if(ch&&topoH&&'IntersectionObserver' in window&&!matchMedia('(max-width:820px)').matches){
    var janela=ch.querySelector('.chat-janela'),botao=ch.querySelector('.chat-botao'),inp=ch.querySelector('#chat-in');
    var cel=matchMedia('(max-width:820px)'),calmo=matchMedia('(prefers-reduced-motion: reduce)').matches;
    var visto=false;try{visto=!!sessionStorage.getItem('alx-chat')}catch(e){}
    var marca=function(){visto=true;try{sessionStorage.setItem('alx-chat','1')}catch(e){}};
    var chegou=false,perto=new Set(),t1;
    var chega=function(){if(chegou||visto)return;chegou=true;
      if(cel.matches){ch.classList.add('nova');return}
      ch.classList.add('digitando');setTimeout(function(){ch.classList.remove('digitando');ch.classList.add('chegou','nova')},calmo?0:1300)};
    var mostra=function(on){if(on){ch.hidden=false;requestAnimationFrame(function(){requestAnimationFrame(function(){ch.classList.add('on')})});clearTimeout(t1);t1=setTimeout(chega,1200)}
      else if(!ch.classList.contains('aberta')){ch.classList.remove('on');clearTimeout(t1)}};
    new IntersectionObserver(function(en){mostra(!en[0].isIntersecting)},{rootMargin:'-40% 0px 0px 0px'}).observe(topoH);
    var io=new IntersectionObserver(function(en){en.forEach(function(e){e.isIntersecting?perto.add(e.target):perto.delete(e.target)});ch.classList.toggle('prev-fora',perto.size>0)});
    ['.faq-urg','footer'].forEach(function(s){var el=document.querySelector(s);if(el)io.observe(el)});
    var abre=function(on,semFoco){ch.classList.toggle('aberta',on);botao.setAttribute('aria-expanded',on);
      if(on){ch.classList.remove('nova','chegou','digitando');marca();if(!cel.matches)setTimeout(function(){inp.focus({preventScroll:true})},350)}else if(!semFoco)botao.focus({preventScroll:true})};
    document.addEventListener('pointerdown',function(ev){if(ch.classList.contains('aberta')&&!ch.contains(ev.target))abre(false,true)});
    botao.addEventListener('click',function(){abre(!ch.classList.contains('aberta'))});
    ch.querySelector('.chat-prev-corpo').addEventListener('click',function(){abre(true)});
    ch.querySelector('.chat-fecha').addEventListener('click',function(){abre(false)});
    ch.querySelector('.chat-prev-x').addEventListener('click',function(){ch.classList.remove('chegou','digitando');marca()});
    addEventListener('keydown',function(ev){if(ev.key==='Escape'&&ch.classList.contains('aberta'))abre(false)});
    ch.querySelector('.chat-form').addEventListener('submit',function(ev){ev.preventDefault();var m=inp.value.trim();if(!m){inp.focus();return}
      window.open('https://wa.me/5583999881090?text='+encodeURIComponent(m),'_blank','noopener');inp.value=''});
  }
  /* deslize para liberar: arrastar a pílula até o fim dispara o botão; toque e teclado continuam iguais */
  [].forEach.call(document.querySelectorAll('.btn-pilula:not(.btn-pilula-nav)'),function(b){
    var pil=b.querySelector('.pil'),txt=b.querySelector('.pil-txt');if(!pil||!txt)return;
    b.classList.add('desliza');var r=document.createElement('span');r.className='rastro';r.setAttribute('aria-hidden','true');b.insertBefore(r,b.firstChild);
    var x0=0,dx=0,max=0,ativo=false,moveu=false,ignora=false;
    var poe=function(v){pil.style.transform=v?'translateX('+v+'px)':'';r.style.width=v?(pil.offsetWidth+v)+'px':'';txt.style.opacity=v?Math.max(0,1-v/(max*.6)):''};
    pil.addEventListener('pointerdown',function(e){if(e.button>0)return;ativo=true;moveu=false;x0=e.clientX;dx=0;
      max=b.clientWidth-pil.offsetWidth-2*pil.offsetLeft;try{pil.setPointerCapture(e.pointerId)}catch(_){}});
    pil.addEventListener('pointermove',function(e){if(!ativo)return;dx=Math.max(0,Math.min(max,e.clientX-x0));
      if(!moveu&&dx>6){moveu=true;b.classList.add('arrastando')}if(moveu){e.preventDefault();poe(dx)}});
    var solta=function(){if(!ativo)return;ativo=false;b.classList.remove('arrastando');
      if(!moveu)return;ignora=true;setTimeout(function(){ignora=false},60);
      if(dx>=max*.82){b.classList.add('liberado');poe(max);if(navigator.vibrate)navigator.vibrate(12);
        setTimeout(function(){ignora=false;b.click();setTimeout(function(){b.classList.remove('liberado');poe(0)},700)},220)}
      else poe(0)};
    pil.addEventListener('pointerup',solta);pil.addEventListener('pointercancel',function(){ativo=false;b.classList.remove('arrastando');poe(0)});
    b.addEventListener('click',function(e){if(ignora){e.preventDefault();e.stopImmediatePropagation()}},true);
    b.setAttribute('draggable','false');b.addEventListener('dragstart',function(e){e.preventDefault()});
  });
  if(matchMedia('(pointer:coarse)').matches&&'IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
    var dicas=0,iod=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting&&dicas<2){dicas++;e.target.classList.add('dica');iod.unobserve(e.target);setTimeout(function(){e.target.classList.remove('dica')},1800)}})},{rootMargin:'0px 0px -30% 0px'});
    [].forEach.call(document.querySelectorAll('.btn-pilula.desliza'),function(b){iod.observe(b)});
  }
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
  if(!desk){
    gsap.to('[data-parallax]',{yPercent:6,ease:'none',scrollTrigger:{trigger:'.tribuna',start:'top bottom',end:'bottom top',scrub:true}});
    gsap.fromTo('.tribuna .simbolo',{yPercent:10},{yPercent:-10,ease:'none',scrollTrigger:{trigger:'.tribuna',start:'top bottom',end:'bottom top',scrub:true}});
  }
  if(desk){
    gsap.to('.hero-foto img',{yPercent:6,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
    gsap.to('[data-parallax]',{yPercent:10,ease:'none',scrollTrigger:{trigger:'.tribuna',start:'top bottom',end:'bottom top',scrub:true}});
    gsap.fromTo('.tribuna .simbolo',{yPercent:18},{yPercent:-14,ease:'none',scrollTrigger:{trigger:'.tribuna',start:'top bottom',end:'bottom top',scrub:true}});
  }
  gsap.from('.tribuna .simbolo',{opacity:0,duration:1.6,ease:'power2.out',scrollTrigger:{trigger:'.tribuna',start:'top 70%'}});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){ScrollTrigger.refresh()});
  addEventListener('load',function(){ScrollTrigger.refresh()});
})();
