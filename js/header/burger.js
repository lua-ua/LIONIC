// burger

let burgerBtn = document.querySelector('#burger');
let headerMenu = document.querySelector('#header-menu');
let headerOverlayMenu = document.querySelector('#header-overlay');
let eclipse = document.querySelector('#wrap-eclipse');
let body = document.querySelector('#body');

let burgerBtnClose = document.querySelector('#burger-close');


burgerBtn.addEventListener ('click', function() {
    headerOverlayMenu.classList.toggle('visible');
    eclipse.classList.toggle('display--block');
    body.classList.toggle('fixed');
});

burgerBtnClose.addEventListener ('click', function() {
    headerOverlayMenu.classList.remove('visible');
    eclipse.classList.remove('display--block');
    body.classList.remove('fixed');
    arrowDown.classList.remove('anim');
    dropdown.classList.remove('visible');
});

eclipse.addEventListener ('click', function() {
    headerOverlayMenu.classList.remove('visible');
    eclipse.classList.remove('display--block');
    body.classList.remove('fixed');
    arrowDown.classList.remove('anim');
    dropdown.classList.remove('visible');
});
