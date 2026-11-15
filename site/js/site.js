/* Alex Laurentino Advocacia: menu, carrossel das etapas e animações (GSAP) */
(function(){
  var topo=document.getElementById('topo');
  addEventListener('scroll',function(){topo.classList.toggle('rolou',scrollY>40)},{passive:true});
  var menu=document.getElementById('menu'),bg=document.getElementById('burger');
  function fecha(){menu.classList.remove('aberto');bg.setAttribute('aria-expanded','false');bg.setAttribute('aria-label','Abrir menu')}
  bg.addEventListener('click',function(){var a=menu.classList.toggle('aberto');bg.setAttribute('aria-expanded',a?'true':'false');bg.setAttribute('aria-label',a?'Fechar menu':'Abrir menu')});
  document.querySelectorAll('.menu a').forEach(function(a){a.addEventListener('click',fecha)});
  addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('aberto')){fecha();bg.focus()}});
  /* quatro etapas como padrão de UI: formato pelo endereço (?etapas=a|b|c) */
  var pas=document.querySelector('.passos[data-v]');
  if(pas){var ve=(location.search.match(/[?&]etapas=([abc])/)||[])[1];if(ve)pas.setAttribute('data-v',ve);var vP=pas.getAttribute('data-v');
    var lisP=pas.querySelectorAll('.etapa');
    [].forEach.call(lisP,function(li,k){var d=document.createElement('div');d.className='txt';
      [].slice.call(li.querySelectorAll('h3,p')).forEach(function(n){d.appendChild(n)});li.appendChild(d);
      li.style.setProperty('--k',k);li.setAttribute('data-fls','Fls. 0'+(k+1));if(k===0)li.classList.add('ativa','on');
      if(vP==='b'){var nn=li.querySelector('.etapa-num span');if(nn)nn.textContent='Etapa 0'+(k+1)+' de 04'}});
    if(vP==='b'){var dl=document.createElement('div');dl.className='dial';dl.setAttribute('aria-hidden','true');
      var s='<svg viewBox="0 0 200 200"><defs><linearGradient id="dial-ouro" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#E9DBBE"/><stop offset="1" stop-color="#9C8460"/></linearGradient></defs><circle class="d-base" cx="100" cy="100" r="88"/>';
      for(var a=0;a<60;a++){var an=a*6*Math.PI/180,r1=a%15===0?0:(a%5===0?80:83.5),r2=85;if(r1)s+='<line class="d-tick" x1="'+(100+r1*Math.sin(an)).toFixed(2)+'" y1="'+(100-r1*Math.cos(an)).toFixed(2)+'" x2="'+(100+r2*Math.sin(an)).toFixed(2)+'" y2="'+(100-r2*Math.cos(an)).toFixed(2)+'"/>'}
      s+='<circle class="d-prog" cx="100" cy="100" r="88" pathLength="1"/>';
      for(var q=0;q<4;q++){var aq=q*Math.PI/2,x=100+88*Math.sin(aq),y=100-88*Math.cos(aq),lx=100+101*Math.sin(aq),ly=100-101*Math.cos(aq)+2;
        s+='<rect class="d-no'+(q===0?' on':'')+'" x="'+(x-3.2)+'" y="'+(y-3.2)+'" width="6.4" height="6.4" transform="rotate(45 '+x+' '+y+')"/><text class="d-rot'+(q===0?' on':'')+'" x="'+lx+'" y="'+ly+'" text-anchor="middle">0'+(q+1)+'</text>'}
      dl.innerHTML=s+'</svg><div class="d-centro"><b>01</b><span>de 04</span></div>';pas.querySelector('.wrap').appendChild(dl);
      if(matchMedia('(prefers-reduced-motion: reduce)').matches)pas.classList.add('estatico');
      setTimeout(function(){if(!window.gsap)pas.classList.add('estatico')},1700)}
    if(vP==='c'&&matchMedia('(max-width:820px)').matches){var olC=pas.querySelector('.etapas');olC.addEventListener('scroll',function(){var w=olC.clientWidth;[].forEach.call(lisP,function(l){var r=l.getBoundingClientRect();l.classList.toggle('on',r.left<w*.6&&r.right>w*.2)})},{passive:true})}
    if(vP==='c'&&matchMedia('(prefers-reduced-motion: reduce)').matches)[].forEach.call(lisP,function(l){l.classList.add('on')})}
  var ol=document.querySelector('.etapas'),dots=document.querySelector('.car-dots');
  if(ol&&dots&&!pas){var lis=[].slice.call(ol.children);var pad=function(){return parseFloat(getComputedStyle(ol).paddingLeft)||0};
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
  /* fotos: emergem do escuro, como um fade de cinema, e assentam devagar (leve desfoque só no computador) */
  gsap.utils.toArray('.etapa-foto, .sobre-foto, .dest').filter(function(f){return !(desk&&f.closest('.passos[data-v="c"]'))}).forEach(function(f){var img=f.querySelector('img,.dest-bg');
    var tl=gsap.timeline({scrollTrigger:{trigger:f,start:'top 85%'},defaults:{ease:'power2.out'}});
    tl.fromTo(f,{opacity:0},{opacity:1,duration:1.6},0);
    if(img){tl.fromTo(img,{scale:1.1},{scale:1,duration:2.6,ease:'power3.out',clearProps:'scale'},0);
      if(img.tagName==='IMG')tl.fromTo(img,{filter:desk?'brightness(.3) blur(6px)':'brightness(.3)'},{filter:desk?'brightness(1) blur(0px)':'brightness(1)',duration:2,clearProps:'filter'},0)}});
  gsap.set('.sobre-foto.rv, .dest.rv',{opacity:1,y:0});
  /* fios que se desenham */
  gsap.utils.toArray('.dossie div, .atu-lista li, .faq details').forEach(function(el,k){el.classList.add('linha-anim');
    ScrollTrigger.create({trigger:el,start:'top 92%',once:true,onEnter:function(){setTimeout(function(){el.classList.add('on')},(k%6)*90)}})});
  /* o resto: só aparece, sem deslizar muito */
  gsap.utils.toArray('.rv').filter(function(e){return !e.closest('.hero')&&e.style.opacity!=='1'}).forEach(function(e){
    gsap.fromTo(e,{opacity:0,y:16},{opacity:1,y:0,duration:.9,ease:'power2.out',scrollTrigger:{trigger:e,start:'top 90%'}})});
  /* tribuna em profundidade: foto e recorte juntos, o símbolo em outra velocidade */
  /* etapas: animação de cada formato */
  if(pas&&vP==='a'){[].forEach.call(lisP,function(li,k){var prox=lisP[k+1];if(!prox)return;
    gsap.to(li,{scale:.94,filter:'brightness(.55)',ease:'none',scrollTrigger:{trigger:prox,start:'top 85%',end:'top 30%',scrub:true}})})}
  if(pas&&vP==='b'){var dP=pas.querySelector('.d-prog'),dB=pas.querySelector('.d-centro b'),nos=pas.querySelectorAll('.d-no'),rots=pas.querySelectorAll('.d-rot');
    ScrollTrigger.create({trigger:pas,start:'top top',end:'+=260%',pin:true,scrub:.5,onUpdate:function(s){var p=s.progress;dP.style.strokeDashoffset=(1-Math.min(1,p*1.0)).toFixed(4);
      var k=Math.min(3,Math.floor(p*4*0.999));dB.textContent='0'+(k+1);
      [].forEach.call(lisP,function(l,i){l.classList.toggle('ativa',i===k)});[].forEach.call(nos,function(n,i){n.classList.toggle('on',p>=i/4-.001)});[].forEach.call(rots,function(n,i){n.classList.toggle('on',i===k)})}})}
  if(pas&&vP==='c'&&desk){var trC=pas.querySelector('.etapas'),dist=function(){return Math.max(0,trC.scrollWidth-pas.querySelector('.wrap').clientWidth+40)};
    gsap.to(trC,{x:function(){return -dist()},ease:'none',scrollTrigger:{trigger:pas,start:'top top',end:function(){return '+='+dist()},pin:true,scrub:.6,invalidateOnRefresh:true,
      onUpdate:function(s){var k=Math.round(s.progress*3);[].forEach.call(lisP,function(l,i){l.classList.toggle('on',i<=k)})}}})}
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
