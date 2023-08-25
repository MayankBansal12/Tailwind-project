const navBar=document.getElementById("nav-bar");
const menu=document.getElementById("nav-menu");

navBar.addEventListener("click",()=>{
    menu.classList.toggle("flex");
    menu.classList.toggle("hidden");
})