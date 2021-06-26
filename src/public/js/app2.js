// open and close filter 

$( document ).ready(function() {
    const currentLocation = location.href;
        const menuItems = document.querySelectorAll('.header__navbar-list-item a');
        for(let i = 0;i<menuItems.length;i++) {
            if(menuItems[i].href === currentLocation) {
            menuItems[i].classList.add('navbar__active');
            }
        }
});

function addNavOnscroll50() {
    const nav = $('.navbar__active');
    nav.css('background-color','rgba(255,255,255,0.95)');
    nav.css('color','#01b3a7');
}

function removeNavOnscroll50() {
    const nav = $('.navbar__active');
    nav.css('background-color','#304559');
    nav.css('color','#fff');
}