const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');


// jika klik maka tambahkan class slide
menuToggle.addEventListener('click',  function() {
    // toggle = tipe checkbox seperti saklar;
    nav.classList.toggle('slide');
    
});