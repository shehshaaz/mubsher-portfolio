import React,{useState,useEffect,useRef} from "react";
import {createRoot} from "react-dom/client";
import {ArrowUpRight,ArrowLeft,ArrowRight,Menu,X,Download,Mail,Phone,MapPin,Ruler,Layers3,Lightbulb,Sofa,Expand} from "lucide-react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./styles.css";

const asset = path => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
const projectGroups=[
 {id:"kitchen",name:"Kitchen",index:"01",intro:"A connected kitchen shaped by warm wood, clean surfaces and carefully placed light.",projects:[
  {title:"Warm Modern Kitchen",kind:"Interior visualization",description:"A series of views exploring the kitchen's island, cooking alcove, breakfast counter and cabinetry. Timber accents and dark window frames bring contrast to the quiet, neutral palette.",images:[
   {src:"/work/kitchen-01.jpeg",alt:"Wide view of kitchen cabinetry, breakfast counter and timber floor"},
   {src:"/work/kitchen-02.jpeg",alt:"Kitchen island with timber feature wall and large windows"},
   {src:"/work/kitchen-03.jpeg",alt:"Recessed cooking area with dark hood and light cabinetry"},
   {src:"/work/kitchen-04.png",alt:"Overhead view of kitchen lighting and cabinet arrangement"}]}]},
 {id:"bedroom",name:"Bedroom",index:"02",intro:"A restful residential interior told through texture, proportion and soft lighting.",projects:[
  {title:"Quiet Bedroom",kind:"Interior visualization",description:"Three perspectives of a bedroom with a timber ceiling detail, layered curtains, warm bedside lighting and integrated wardrobe storage.",images:[
   {src:"/work/bedroom-01.png",alt:"Bedroom with neutral bed, curtains and warm feature lighting"},
   {src:"/work/bedroom-02.png",alt:"Front view of bed under timber ceiling feature"},
   {src:"/work/bedroom-03.png",alt:"Wardrobe and storage wall opposite the bed"}]}]},
 {id:"indoor",name:"Indoor",index:"03",intro:"Commercial interiors with a clear identity and a considered customer journey.",projects:[
  {title:"Contemporary Retail Space",kind:"Retail visualization",description:"Two views of a fashion retail concept using open display rails, illuminated shelving and a strong ceiling grid to organize the space.",images:[
   {src:"/work/retail-01.png",alt:"Fashion retail interior with illuminated wall shelves and display rails"},
   {src:"/work/retail-02.png",alt:"Second view of contemporary clothing store and entrance"}]}]},
 {id:"outdoor",name:"Outdoor",index:"04",intro:"Residential architecture viewed from the street and the landscape around it.",projects:[
  {title:"Garden Residence",kind:"Residential exterior",description:"A two-storey residence with broad balcony openings, a sheltered carport and a landscaped forecourt, shown in a soft evening atmosphere.",images:[{src:"/work/exterior-01.jpeg",alt:"Two-storey light-coloured residence with carport and garden"}]},
  {title:"Modern House Approach",kind:"Residential exterior",description:"A street-facing view of a contemporary house, framed by mature trees, a boundary wall and a low, extended roofline.",images:[{src:"/work/exterior-02.jpeg",alt:"Modern house seen beyond boundary wall and landscaped street"}]}]},
 {id:"other-projects",name:"Other Projects",index:"05",intro:"The planning and drawing work behind the visualized spaces.",projects:[
  {title:"SketchUp Residential Study",kind:"Presentation sheets · 2 pages",description:"A residential design study presented through a perspective view, elevations, section and floor plans. The original two-page sheet is available below.",document:"/work/PROJECT-SKETCHUP.pdf",images:[
   {src:"/work/sketchup-sheet-01.png",alt:"SketchUp residential perspective presentation sheet"},
   {src:"/work/sketchup-sheet-02.png",alt:"SketchUp elevations, section and ground and first floor plans"}]},
  {title:"AutoCAD Residential Drawing",kind:"Technical drawing · 1 page",description:"A proposed residential building documented with ground and first floor plans, front elevation, section and a specification table. The drawing notes a total area of approximately 1,974 sq ft.",document:"/work/PROJECT-ACAD-MUBASHER.pdf",images:[
   {src:"/work/autocad-sheet.png",alt:"AutoCAD proposed residential building plans, front elevation and section"}]}]}
];
const services=[
 {icon:Ruler,title:"Space Planning",text:"Residential and commercial layouts, furniture planning and efficient movement through a space."},
 {icon:Layers3,title:"3D Visualization",text:"3D modeling and photorealistic rendering to communicate interior concepts clearly."},
 {icon:Lightbulb,title:"Lighting Design",text:"Lighting design and colour coordination that balance atmosphere, comfort and practicality."},
 {icon:Sofa,title:"Interior Styling",text:"Material specification, custom furniture concepts and sustainable design considerations."}
];
function App(){
 const [open,setOpen]=useState(false);
 const [viewer,setViewer]=useState(null);
 const [activeSection,setActiveSection]=useState("home");
 const lenisRef=useRef(null);

 const go=id=>{
  setOpen(false);
  const el=document.getElementById(id);
  if(!el)return;
  const motion=window.matchMedia("(prefers-reduced-motion: reduce)");
  if(motion.matches){
   el.scrollIntoView();
  }else if(lenisRef.current){
   lenisRef.current.scrollTo(el,{offset:0,duration:1.2,easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t))});
  }else{
   el.scrollIntoView({behavior:"smooth"});
  }
 };

 useEffect(()=>{
  if(viewer){
   lenisRef.current?.stop();
  }else{
   lenisRef.current?.start();
  }
 },[viewer]);

 useEffect(()=>{
  const motion=window.matchMedia("(prefers-reduced-motion: reduce)");
  let lenis=null;
  let rafId=null;

  if(!motion.matches){
   try{
    lenis=new Lenis({
     duration:1.2,
     easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t)),
     smoothWheel:true,
     wheelMultiplier:1.0,
     touchMultiplier:1.4
    });
    lenisRef.current=lenis;

    const raf=time=>{
     lenis.raf(time);
     rafId=requestAnimationFrame(raf);
    };
    rafId=requestAnimationFrame(raf);
   }catch(err){
    console.warn("Lenis init error:",err);
   }
  }

  const handleScroll=()=>{
   const scrollY=window.scrollY||document.documentElement.scrollTop;
   const maxScroll=document.documentElement.scrollHeight-window.innerHeight;
   const progress=maxScroll>0?(scrollY/maxScroll)*100:0;
   const bar=document.getElementById("scroll-progress-bar");
   if(bar){
    bar.style.width=`${progress}%`;
   }

   const sections=["home","about","services","projects","contact"];
   const trigger=scrollY+window.innerHeight*0.35;
   for(const sec of sections){
    const el=document.getElementById(sec);
    if(el){
     const top=el.offsetTop;
     const height=el.offsetHeight;
     if(trigger>=top && trigger<top+height){
      setActiveSection(sec);
      break;
     }
    }
   }
  };

  window.addEventListener("scroll",handleScroll,{passive:true});
  handleScroll();

  const observer=new IntersectionObserver(entries=>{
   entries.forEach(entry=>{
    if(entry.isIntersecting){
     entry.target.classList.add("is-visible");
    }else{
     const rect=entry.boundingClientRect;
     if(rect.top>window.innerHeight+80 || rect.bottom<-80){
      entry.target.classList.remove("is-visible");
     }
    }
   });
  },{threshold:0.08,rootMargin:"0px 0px -30px 0px"});

  const targets=document.querySelectorAll(".reveal-on-scroll, .reveal-scale, .reveal-slide-left, .reveal-slide-right");
  targets.forEach(el=>observer.observe(el));

  return ()=>{
   window.removeEventListener("scroll",handleScroll);
   observer.disconnect();
   if(rafId)cancelAnimationFrame(rafId);
   if(lenis){
    lenis.destroy();
    lenisRef.current=null;
   }
  };
 },[]);

 useEffect(()=>{
  if(!viewer)return;
  const onKey=e=>{if(e.key==="Escape")setViewer(null);if(e.key==="ArrowRight")setViewer(v=>({...v,index:(v.index+1)%v.project.images.length}));if(e.key==="ArrowLeft")setViewer(v=>({...v,index:(v.index-1+v.project.images.length)%v.project.images.length}))};
  document.addEventListener("keydown",onKey);document.body.style.overflow="hidden";
  return ()=>{document.removeEventListener("keydown",onKey);document.body.style.overflow=""};
 },[viewer]);

 return <div className="site">
  <div id="scroll-progress-bar" className="scroll-progress-bar" role="progressbar" aria-label="Page scroll progress"/>
  <header className="nav">
   <button className="brand" onClick={()=>go("home")}>M<span>.</span></button>
   <nav className={open?"nav-links open":"nav-links"}>
    {["home","about","services","projects","contact"].map(item=>(
     <button key={item} className={activeSection===item?"active":""} onClick={()=>go(item)}>{item}</button>
    ))}
   </nav>
   <button className="menu-btn" onClick={()=>setOpen(!open)} aria-label={open?"Close menu":"Open menu"} aria-expanded={open}>{open?<X size={23}/>:<Menu size={23}/>}</button>
  </header>
  <main>
   <section id="home" className="page hero-page">
    <div className="minimal-hero">
     <div className="hero-heading"><p className="hero-kicker">INTERIOR DESIGNER / PORTFOLIO 2026</p><h1>Muhammed<br/><span>Mubasher.</span></h1></div>
     <div className="hero-portrait-stage"><img className="hero-person" src={asset("mubasher-portrait.png")} alt="Muhammed Mubasher" fetchPriority="high" width="1520" height="1034"/></div>
     <div className="hero-note"><span className="hero-label">A CONSIDERED APPROACH</span><p>Spaces with purpose.<br/>Details with character.</p><button onClick={()=>go("projects")}>Selected works <ArrowUpRight size={18}/></button></div>
     <div className="hero-bottom"><span>BASED IN KERALA, INDIA</span><button onClick={()=>go("about")}>SCROLL TO EXPLORE ↓</button><a href={asset("Muhammed-Mubasher-CV.pdf")} download>DOWNLOAD CV <Download size={14}/></a></div>
    </div>
   </section>
   <section id="about" className="page about-page">
    <div className="page-number reveal-slide-left">02</div>
    <div className="about-layout">
     <div className="about-label reveal-on-scroll"><span>ABOUT</span><div className="line"/><small>SPACE · FORM · FUNCTION</small></div>
     <div className="about-copy">
      <p className="eyebrow reveal-on-scroll">INTERIOR DESIGNER · KASARAGOD, KERALA</p>
      <h2 className="reveal-on-scroll">Spaces that<br/><em>feel like you.</em></h2>
      <p className="description reveal-on-scroll reveal-delay-1">I’m Muhammed Mubasher, an interior designer creating functional, visually considered residential and commercial spaces.</p>
      <p className="body-copy reveal-on-scroll reveal-delay-2">My work brings together space planning, furniture selection, colour coordination, material specification and 3D visualization. Creative problem-solving, collaboration and understanding client needs guide my design process.</p>
      <a className="outline-btn cv-download reveal-on-scroll reveal-delay-3" href={asset("Muhammed-Mubasher-CV.pdf")} download="Muhammed-Mubasher-CV.pdf">Download CV <Download size={17}/></a>
      <div className="resume-grid">
       <div className="resume-block reveal-on-scroll"><h3>Design toolkit</h3><ul className="software-tags">{["AutoCAD","SketchUp","3ds Max","Lumion","Adobe Photoshop"].map(tool=><li key={tool}>{tool}</li>)}</ul></div>
       <div className="resume-block reveal-on-scroll reveal-delay-1"><h3>Education</h3><div className="education-item"><strong>Expert Diploma in Interior Design</strong><span>Cadd Centre · Kasaragod, Kerala</span><small>2026</small></div><div className="education-item"><strong>Higher Secondary · Commerce</strong><span>NIOS · Kerala</span><small>2022–2024</small></div><div className="education-item"><strong>SSLC</strong><span>Iqbal Higher Secondary School · Kanhangad, Kerala</span><small>2019</small></div></div>
       <div className="resume-block reveal-on-scroll reveal-delay-2"><h3>Languages</h3><p>English · Malayalam</p></div>
      </div>
     </div>
    </div>
    <div className="side-word reveal-slide-right">DESIGN</div>
   </section>
   <section id="services" className="page services-page">
    <div className="page-number reveal-slide-left">03</div>
    <div className="services-head reveal-on-scroll"><p className="eyebrow">WHAT I DO</p><h2>Designing every<br/><em>detail.</em></h2></div>
    <div className="service-list">
     {services.map(({icon:Icon,title,text},i)=>(
      <div className={`service reveal-on-scroll reveal-delay-${(i%4)+1}`} key={title}>
       <div className="service-icon"><Icon size={20}/></div>
       <div className="service-no">0{i+1}</div>
       <div className="service-main"><h3>{title}</h3><p>{text}</p></div>
       <ArrowUpRight className="service-arrow" size={21}/>
      </div>
     ))}
    </div>
   </section>
   <section id="projects" className="page projects-page">
    <div className="page-top reveal-on-scroll"><div><span className="page-number-inline">04</span><span>SELECTED WORK</span></div><p>Interior spaces, residential exteriors and the drawings behind them.</p></div>
    <div className="works-intro reveal-on-scroll"><h2>Spaces in<br/><em>perspective.</em></h2><p>Explore the details, from the first drawing to the final rendered view.</p></div>
    <nav className="work-categories reveal-on-scroll" aria-label="Project categories">
     {projectGroups.map(g=><a key={g.id} href={`#${g.id}`} onClick={e=>{e.preventDefault();go(g.id);}}>{g.name}<span>{g.index}</span></a>)}
    </nav>
    {projectGroups.map(group=><section className="work-category" id={group.id} key={group.id} aria-labelledby={`${group.id}-title`}>
     <div className="category-heading reveal-on-scroll"><div className="category-kicker"><span>{group.index} / 05</span><span>SELECTED WORK</span></div><h3 id={`${group.id}-title`}>{group.name}<span className="category-dot">.</span></h3><p>{group.intro}</p></div>
     <div className={`category-projects ${group.id}`}>
      {group.projects.map((project,pi)=><article className="work-project" key={project.title}>
       <div className={`work-gallery ${project.images.length===1?"single-image":""}`}>
        {project.images.map((img,i)=><button className={`work-image image-${i+1} reveal-scale`} key={img.src} onClick={()=>setViewer({project,index:i})} aria-label={`Open ${project.title} image ${i+1} of ${project.images.length}`}>
         <img src={asset(img.src)} alt={img.alt} loading="lazy"/><span className="image-expand"><Expand size={17}/> VIEW IMAGE</span><span className="image-count">{String(i+1).padStart(2,"0")} / {String(project.images.length).padStart(2,"0")}</span>
        </button>)}
       </div>
       <div className="work-copy reveal-on-scroll"><div className="work-meta"><span>{String(pi+1).padStart(2,"0")} / {String(group.projects.length).padStart(2,"0")}</span><span>{project.kind}</span></div><h4>{project.title}</h4><p>{project.description}</p><div className="work-actions"><button onClick={()=>setViewer({project,index:0})}>Explore images <ArrowUpRight size={17}/></button>{project.document&&<a href={asset(project.document)} target="_blank" rel="noopener noreferrer">View drawing PDF <ArrowUpRight size={17}/></a>}</div></div>
      </article>)}
     </div>
    </section>)}
   </section>
   <section id="contact" className="page contact-page">
    <div className="page-number reveal-slide-left">05</div>
    <div className="contact-inner">
     <p className="eyebrow reveal-on-scroll">LET'S CREATE SOMETHING</p>
     <h2 className="reveal-on-scroll">Have a space<br/><em>in mind?</em></h2>
     <p className="reveal-on-scroll reveal-delay-1">Let’s turn your idea into a space with a clear identity.</p>
     <a
      className="contact-button reveal-on-scroll reveal-delay-1"
      href="https://wa.me/919633436731?text=Hi%20Mubasher%2C%20I%20would%20like%20to%20start%20a%20conversation."
      target="_blank"
      rel="noopener noreferrer"
     >
      Start a conversation <ArrowUpRight size={18} />
     </a>
     <div className="contact-details reveal-on-scroll reveal-delay-2">
      <a href="mailto:mohammedmubasher111@gmail.com"><Mail size={17}/> mohammedmubasher111@gmail.com</a>
      <a href="tel:+919633436731"><Phone size={17}/> +91 96334 36731</a>
      <span><MapPin size={17}/> Kasaragod, Kerala</span>
      <a href={asset("Muhammed-Mubasher-CV.pdf")} download="Muhammed-Mubasher-CV.pdf"><Download size={18}/> Download CV</a>
     </div>
    </div>
   </section>
  </main>
  <footer className="reveal-on-scroll"><span>© 2026 MUHAMMED MUBASHER</span><span>INTERIOR DESIGN · SPACE PLANNING · 3D VISUALIZATION</span><button onClick={()=>go("home")}>BACK TO TOP ↑</button></footer>
  {viewer&&<div className="viewer" role="dialog" aria-modal="true" aria-label={`${viewer.project.title} image gallery`} onClick={()=>setViewer(null)}>
   <div className="viewer-top"><span>{viewer.project.title}</span><button onClick={()=>setViewer(null)} aria-label="Close gallery"><X size={22}/></button></div>
   <div className="viewer-stage" onClick={e=>e.stopPropagation()}><img src={asset(viewer.project.images[viewer.index].src)} alt={viewer.project.images[viewer.index].alt}/></div>
   <div className="viewer-bottom"><button onClick={e=>{e.stopPropagation();setViewer(v=>({...v,index:(v.index-1+v.project.images.length)%v.project.images.length}))}} aria-label="Previous image"><ArrowLeft size={22}/></button><span>{String(viewer.index+1).padStart(2,"0")} / {String(viewer.project.images.length).padStart(2,"0")}</span><button onClick={e=>{e.stopPropagation();setViewer(v=>({...v,index:(v.index+1)%v.project.images.length}))}} aria-label="Next image"><ArrowRight size={22}/></button></div>
  </div>}
 </div>;
}
createRoot(document.getElementById("root")).render(<App/>);
