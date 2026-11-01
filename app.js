/* Victor / My Works — intentionally lightweight, no tracking scripts or UI framework. */
(() => {
  'use strict';
  const archives = [
    {name:'RayzorVerse',desc:'The venture ecosystem',url:'https://rayzorverse.vercel.app/',group:'Websites',tag:'Main site',monogram:'RV'},
    {name:'My Portfolio Website',desc:'Personal portfolio site',url:'https://victoryoung.vercel.app/',group:'Websites',tag:'Portfolio',monogram:'VY'},
    {name:'Portfolio Site Template',desc:'Alternate portfolio concept',url:'https://vyportfolio-nu.vercel.app/',group:'Websites',tag:'Template',monogram:'PT'},
    {name:'BrandiLux',desc:'Branding & creative services',url:'https://brandi-lux.netlify.app/',group:'Brands',tag:'Website',monogram:'BL'},
    {name:'BrandiLux Kit',desc:'Creative kit and asset prototype',url:'https://brandilux-kit.vercel.app/',group:'Brands',tag:'Prototype',monogram:'BK'},
    {name:'Apex Wright Lab',desc:'Writing, research & documentation',url:'https://apex-wright-lab.vercel.app/',group:'Brands',tag:'Website',monogram:'AW'},
    {name:'HexaGuild',desc:'Community and talent initiative',url:'https://hexaguild.vercel.app/',group:'Communities',tag:'Website',monogram:'HG'},
    {name:'HexaGuild Hive',desc:'Community concept',url:'https://hexaguild-hive.vercel.app/',group:'Communities',tag:'Concept',monogram:'HH'},
    {name:'HexaGuild Pitch Deck',desc:'Venture presentation',url:'https://hexaguid-pitchdeck.netlify.app/',group:'Communities',tag:'Pitch deck',monogram:'PD'},
    {name:'Browndilux Commerce',desc:'Sample business landing page',url:'https://browndilux-commerce.vercel.app/',group:'Brands',tag:'Sample',monogram:'BC'},
    {name:'Browndilux Fashion',desc:'Fashion brand landing page',url:'https://browndilux.vercel.app/',group:'Brands',tag:'Landing',monogram:'BF'},
    {name:'Favour Link Stores',desc:'My first business landing page',url:'https://favourlink.netlify.app/',group:'Websites',tag:'Earlier work',monogram:'FL'},
    {name:'Stallbasket',desc:'Business landing page',url:'https://stallbasket.polsia.app/',group:'Websites',tag:'Landing',monogram:'SB'},
    {name:'Haverhills Standard',desc:'Company website for my brother’s ventures',url:'https://haverhills.netlify.app/',group:'Websites',tag:'Website',monogram:'HS'},
    {name:'Kaabo Prototype',desc:'Commerce and delivery product concept',url:'https://kaabotesting.netlify.app/products',group:'Products',tag:'Prototype',monogram:'KB'},
    {name:'Kaabo Launch',desc:'Product launch landing page',url:'https://kaabonglaunch.netlify.app/',group:'Products',tag:'Launch page',monogram:'KL'},
    {name:'Ken AI Detector',desc:'Final-year project application',url:'https://ken-ai-detector.onrender.com/app',group:'Experiments',tag:'Project',monogram:'AI'},
    {name:'Vendra Commerce',desc:'Commerce product concept',url:'https://vendracommerce.netlify.app/',group:'Products',tag:'Prototype',monogram:'VC'},
    {name:'Vendra Social',desc:'Social-commerce product interface',url:'https://vendrasocial.netlify.app/cart',group:'Products',tag:'Prototype',monogram:'VS'},
    {name:'MyDala experiment',desc:'Experimental deployment',url:'https://e926a577.mydala.app',group:'Experiments',tag:'Experiment',monogram:'MD'},
    {name:'Cosine Bus Tracker',desc:'Collaborative student transport demo',url:'https://cosinebt.vercel.app/?welcome=1',group:'Collaborations',tag:'Collaboration',monogram:'CB'}
  ];
  const personal = [
    ['GitHub','https://github.com/victor-young-dev'],
    ['LinkedIn','https://www.linkedin.com/in/victor-uzor-3601343a9'],
    ['X / Twitter','https://x.com/I_amVic_tor'],
    ['Instagram','https://instagram.com/victor_young.tech']
  ];
  const studio = [
    ['Instagram','https://instagram.com/rayzorverse'],
    ['X / Twitter','https://x.com/RayzorVerse'],
    ['Facebook','https://www.facebook.com/share/1DyRpRpePm/'],
    ['TikTok','https://tiktok.com/@rayzorverse'],
    ['YouTube','https://youtube.com/@rayzorverse'],
    ['YouTube Community','https://youtube.com/@rayzorverse/community'],
    ['Google Business','https://share.google/1tHO86zceeUpLuzvw']
  ];
  const services = ['Websites & landing pages','Content & digital storytelling','Video editing & motion','Graphic design','Social media support','Digital workflows','Product prototyping','Research & documentation'];
  const featureConfig = [
    {key:'RayzorVerse',poster:'rayzor',label:'venture ecosystem',mark:'Rayzor<br>Verse',blurb:'A home for ideas, brands and new ventures.'},
    {key:'Cosine Bus Tracker',poster:'cosine',label:'collaborative build',mark:'cosine<br>tracker',blurb:'A campus transport tracking project — built collaboratively.'},
    {key:'BrandiLux',poster:'brandi',label:'creative work',mark:'BrandiLux',blurb:'Brand identities, visual systems and communication.'},
    {key:'Apex Wright Lab',poster:'apex',label:'writing & research',mark:'Apex<br>Wright',blurb:'Writing, documentation and research support.'}
  ];
  const $ = selector => document.querySelector(selector);
  const make = (tag,cls,text) => {const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el};
  const safeHref = href => {if(typeof href!=='string')return null;try{const u=new URL(href,location.href);return ['https:','mailto:'].includes(u.protocol)?u.href:null}catch{return null}};
  const link = (href,cls) => {const a=make('a',cls);a.href=safeHref(href)||'#archive';if(a.href.startsWith('https://')){a.target='_blank';a.rel='noopener noreferrer'}return a};
  let items=archives, currentCategory='All work', currentTerm='', expanded=false;
  let observer;
  function setupObserver(){
    if(observer)observer.disconnect();
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
    observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}},{threshold:.05,rootMargin:'0px 0px -15px 0px'});
    document.querySelectorAll('.reveal-item:not(.is-visible)').forEach(el=>observer.observe(el));
  }
  function renderFeatured(){
    const host=$('#featuredGrid');host.replaceChildren();
    for(const feat of featureConfig){
      const data=items.find(x=>x.name===feat.key)||archives.find(x=>x.name===feat.key);if(!data)continue;
      const a=link(data.url,'featured-card reveal-item');
      const poster=make('div','poster '+feat.poster);
      const caption=make('span','poster-caption',feat.label);poster.append(caption);
      if(feat.poster==='cosine'){
        const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('class','poster-path');svg.setAttribute('viewBox','0 0 220 140');svg.setAttribute('aria-hidden','true');
        const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d','M215 8C158 23 215 65 139 73S90 112 30 133');svg.append(p);poster.append(svg);
      }
      // Creative thumbnails are typographic posters, not fabricated website screenshots.
      const stamp=make('strong','poster-mark');stamp.innerHTML=feat.mark;poster.append(stamp);
      const body=make('div','featured-body');
      const meta=make('div','featured-meta');meta.append(make('span','',data.tag),make('span','','External link'));
      const title=make('h3','',data.name),description=make('p','',feat.blurb);
      const visit=make('div','featured-action');visit.append(make('span','','Explore project'),make('span','','↗'));
      body.append(meta,title,description,visit);a.append(poster,body);host.append(a);
    }
  }
  function renderFilters(){
    const host=$('#categoryFilters');host.replaceChildren();
    const categories=['All work','Websites','Brands','Communities','Products','Experiments','Collaborations'];
    categories.forEach(cat=>{
      const b=make('button','filter'+(cat===currentCategory?' active':''),cat);b.type='button';b.setAttribute('aria-pressed',String(cat===currentCategory));
      b.addEventListener('click',()=>{currentCategory=cat;expanded=false;renderFilters();renderArchive()});host.append(b);
    });
  }
  function archiveCard(data,index){
    const a=link(data.url,'archive-card reveal-item');
    const art=make('span','archive-art theme-'+['a','b','c','d','e','f'][index%6],data.monogram||data.name.slice(0,2));art.setAttribute('aria-hidden','true');
    const copy=make('div','archive-copy');copy.append(make('h3','',data.name),make('p','',data.desc),make('span','status-line',data.tag));
    const arrow=make('span','archive-arrow','↗');arrow.setAttribute('aria-hidden','true');
    a.append(art,copy,arrow);return a;
  }
  function renderArchive(){
    const host=$('#archiveGrid');host.replaceChildren();
    const selected=items.filter(x=>(currentCategory==='All work'||x.group===currentCategory)&&((x.name+' '+x.desc+' '+x.group+' '+x.tag).toLowerCase().includes(currentTerm.toLowerCase())));
    const visible=expanded||currentTerm?selected:selected.slice(0,8);
    visible.forEach((item,i)=>host.append(archiveCard(item,i)));
    $('#resultCount').textContent=`${selected.length} ${selected.length===1?'link':'links'}`;
    $('#archiveEmpty').hidden=selected.length>0;
    const more=$('#showMore');more.hidden=expanded||currentTerm.length>0||selected.length<=8;more.textContent=`Show ${selected.length-8} more links  ↓`;
    setupObserver();
  }
  function renderSocials(hostSelector,list){
    const host=$(hostSelector);host.replaceChildren();
    list.forEach(([label,url])=>{const a=link(url,'social-pill');a.append(make('span','',label),make('span','social-arrow','↗'));host.append(a)});
  }
  function renderSkills(){const host=$('#skills');host.replaceChildren();services.forEach(s=>host.append(make('span','skill',s)))}
  function wireInteractions(){
    $('#year').textContent=new Date().getFullYear();
    $('#searchInput').addEventListener('input',event=>{currentTerm=event.target.value.trim();expanded=false;renderArchive()});
    $('#showMore').addEventListener('click',()=>{expanded=true;renderArchive();});
    $('#resetFilters').addEventListener('click',()=>{currentCategory='All work';currentTerm='';expanded=false;$('#searchInput').value='';renderFilters();renderArchive()});
    $('#shareButton').addEventListener('click',async()=>{
      try{
        if(navigator.share){await navigator.share({title:document.title,url:location.href});return}
        if(navigator.clipboard){await navigator.clipboard.writeText(location.href);showToast('Link copied');return}
      }catch(e){if(e.name==='AbortError')return}
      showToast('Copy the address from your browser');
    });
  }
  let toastTimer;function showToast(message){const t=$('#toast');t.textContent=message;t.hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.hidden=true,2700)}
  async function optionalCMS(){
    const cfg=window.LINKHUB_CMS||{};
    if(!/^[a-z0-9-]{5,20}$/.test(cfg.projectId||''))return;
    const ds=/^[a-z0-9_-]+$/.test(cfg.dataset||'')?cfg.dataset:'production';
    const q='*[_type=="linkHub"]|order(_updatedAt desc)[0]{fullName,alias,role,description,projects[]{title,description,url,category,status,monogram},socialLinks[]{title,url}}';
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),5000);
    try{
      const response=await fetch(`https://${cfg.projectId}.apicdn.sanity.io/v${cfg.apiVersion||'2025-05-01'}/data/query/${ds}?query=${encodeURIComponent(q)}`,{signal:controller.signal});if(!response.ok)return;
      const d=(await response.json()).result;if(!d)return;
      if(d.alias||d.fullName)$('#publicName').textContent=[d.alias,d.fullName].filter(Boolean).join(' / ');
      if(d.description)$('#heroDescription').textContent=d.description;
      if(Array.isArray(d.projects)&&d.projects.length){
        const adapted=d.projects.filter(x=>safeHref(x.url)).map((x,i)=>({name:x.title,desc:x.description||'Project',url:x.url,group:x.category||'Experiments',tag:x.status||'Project',monogram:(x.monogram||x.title||'W').slice(0,3)}));
        if(adapted.length){items=adapted;currentCategory='All work';renderFilters();renderArchive();renderFeatured()}
      }
    }catch(e){}finally{clearTimeout(timer)}
  }
  function init(){
    renderFeatured();renderFilters();renderArchive();renderSocials('#personalLinks',personal);renderSocials('#studioSocials',studio);renderSkills();wireInteractions();optionalCMS();setupObserver();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();