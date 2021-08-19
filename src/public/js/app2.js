// open and close filter 

$( document ).ready(function() {
  AOS.init();
    const currentLocation = location.href;
        const menuItems = document.querySelectorAll('.header__navbar-list-item a');
        for(let i = 0;i<menuItems.length;i++) {
            if(menuItems[i].href === currentLocation) {
            menuItems[i].classList.add('navbar__active');
            }
        }

         function messageObject(sender,message,time) {
          this.sender = sender;
          this.message = message;
          this.time = time;
        }
        var conversation = [];
       
        var socket = io.connect("https://wonderplace.herokuapp.com");
        socket.on("connect", function() {
            console.log("you are connected to chat");
 
            if(localStorage.getItem('conversation'))
            {
              conversation  = (JSON.parse(localStorage.getItem('conversation')))
              for (let item of conversation) {
               loadMessage(item)
              }
              
            }
        })
         
        $('#start_chat').click((e) => {
         
         if($('#fullName').val() === '' || $('#email').val()==='')
          return;
          let data = {
            name : $('#fullName').val(), 
            email : $('#email').val(),
            conversation : conversation
          }
          
          socket.emit("adduser",data );
          
          $('.chat-box').toggleClass('display__none')
          $('.chat-input').toggleClass('display__none')
          $('.msg_card_body').toggleClass('display__none')
         
       })
      
       // notify
      $('.label__livechat').click(function() {
        $('.wrapper').toggleClass('chat_active')
      })      
       
       $('#chat-submit').click(() => {
         let message = $('#chat-input').val()
         $('#chat-input').val('')
         alert(message)
         if(message === "") return;
         socket.emit('sendMessage',message);
       })

       var count_mess = 1;
       socket.on("update_message", (data) => {
         console.log(count_mess);
        loadMessage(data)   
        let newMessage = new messageObject(data.sender,data.message,data.time)
        conversation.push(newMessage)
        localStorage.setItem("conversation",JSON.stringify(conversation))
        socket.emit('update_conversation',conversation)
        let check = $('.wrapper').hasClass('chat_active')
        console.log(check)
        let notify_div = $('.notify_message')
        if(!check) {
             notify_div.html(`<p>${count_mess}</p>`)
             if(notify_div.hasClass('display__none')) notify_div.removeClass('display__none')
             count_mess++
        }
        else {
          count_mess = 1
          if(!notify_div.hasClass('display__none')) notify_div.addClass('display__none')
        }
       
       })

     function loadMessage(data) {
      if(data.sender !== "You") 
      {
       $('.msg_card_body').append(`<div class="d-flex justify-content-start mb-4">
         
       <div class="msg_cotainer">
       <p class='text-muted'>${data.message}</p>
         <span class="msg_time">${data.time}</span>
       </div>
     </div>`)

      }
     
    else 
    {
     $('.msg_card_body').append(`<div class="d-flex justify-content-end mb-4">
     <div class="msg_cotainer_send">
       <p class='text-muted'>${data.message}</p>
       <span class="msg_time_send">${data.time}</span>
     </div>`)
   }
     }
       

     
});
   //refresh animations
   $(window).on('load', function() {
    AOS.refresh();
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
   $("input[name='totalPrice']").val(getNumberFromString($('#totalPrice').text()));
   console.log($("input[name='totalPrice']"))
   $.post( '/api/order', $('#postDataOrder').serialize(), function(res){
      if(res.success === false) {
        alert(res.message)
        return;
      }
      
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
});
  
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
   let button = $(event.relatedTarget) 
   let namePhotographer = button.data('name') 
   let cityPhotographer = button.data('city')
   let modal = $(this)
    modal.find('.modal-boy-child2').html(`
    <h4 class="text-danger">Note !</h4>
    <p class="text-warning">This photographer is only available in ${cityPhotographer}.</p>
    <p class="text-warning">Are you sure to require to book ${namePhotographer} ?</p>`)
   }) 

$('#showSuccessToast').click(function() {
  $('.photo__cus-phone').html('Our staff will call your phome number <b>'+$("#photo__cus-phone-input").val()+'</b> to confirm. Thank you !')
   $("#book__photo-toast").toast('show');
}) 

// change color heart 
$('.contain__icon__heart-product').click(function() {
    $(this).find('.heart__icon').toggleClass('heart__pink')
})


 
  // login form the

  function toggleSignup(){
    document.getElementById("login-toggle").style.backgroundColor="#fff";
     document.getElementById("login-toggle").style.color="#222";
     document.getElementById("signup-toggle").style.backgroundColor="var(--primary_color)";
     document.getElementById("signup-toggle").style.color="#fff";
     document.getElementById("login-form").style.display="none";
     document.getElementById("signup-form").style.display="block";
 }
 
 function toggleLogin(){
     document.getElementById("login-toggle").style.backgroundColor="var(--primary_color)";
     document.getElementById("login-toggle").style.color="#fff";
     document.getElementById("signup-toggle").style.backgroundColor="#fff";
     document.getElementById("signup-toggle").style.color="#222";
     document.getElementById("signup-form").style.display="none";
     document.getElementById("login-form").style.display="block";
 }

 // đa ngôn ngữ
 $(function() {
  // Configuration
  // Add options
  i18n.init({
      resGetPath: '/js/languages/__lng__.json',
      debug: true,
      fallbackLng: false,
      load: 'unspecific'
  },function () {
      $('body').i18n();
  });
 
  $.i18n.setLng('en', function() {
    $('body').i18n();
});

$('.switch').click(function() {
 $(this).toggleClass("active");
if ($('.span').text() == "EN") {
    $('.span').text("VI")
    $.i18n.setLng('vi', function() {
          $('body').i18n();
      });
   
}
  else {
      $('.span').text("EN");
      $.i18n.setLng('en', function() {
          $('body').i18n();
      });
  }
})

});
 

 
 