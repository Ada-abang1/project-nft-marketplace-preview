const hambuger = document.querySelector(".hambuger");

const navMenu = document.querySelector(".nav-menu");

hambuger.addEventListener ("click", ()=>{
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", ()=>{
  hambuger.classList.remove("active");
  navMenu.classList.remove("active");
}))

const icon = document.querySelector('.icon');
const search = document.querySelector('.search_bar');
icon.onclick = function(){
  search.classList.toggle('active');
}