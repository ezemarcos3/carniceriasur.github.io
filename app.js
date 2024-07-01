const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');

document.addEventListener('DOMContentLoaded',()=>{
    eventos();
});

const eventos = () =>{
    menu.addEventListener('click',abrirMenu);
}

const abrirMenu = () =>{
     navegacion.classList.remove('ocultar');
     botonCerrar();
}

const botonCerrar = () =>{
    const btnCerrar = document.createElement('p');
    const overlay  = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');
    navegacion.appendChild(btnCerrar);   
    cerrarMenu(btnCerrar,overlay);
}

const cerrarMenu = (boton,overlay) =>{
    boton.addEventListener('click',()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
    });
    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
    }
}

var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView:3,
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        520:{
            slidesPerView:2,
        },
        950:{
            slidesPerView:3,
        }
    }
});

function E(selector, parent){
    if(selector instanceof HTMLElement)
    return selector;
    return(parent || document).querySelectorAll(selector);
}

function hasClass(element, className){
    return element.classList.contains(className);
}

function radioClass(element, className){
    E("."+className).forEach((elem)=> 
    elem.classList.remove(className));
    element.classList.toggle(className)
}

function tabs(nav){
    let navElem = E(nav)[0];
    navElem.addEventListener("click",(e)=>{
        let target = e.target;
        if(hasClass(target,"tab"))
            radioClass(target,"active");
        let linkedTab = E("."+ target.id)[0];
        radioClass(linkedTab,"visible");
    });
    let active = E(".tab.active")[0];
    if(active){
        radioClass(E("."+ active.id)[0], "visible");
    }
}
function tabs2(nav){
    let navElem = E(nav)[0];
    navElem.addEventListener("click",(e)=>{
        let target = e.target;
        if(hasClass(target,"tab2"))
            radioClass(target,"active2");
        let linkedTab = E("."+ target.id)[0];
        radioClass(linkedTab,"visible");
    });
    let active = E(".tab2.active2")[0];
    if(active){
        radioClass(E("."+ active.id)[0], "visible");
    }
}

tabs(".menu-nav")

let loadMoreBtn1 = document.querySelector("#load-more-1");
let currentItem1 = 4;
loadMoreBtn1.onclick = () =>{
    let boxes = [...document.querySelectorAll('.box-container-1 .box-1')];
    for(var i = currentItem1; i < currentItem1 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem1 += 4;
    if(currentItem1 >= boxes.length){
        loadMoreBtn1.style.display = 'none'
    }
}

let loadMoreBtn2 = document.querySelector("#load-more-2");
let currentItem2 = 4;
loadMoreBtn2.onclick = () =>{
    let boxes = [...document.querySelectorAll('.box-container-2 .box-2')];
    for(var i = currentItem2; i < currentItem2 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem2 += 4;
    if(currentItem2 >= boxes.length){
        loadMoreBtn2.style.display = 'none'
    }
}

let loadMoreBtn3 = document.querySelector("#load-more-3");
let currentItem3 = 4;
loadMoreBtn3.onclick = () =>{
    let boxes = [...document.querySelectorAll('.box-container-3 .box-3')];
    for(var i = currentItem3; i < currentItem3 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem3 += 4;
    if(currentItem3 >= boxes.length){
        loadMoreBtn3.style.display = 'none'
    }
}

let loadMoreBtn7 = document.querySelector("#load-more-7");
let currentItem7 = 4;
loadMoreBtn7.onclick = () =>{
    let boxes = [...document.querySelectorAll('.box-container-7 .box-7')];
    for(var i = currentItem7; i < currentItem7 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem7 += 4;
    if(currentItem7 >= boxes.length){
        loadMoreBtn7.style.display = 'none'
    }
}

let loadMoreBtn9 = document.querySelector("#load-more-9");
let currentItem9= 4;
loadMoreBtn9.onclick = () =>{
    let boxes = [...document.querySelectorAll('.box-container-9 .box-9')];
    for(var i = currentItem9; i < currentItem9 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem9 += 4;
    if(currentItem9 >= boxes.length){
        loadMoreBtn9.style.display = 'none'
    }
}

let loadMoreBtn10 = document.querySelector("#load-more-10");
let currentItem10= 4;
loadMoreBtn10.onclick = () =>{
    let boxes = [...document.querySelectorAll('.box-container-10 .box-10')];
    for(var i = currentItem10; i < currentItem10 + 4; i++){
        boxes[i].style.display = 'inline-block';
    }
    currentItem10 += 4;
    if(currentItem10 >= boxes.length){
        loadMoreBtn10.style.display = 'none'
    }
}