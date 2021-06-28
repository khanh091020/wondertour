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
    $('.header__navbar-social a').css('color','#666')
}

function removeNavOnscroll50() {
    const nav = $('.navbar__active');
    nav.css('background-color','#304559');
    nav.css('color','#fff');
    $('.header__navbar-social a').css('color','#fff')
}

//  book tour 

function openListPhotographer() {
    $('.displayListPhotographer').toggleClass('display__block')
 }
 function changeSingerTour() {
    $('#checkBoxSingerTour').prop('checked','checked')
 }
 function cancelSingerTour() {
    $('#checkBoxSingerTour').prop('checked',false)
 }