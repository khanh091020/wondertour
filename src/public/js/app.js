  // open close window

  // login
  $( document ).ready(function() {
  
    const modal__login_signUpForm = $('#modal__login-signUpForm')
    $('.header__produce-right-signup').click(function(e) {
        e.preventDefault()
        modal__login_signUpForm.addClass('display__flex')
    })
    
    $('.login__signUp-close').click(function(){
      modal__login_signUpForm.removeClass('display__flex')
    })
   
    
    $("#sendDataLogin").submit(function(e) {
    
        e.preventDefault();
    
        var form = $(this);
        var url = form.attr('action');
        
        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), 
            success: function(data)
            {
                if(data==='false')
                {
                  $('#falseLogin').html('Email or password incorrect !')
                }
           else{
                let link = location.href
                location = link.split('#')[0]
            }
            }   
    
            });
         });
    
         $("#sendDataSignUp").submit(function(e) {
    
            e.preventDefault();
        
            var form = $(this);
            var url = form.attr('action');
            
            $.ajax({
                   type: "POST",
                   url: url,
                   data: form.serialize(), 
                   success: function(data)
                   {
                       $('#checkSignUp').html(data)
                   }
                 });
        
            
        });
        
});
  
  // close login
  
  var onscroll50; 
 // loading webside

var preloader = document.getElementById("loading");
setTimeout(loadingFunction,1500)
function loadingFunction(){
  preloader.style.display = 'none';
};
// function readmore and readless

function readmoreAndLess() {
    var dots = document.getElementById("contain__discover-info-dots");
    var moreText = document.getElementById("contain__discover-info-readmore");
    var readerbtn = document.getElementById("contain__discover-but-readmore");
   
    if(dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        readerbtn.innerHTML = "Read more";
    }

    else   {
        dots.style.display = "none";
        moreText.style.display = "inline";
        moreText.style.opacity = "1";
        readerbtn.innerHTML = "Read less";
    }

}
 
// function read infomation   contain__discover-info-detail-list
  function ButtonABOUTUS() 
  {
    var changetexxt = document.getElementById("contain__discover-info-detail-para");
    var changemoretext = document.getElementById("contain__discover-info-readmore");
    changetexxt.innerHTML = "Wonder place is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders with you";
    changemoretext.innerHTML = ". We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way.";
  }

  function ButtonchosseUs() 
  {
   var changetexxt = document.getElementById("contain__discover-info-detail-para");
    var changemoretext = document.getElementById("contain__discover-info-readmore");
    changetexxt.innerHTML = "We are proud to offer excellent quality and value for money in our tours, which give you the chance to experience your chosen destination in an authentic and exciting way";
    changemoretext.innerHTML = ". Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry";
    
  }

  function ButtonMission() 
  {
    var changetexxt = document.getElementById("contain__discover-info-detail-para");
    var changemoretext = document.getElementById("contain__discover-info-readmore"); 
    changetexxt.innerHTML = "Our mission is to provide the ultimate travel planning experience while becoming a one-stop shop for every travel service available in the industry";
    changemoretext.innerHTML = ". Wonder place is committed to bringing our clients the best in value and quality travel arrangements. We are passionate about travel and sharing the world's wonders with you.";
  }

  
  // hàm sticky navbar 
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  window.onscroll = function() {myFunction()};
  var lists = document.querySelectorAll(".header__navbar-list-item a");
  var listItem = document.querySelectorAll(".header__navbar-social i");
function myFunction() {
  checkontop();

  // open navbar change 
   onscroll50 = document.body.scrollTop > 50 || document.documentElement.scrollTop > 50;
  // alert(onscroll50)
 if (onscroll50) {
  addNavOnscroll50();
   navbar.classList.add("sticky");
   for(var i=0;i<listItem.length;i++) {
    listItem[i].classList.add("text666");
  }
    for(var i=0;i<lists.length;i++) {
      lists[i].classList.add("text666");
    }
  
 } else {
  removeNavOnscroll50();
   navbar.classList.remove("sticky");
   for(var i=0;i<lists.length;i++) {
    lists[i].classList.remove("text666");
  }
  for(var i=0;i<listItem.length;i++) {
    listItem[i].classList.remove("text666");
  }
 
 }

//  close nav

// tour details fix
//  var container__left = document.getElementById("container__left");
//  if(container__left != null) {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("container__left").style.top = '60px';
//    }
//    else {
//     document.getElementById("container__left").style.top = '135px';
//    }
//  }
 /************** */


 
}

//  animation web 


function checkontop () {
  if(document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
  {
   document.getElementById("ontopbro").style.display = "flex";
  }
  else {
   document.getElementById("ontopbro").style.display = "none";
  }
}



// setTimeout(2000,loadingFunction)

// open and close menu
// var counter_click = false;
var icon__menu = $('#menu__navbar-1000')
var menu__navbar = $("#navbar__1000");
    icon__menu.click(() => {
      icon__menu.toggleClass('transform__180')
      menu__navbar.toggleClass('transform__0')
   })
// open and close find tour 

var openFindBut = $(".container__findTour__opencls");
var openClFind = $("#containFindTour");
openFindBut.click(() => {
  openClFind.toggleClass('transform__0')
})


// fuction ontop web 
function ontop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// open close user tools

function openClose__UserTool() {
  $('.list__Tool-User').toggleClass('display__block');
}



