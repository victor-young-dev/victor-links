
/* v5 enhancements: semantic profile highlights, real screenshot thumbnails, optional GPU lines. */
(()=>{'use strict';
const $=s=>document.querySelector(s);
const ST=[
 ['Instagram','◎','ig','https://instagram.com/rayzorverse'],
 ['TikTok','♪','tiktok','https://tiktok.com/@rayzorverse'],
 ['YouTube','▶','youtube','https://youtube.com/@rayzorverse'],
 ['LinkedIn','in','linkedin','https://www.linkedin.com/in/victor-uzor-3601343a9'],
 ['GitHub','⌘','github','https://github.com/victor-young-dev'],
 ['X','𝕏','x','https://x.com/RayzorVerse']
];
const screenshots={
 'RayzorVerse':'https://raw.githubusercontent.com/victor-young-dev/RayzorVerse.site/main/docs/screenshots/homepage-desktop.jpg',
 'Cosine Bus Tracker':'https://image.thum.io/get/noanimate/width/700/crop/760/allowJPG/https://cosinebt.vercel.app/',
 'BrandiLux':'https://image.thum.io/get/noanimate/width/700/crop/760/allowJPG/https://brandi-lux.netlify.app/',
 'Apex Wright Lab':'https://image.thum.io/get/noanimate/width/700/crop/760/allowJPG/https://apex-wright-lab.vercel.app/'
};
function el(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n}
function hero(){
 const h=$('.hero');if(!h)return;
 const before=h.querySelector('.hero-topline');before.innerHTML='<span class="kicker">WORKS · LINKS · PEOPLE</span><span class="hero-available"><i class="online-signal" aria-hidden="true"></i>Open to selected work</span>';
 const body=h.querySelector('.hero-body');
 body.innerHTML='<div class="hero-photo"><img id="portrait" src="/assets/victor-uzor.webp" alt="Portrait of Victor Uzor" width="105" height="105"></div><div class="hero-words"><p class="hero-name" id="publicName">Victor Young / Victor Uzor</p><p class="hero-handle">Founder of RayzorVerse · Creative technology &amp; ideas</p><h1 id="hero-title">A little home for <em>everything I make.</em></h1><p class="hero-description" id="heroDescription">Projects, experiments, creative work and the people behind them. Pick a highlight, explore a build or say hello.</p><div class="profile-actions"><a class="profile-action primary" href="#featured">Explore work ↗</a><a class="profile-action secondary" href="/assets/Victor-Uzor-CV.pdf" target="_blank" rel="noopener">View my CV ↓</a></div></div>';
 const story=el('nav','story-wrap');story.setAttribute('aria-label','Social highlights');
 const head=el('div','story-heading');head.append(el('strong','', 'Stay connected'),el('span','','Social highlights'));
 const list=el('div','story-highlights');
 for(const [name,symbol,brand,url] of ST){
  const a=el('a','story-link');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.setAttribute('aria-label','Open '+name);
  const ring=el('span','story-ring '+brand);ring.append(el('span','story-core',symbol));
  a.append(ring,el('span','story-name',name));list.append(a);
 }
 story.append(head,list);h.insertBefore(story,h.querySelector('.hero-footer'));
 const footer=h.querySelector('.hero-identity');if(footer)footer.textContent='Selected work, organized for real people.';
 const gpu=el('canvas','hero-webgl');gpu.id='heroWebGL';gpu.setAttribute('aria-hidden','true');h.insertBefore(gpu,h.firstChild);
}
function theme(){
 const box=$('.topbar-tools');if(!box)return;
 const b=el('button','theme-toggle');b.id='themeToggle';b.type='button';
 const ico=el('span','theme-icon'),label=el('span','theme-label');b.append(ico,label);
 box.insertBefore(b,$('#shareButton'));
 const update=()=>{const dark=document.documentElement.dataset.theme==='dark';ico.textContent=dark?'☾':'☀';label.textContent=dark?'Dark':'Light';b.setAttribute('aria-pressed',String(dark));b.setAttribute('aria-label','Switch to '+(dark?'light':'dark')+' theme');const meta=$('meta[name="theme-color"]');if(meta)meta.content=dark?'#0d121a':'#f4f6f9'};
 b.addEventListener('click',()=>{document.documentElement.dataset.theme=document.documentElement.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('vy-theme',document.documentElement.dataset.theme)}catch(e){}update()});update();
}
function enhanceCards(){
 document.querySelectorAll('.featured-card').forEach(card=>{
  const name=card.querySelector('.featured-body h3')?.textContent;
  const poster=card.querySelector('.poster');if(!poster||!name||!screenshots[name]||poster.dataset.capture==='yes')return;
  poster.dataset.capture='yes';
  const fallback=poster.querySelector('.poster-mark');if(fallback)fallback.textContent=name;
  const img=el('img','poster-image');img.src=screenshots[name];img.alt='Preview image for '+name;img.loading='lazy';img.decoding='async';
  img.addEventListener('load',()=>{if(img.naturalWidth>180)poster.classList.add('has-photo')});
  img.addEventListener('error',()=>img.remove());
  poster.append(img);
 });
}
function addTilt(){
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!window.matchMedia('(pointer:fine)').matches)return;
 const grid=$('#featuredGrid');if(!grid)return;
 grid.addEventListener('pointermove',e=>{const c=e.target.closest('.featured-card');if(!c)return;const r=c.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.setProperty('--rx',(-y*2.8)+'deg');c.style.setProperty('--ry',(x*2.8)+'deg')});
 grid.addEventListener('pointerout',e=>{const c=e.target.closest('.featured-card');if(c&&!c.contains(e.relatedTarget)){c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')}});
}
function gpuLines(){
 const canvas=$('#heroWebGL');if(!canvas||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const gl=canvas.getContext('webgl',{alpha:true,antialias:false,powerPreference:'low-power'});if(!gl)return;
 const shader=(kind,source)=>{const sh=gl.createShader(kind);gl.shaderSource(sh,source);gl.compileShader(sh);return gl.getShaderParameter(sh,gl.COMPILE_STATUS)?sh:null};
 const vert=shader(gl.VERTEX_SHADER,'attribute vec2 pos;varying vec2 uv;void main(){uv=pos*.5+.5;gl_Position=vec4(pos,0.,1.);}');
 const frag=shader(gl.FRAGMENT_SHADER,'precision mediump float;varying vec2 uv;uniform float t;uniform float aspect;void main(){float a=0.;vec2 p=uv;p.x*=aspect;for(int i=0;i<5;i++){float k=float(i);float y=.16+k*.14+sin(p.x*3.6+t*.24+k*.9)*.018;a+=.0035/(abs(p.y-y)+.012);}vec3 c=mix(vec3(.24,.43,.78),vec3(.68,.35,.84),uv.x);gl_FragColor=vec4(c,clamp(a*.23,0.,.16));}');
 if(!vert||!frag)return;const pr=gl.createProgram();gl.attachShader(pr,vert);gl.attachShader(pr,frag);gl.linkProgram(pr);if(!gl.getProgramParameter(pr,gl.LINK_STATUS))return;
 const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
 gl.useProgram(pr);const pos=gl.getAttribLocation(pr,'pos');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
 const t=gl.getUniformLocation(pr,'t'),ratio=gl.getUniformLocation(pr,'aspect');let active=false,raf=0,previous=0;
 const resize=()=>{const rect=canvas.getBoundingClientRect();const scale=Math.min(window.devicePixelRatio||1,1.35);canvas.width=Math.max(1,Math.round(rect.width*scale));canvas.height=Math.max(1,Math.round(rect.height*scale));gl.viewport(0,0,canvas.width,canvas.height)};
 const draw=ms=>{raf=0;if(!active||document.hidden)return;if(ms-previous<32){raf=requestAnimationFrame(draw);return}previous=ms;gl.uniform1f(t,ms/1000);gl.uniform1f(ratio,canvas.width/canvas.height);gl.drawArrays(gl.TRIANGLES,0,6);raf=requestAnimationFrame(draw)};
 const observer=new IntersectionObserver(entries=>{active=entries[0].isIntersecting;if(active&&!raf){resize();raf=requestAnimationFrame(draw)}else if(!active&&raf){cancelAnimationFrame(raf);raf=0}});observer.observe(canvas);window.addEventListener('resize',resize,{passive:true});document.addEventListener('visibilitychange',()=>{if(!document.hidden&&active&&!raf)raf=requestAnimationFrame(draw)});resize();
}
function init(){theme();hero();enhanceCards();addTilt();gpuLines();const grid=$('#featuredGrid');if(grid){const observer=new MutationObserver(enhanceCards);observer.observe(grid,{childList:true})}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
