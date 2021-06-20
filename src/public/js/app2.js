 //  increase number 
// function increaseNumber() {

//     var awards = setInterval(awardsDone, 7)
//     var clients = setInterval(happyClients, 5)
//     var teams = setInterval(cupsCoffee, 7)
//     let count1 = 1;
//     let count2 = 1;
//     let count3 = 1;
//     var x =  document.querySelector(".counter-one");
//     var y = document.querySelector(".counter-two");
//     var z = document.querySelector(".counter-three");
    
    
//     function awardsDone() {
//         if(x==null)
//         return 0;
//         count1++
     
//        x.innerHTML = count1;
      
//         if (count1 == 320) {
//             clearInterval(awards)
//         }
//     }
//     if(x!=null)
//     x.classList.remove('counter-one');
    
//     function happyClients() {
//         if(y==null)
//         return 0;
//         count2++
//         y.innerHTML = count2
//         if (count2 == 500) {
//             clearInterval(clients)
//         }
//     }
//     if(x!=null)
//     y.classList.remove('counter-two');
    
//     function cupsCoffee() {
//         if(z==null)
//         return 0;
//         count3++
//         z.innerHTML = count3
//         if (count3 == 420) {
//             clearInterval(teams)
//         }
//     }
//     if(x!=null)
//     z.classList.remove("counter-three");
// }




// var contentWayPoint = function() {
//     var i = 0;
//     $('.animate-box').waypoint( function( direction ) {

//         if( direction === 'down' && !$(this.element).hasClass('animated') ) {
            
//             i++;

//             $(this.element).addClass('item-animate');
//             setTimeout(function(){

//                 $('body .animate-box.item-animate').each(function(k){
//                     var el = $(this);
//                     setTimeout( function () {
//                         el.addClass('fadeInUp animated');
//                         el.removeClass('item-animate');
//                     },  k * 50, 'easeInOutExpo' );
//                 });
                
//             }, 100);
            
//         }

//     } , { offset: '85%' } );
// };
