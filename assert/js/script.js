const header = document.querySelector("header");
window.addEventListener("scroll", function (){
    header.classList.toggle("sticky",window.scrollY>100);
});

let menu = document.querySelector('#menuIcon');
let navList = document.querySelector('.navList');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
};