window.addEventListener('DOMContentLoaded',()=>{
    const toggleMenuBtn = document.querySelector('.mobileMenuToggle');
    const mobileMenu = document.querySelector('.mobileMenu');
    const testGallery = document.querySelector('#splide');

    toggleMenuBtn.addEventListener('click', handleMobileMenu);

    function handleMobileMenu(e){
        (mobileMenu.classList.contains('hidden')) ? mobileMenu.classList.remove('hidden') : mobileMenu.classList.add('hidden');
    }


})
  
  