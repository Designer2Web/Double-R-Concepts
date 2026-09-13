document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.querySelector(".mobile-menu"),openBtn=document.querySelector(".menu-btn"),closeBtn=document.querySelector(".close-menu");
function setMenu(open){menu.classList.toggle("open",open);menu.setAttribute("aria-hidden",String(!open));openBtn.setAttribute("aria-expanded",String(open));document.body.style.overflow=open?"hidden":""}
openBtn.addEventListener("click",()=>setMenu(true));closeBtn.addEventListener("click",()=>setMenu(false));
menu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));