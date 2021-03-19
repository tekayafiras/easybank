const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const line1 = document.querySelector('.line-1')
const line2 = document.querySelector('.line-2')
const line3 = document.querySelector('.line-3')


hamburger.addEventListener('click',function(e){
    nav.classList.toggle('down');
    nav.classList.toggle('shadow');
    line1.classList.toggle('rotate1')
    line2.classList.toggle('hide')
    line3.classList.toggle('rotate2')
})

