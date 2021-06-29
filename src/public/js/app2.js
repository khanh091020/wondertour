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

 // book photographer
  
 $('#photographerModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var recipient = button.data('name') 
    var modal = $(this)
    modal.find('.modal-boy-child2').html(`
    <h4 class="text-danger">Note !</h4>
    <p class="text-warning">Our photographer is only available in Hanoi, Hue, Danang, Quang Nam and Ho Chi Minh City.</p>
    <p class="text-warning">Are you sure to require to book ${recipient} ?</p>`)
   }) 

$('#showSuccessToast').click(function() {
   $(".toast").toast('show');
}) 
 