document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".mobile-menu");
const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-menu");

function toggleMenu(open){
  menu.classList.toggle("open", open);
  menu.setAttribute("aria-hidden", String(!open));
  document.body.style.overflow = open ? "hidden" : "";
}
openBtn?.addEventListener("click", ()=>toggleMenu(true));
closeBtn?.addEventListener("click", ()=>toggleMenu(false));
menu?.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=>toggleMenu(false)));

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
