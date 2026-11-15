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
  if(!window.gsap||reduz){document.querySelectorAll('.rv').forEach(function(e){e.style.opacity=1;e.style.transform='none'});return}
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.hero .rv',{opacity:1,y:0,duration:1.1,ease:'power3.out',stagger:.12,delay:.15});
  gsap.from('.hero-foto img',{opacity:0,y:40,duration:1.4,ease:'power3.out',delay:.1});
  gsap.utils.toArray('.rv').filter(function(e){return !e.closest('.hero')}).forEach(function(e){
    gsap.to(e,{opacity:1,y:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 88%'}});
  });
  if(matchMedia('(min-width:821px)').matches)gsap.to('.hero-foto img',{yPercent:6,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});
  if(matchMedia('(min-width:821px)').matches)gsap.to('[data-parallax]',{yPercent:10,ease:'none',scrollTrigger:{trigger:'.tribuna',start:'top bottom',end:'bottom top',scrub:true}});
  addEventListener('load',function(){ScrollTrigger.refresh()});
})();
