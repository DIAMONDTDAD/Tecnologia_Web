const boton=document.querySelector(".boton")
const menu=document.querySelector(".nav-menu")
boton.addEventListener("click",()=>{
menu.classList.toggle(".menu-visible");
});