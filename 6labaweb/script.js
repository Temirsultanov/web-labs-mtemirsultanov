var preview = document.querySelector('.preview');
var lineLoad = document.querySelector('.line-load');
var main = document.querySelector('main');
var line = document.querySelector('.line');
var length = line.getTotalLength();
var logo = document.querySelector('.logo');
var smallScreen = document.querySelector('.sosmall');
let hidePreview = function () {
    preview.classList.toggle('hidden');
    lineLoad.classList.toggle('display-none')
    main.classList.toggle('display-none');
}
let onLogoClick = function () {
    preview.classList.toggle('hidden');
    main.classList.toggle('display-none');
}
setTimeout(hidePreview, 6500);
logo.addEventListener('click', onLogoClick);
if (window.innerWidth / window.innerHeight > 2.8 || window.innerHeight <=300) {
    smallScreen.classList.add('sosmallactive');
}
window.addEventListener('resize', function() {
    if (window.innerWidth / window.innerHeight > 2.5 || window.innerHeight <=300) {
        smallScreen.classList.add('sosmallactive');
    }
    else if (smallScreen.classList.contains('sosmallactive')){
        smallScreen.classList.remove('sosmallactive');
    }
})