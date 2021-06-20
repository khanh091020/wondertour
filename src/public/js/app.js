

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

  var index = document.getElementById("index");
 var about = document.getElementById("about");
 var contact = document.getElementById("contact");
 var ourTour = document.getElementById("ourTour");
  // hàm sticky navbar 
  
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  window.onscroll = function() {myFunction()};
  var lists = document.querySelectorAll(".header__navbar-list-item a");
  var listItem = document.querySelectorAll(".header__navbar-social i");
function myFunction() {
  checkontop();

  // open navbar change 
 if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  
   navbar.classList.add("sticky");
   for(var i=0;i<listItem.length;i++) {
    listItem[i].classList.add("text666");
  }
    for(var i=0;i<lists.length;i++) {
      lists[i].classList.add("text666");
    }
  
 } else {
 
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
 var container__left = document.getElementById("container__left");
 if(container__left != null) {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("container__left").style.top = '60px';
   }
   else {
    document.getElementById("container__left").style.top = '135px';
   }
 }
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

// loading webside

var preloader = document.getElementById("loading");

function loadingFunction(){
  preloader.style.display = 'none';
};

// setTimeout(2000,loadingFunction)

// open and close menu
var counter_click =1;
var menu__navbar = document.getElementById("navbar__1000");
var icon__menu = document.getElementById("menu__navbar-1000");
var back_navbar = document.getElementById('back__navbar-1000');
function openmenu () {
  if(counter_click%2===0)
  {
    menu__navbar.style.animation = "header__navbar-1000-close .4s ease-in";
    icon__menu.classList.toggle("transform__180");
    setTimeout(display__block_menu,300);
  }
  else {
  menu__navbar.style.animation = "header__navbar-1000 .5s linear";
  icon__menu.classList.toggle("transform__180");
   display__block_menu();
  }
  counter_click++;
}

function display__block_menu() {
  menu__navbar.classList.toggle("display__block");
}

// open and close find tour 

var openFindBut = document.querySelector(".container__findTour__opencls");
var openClFind = document.getElementById("containFindTour");
openClFind.style.transform = "translateX(-"+document.getElementById("containFindTour").clientWidth+"px)";
$(document).ready(function(){
  $(window).resize(function(){
    openClFind.style.transform = "translateX(-"+document.getElementById("containFindTour").clientWidth+"px)";
  });
});
var countFind = 0;
function opencloseFind() {
 if(countFind === 0) {
  openClFind.style.transform = "translateX(0px)";
  countFind++;
 }
 else {
  openClFind.style.transform = "translateX(-"+document.getElementById("containFindTour").clientWidth+"px)";
  countFind--;
 }

}

// fuction ontop web 
function ontop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// open close user tools

function openClose__UserTool() {
  $('.list__Tool-User').toggleClass('display__block');
}

