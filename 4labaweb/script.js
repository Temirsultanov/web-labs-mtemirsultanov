let version1 = document.querySelector('.version1');
let version2 = document.querySelector('.version2');
let arrow = document.querySelector('.arrow-version');
let commit1 = document.querySelector('.commit1');
let commit2 = document.querySelector('.commit2')
let burgerTop = document.querySelector('.burger-top');
let burgerBottom = document.querySelector('.burger-bottom');
let burger = document.querySelector('.burger');
let menuMobile = document.querySelector('.menu-mobile');
let popup = document.querySelector('.popup-wrapper');
let testButton = document.querySelector('.test-header');
let closePopupButton = document.querySelector('.close');











document.addEventListener('click', function(evt) {
    if (evt.target === popup) {
        document.querySelector('body').classList.toggle('body-oveflow');
        popup.classList.add('popup-hidden');
        document.removeEventListener('keydown', closePopupEsc);
    }
});
let closePopup = function(evt) {
    document.querySelector('body').classList.toggle('body-oveflow');
    popup.classList.add('popup-hidden');
    document.removeEventListener('keydown', closePopupEsc);
}

let closePopupEsc = function(evt) {
    if (evt.keyCode === 27) {
        document.querySelector('body').classList.toggle('body-oveflow');
        popup.classList.add('popup-hidden');
        document.removeEventListener('keydown', closePopupEsc);
    }
}
let onTestClick = function() {
    document.querySelector('body').classList.toggle('body-oveflow');
    popup.classList.remove('popup-hidden');
    document.addEventListener('keydown', closePopupEsc);
    
}
let onBurgerClick = function (evt) {
    evt.preventDefault();
    burgerTop.classList.toggle('burger-top-active');
    burgerBottom.classList.toggle('burger-bottom-active');
    document.querySelector('body').classList.toggle('body-oveflow');
    menuMobile.classList.toggle('transformY0');
}  
let onVersionOneClick = function () {
    version1.classList.add('active');
    version2.classList.remove('active');
    arrow.classList.remove('transform-active-version2');
    commit2.classList.add('commit-none');
    commit1.classList.remove('commit-none');
}
let onVersionTwoClick = function () {
    version1.classList.remove('active');
    version2.classList.add('active');
    arrow.classList.add('transform-active-version2');
    commit2.classList.remove('commit-none');
    commit1.classList.add('commit-none');
}




burger.addEventListener('click', onBurgerClick);
version1.addEventListener('click', onVersionOneClick);
version2.addEventListener('click', onVersionTwoClick);
testButton.addEventListener('click', onTestClick);
closePopupButton.addEventListener('click', closePopup); 
window.addEventListener('resize', function(){
    if (window.innerWidth > 575 && menuMobile.classList.contains('transformY0')) {
        document.querySelector('body').classList.remove('body-oveflow');
    };
    if (window.innerWidth < 575 && menuMobile.classList.contains('transformY0')) {
        document.querySelector('body').classList.add('body-oveflow');
    };
})
