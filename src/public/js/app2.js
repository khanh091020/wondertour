// open and close filter 

$( document ).ready(function() {
  AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  });
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

// home 

  
//  book tour 


      // booktour total price 
 var totalPriceAdult = $('#totalPriceAdult')
 var totalPriceChildren = $('#totalPriceChildren')
 var onePrice = $('#onePrice')
 var totalPrice = $('#totalPrice')

 function openListPhotographer() {
  $('.displayListPhotographer').toggleClass('display__block')
}
function changeSingerTour() {
     totalPrice.html('$' + (getNumberFromString(totalPrice.text())+150));
     $('#checkBoxSingerTour').prop('checked','checked')
}
function cancelSingerTour() {
  totalPrice.html('$' + (getNumberFromString(totalPrice.text()) - 150));
  $('#checkBoxSingerTour').prop('checked',false)
}

 $('#numberAdult').change(function() {
     totalPriceAdult.html('$' + $(this).val()*onePrice.val());  
     totalPrice.html('$' + (getNumberFromString(totalPriceAdult.text())+getNumberFromString(totalPriceChildren.text())));
 })
 
 $('.bookTour__success-close').click(function(){
  $('.first__advantage').removeClass('display__flex')
})
$('#btn__completeBooking').click(function(e) {
   e.preventDefault();
   if($('#checkBoxSingerTour').is(':checked')) {
      $('.bill__singer').html('yes')
      $('.bill__singerTour').addClass('display__flex')
   }
   else {
    $('.bill__singerTour').removeClass('display__flex')
   }
   if($('#check__photographer').is(':checked')) {
      $('.bill__photo').html($('#photographer__value').val())
   }

  

   $('.bill__adult-number').html($('#numberAdult').val())
   $('.bill__adult-price').html($('#totalPriceAdult').text())
   $('.bill__children-number').html($('#numberChildren').val())
   $('.bill__children-price').html($('#totalPriceChildren').text())
   $('.bill__total-price').html($('#totalPrice').text())

   $('.first__advantage').addClass('display__flex')
})
//  close book tour 

 $('#numberChildren').change(function() {
     totalPriceChildren.html('$' + $(this).val() * (onePrice.val()-(onePrice.val()*20/100)));   
     totalPrice.html('$' + (getNumberFromString(totalPriceAdult.text())+getNumberFromString(totalPriceChildren.text())));
 })

 function getNumberFromString(text) {
     var number = text.match(/\d/g);
     number = number.join("");
     return parseFloat(number)
 }

 // book photographer
  
 $('#photographerModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) 
    var namePhotographer = button.data('name') 
    var cityPhotographer = button.data('city')
    var modal = $(this)
    modal.find('.modal-boy-child2').html(`
    <h4 class="text-danger">Note !</h4>
    <p class="text-warning">This photographer is only available in ${cityPhotographer}.</p>
    <p class="text-warning">Are you sure to require to book ${namePhotographer} ?</p>`)
   }) 

$('#showSuccessToast').click(function() {
  $('.photo__cus-phone').html('Our staff will call your phome number <b>'+$("#photo__cus-phone-input").val()+'</b> to confirm. Thank you !')
   $(".toast").toast('show');
}) 

// change color heart 
$('.contain__icon__heart-product').click(function() {
    $(this).find('.heart__icon').toggleClass('heart__pink')
})

// partical js 

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 700
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 0.1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

