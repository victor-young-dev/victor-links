/* Victor Link Hub: accessible static fallback; optional Sanity public-dataset content. */
const portrait='https://raw.githubusercontent.com/victor-young-dev/victor-young-portfolio/main/public/portrait.png';
const cv='https://raw.githubusercontent.com/victor-young-dev/victor-young-portfolio/main/public/cv.pdf';
const fallback={
 fullName:'Victor Uzor',alias:'Victor Young',
 role:'Creative technologist · Product-minded builder',
 description:'I turn ideas into useful websites, content and digital workflows. Explore some of my work, or get in touch.',
 avatarUrl:portrait,
 primaryLinks:[
  {title:'Explore my work',subtitle:'Selected projects and collaborations',url:'#work',featured:true},
  {title:'View my CV',subtitle:'Experience, education and skills',url:cv},
  {title:'Work with me',subtitle:'Project work and opportunities',url:'mailto:rayzorverse@gmail.com?subject=Work%20with%20Victor'}
 ],
 projects:[
  {title:'RayzorVerse',description:'Founder-led venture studio · Website',url:'https://rayzorverse.vercel.app/'},
  {title:'Cosine Bus Tracker',description:'Collaborative project · Demo',url:'https://cosinebt.vercel.app/?welcome=1'},
  {title:'Vendra',description:'Social commerce · In development',url:'https://github.com/victor-young-dev/vendra2.0'},
  {title:'Kaabo',description:'Marketplace · Prototype',url:'https://github.com/victor-young-dev/kaabo'}
 ],
 socialLinks:[
  {title:'GitHub',url:'https://github.com/victor-young-dev'},
  {title:'LinkedIn',url:'https://www.linkedin.com/in/victor-uzor-3601343a9'},
  {title:'X',url:'https://x.com/I_amVic_tor'}
 ],ventureUrl:'https://rayzorverse.vercel.app/',ventureEmail:'rayzorverse@gmail.com'
};
const el=(id)=>document.getElementById(id);
function safeLink(value){
 if(typeof value!=='string')return null;
 if(/^#[a-z0-9-]+$/i.test(value))return value;
 try{const u=new URL(value);return ['https:','mailto:'].includes(u.protocol)?u.href:null}catch{return null}
}
function setDest(a,url){
 a.href=url;
 if(url.startsWith('https://')){a.target='_blank';a.rel='noopener noreferrer'}
}
function render(data){
 const d={...fallback,...data};
 el('name').textContent=d.fullName||fallback.fullName;
 el('alias').textContent=(d.alias||fallback.alias).toUpperCase();
 el('role').textContent=d.role||fallback.role;
 el('bio').textContent=d.description||fallback.description;
 if(safeLink(d.avatarUrl)?.startsWith('https://'))el('avatar').src=d.avatarUrl;
 const top=el('top-links');top.replaceChildren();
 (Array.isArray(d.primaryLinks)?d.primaryLinks:fallback.primaryLinks).filter(x=>safeLink(x.url)).slice(0,5).forEach(x=>{
  const a=document.createElement('a');a.className='action'+(x.featured?' action-dark':'');setDest(a,safeLink(x.url));
  const wrapper=document.createElement('span'),t=document.createElement('strong'),s=document.createElement('small');
  t.textContent=x.title||'Open link';s.textContent=x.subtitle||'';wrapper.append(t,s);
  const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='→';a.append(wrapper,arrow);top.append(a)
 });
 const work=el('projects');work.replaceChildren();
 (Array.isArray(d.projects)?d.projects:fallback.projects).filter(x=>safeLink(x.url)).slice(0,12).forEach((x,i)=>{
  const a=document.createElement('a');a.className='project';setDest(a,safeLink(x.url));
  const n=document.createElement('span');n.className='project-count';n.textContent=String(i+1).padStart(2,'0');
  const copy=document.createElement('span');copy.className='project-copy';const title=document.createElement('strong'),sub=document.createElement('small');
  title.textContent=x.title||'Project';sub.textContent=x.description||'';copy.append(title,sub);
  const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';a.append(n,copy,arrow);work.append(a)
 });
 const socials=el('social-links');socials.replaceChildren();
 (Array.isArray(d.socialLinks)?d.socialLinks:fallback.socialLinks).filter(x=>safeLink(x.url)).slice(0,12).forEach(x=>{
  const a=document.createElement('a');setDest(a,safeLink(x.url));a.textContent=(x.title||'Link')+' ↗';socials.append(a)
 });
 const email=(d.ventureEmail||fallback.ventureEmail).trim();
 if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))document.querySelector('.studio-cta').href='mailto:'+encodeURIComponent(email)+'?subject=RayzorVerse%20Project%20Enquiry';
 if(safeLink(d.ventureUrl)?.startsWith('https://'))document.querySelector('.footer a').href=d.ventureUrl;
}
async function readCMS(){
 const cfg=window.LINKHUB_CMS||{};
 if(!/^[a-z0-9-]{5,20}$/.test(cfg.projectId||''))return null;
 const dataset=/^[a-z0-9_-]+$/.test(cfg.dataset||'')?cfg.dataset:'production';
 const query='*[_type == "linkHub"] | order(_updatedAt desc)[0]{fullName,alias,role,description,"avatarUrl":avatar.asset->url,primaryLinks[]{title,subtitle,url,featured},projects[]{title,description,url},socialLinks[]{title,url},ventureUrl,ventureEmail}';
 const url='https://'+cfg.projectId+'.apicdn.sanity.io/v'+(cfg.apiVersion||'2025-05-01')+'/data/query/'+dataset+'?query='+encodeURIComponent(query);
 const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),4500);
 try{const response=await fetch(url,{signal:controller.signal});if(!response.ok)return null;return (await response.json()).result||null}
 catch{return null}finally{clearTimeout(timeout)}
}
el('year').textContent=String(new Date().getFullYear());render(fallback);
readCMS().then(data=>{if(data)render(data)});
el('share').addEventListener('click',async()=>{
 const url=location.href;try{
  if(navigator.share){await navigator.share({title:document.title,url});return}
  if(navigator.clipboard){await navigator.clipboard.writeText(url);flash('Link copied');return}
 }catch(e){if(e.name==='AbortError')return}
 flash('Copy the page address to share')
});
let hide;function flash(msg){const e=el('toast');e.textContent=msg;e.hidden=false;clearTimeout(hide);hide=setTimeout(()=>e.hidden=true,2500)}
