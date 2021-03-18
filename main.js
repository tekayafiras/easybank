const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('nav');

close.style.display='none';
open.addEventListener('click',function(e){
    nav.style.transform ='translate(0)';
    close.style.display='block';
    open.style.display='none';
    
})
close.addEventListener('click',function(e){
    nav.style.transform ='translateY(-500px)';
    close.style.display='none';
    open.style.display='block';
    
})



