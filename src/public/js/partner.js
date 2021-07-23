$( document ).ready(function() {
    for(let i = 1; i <18;i++) {
     document.querySelector('#Policy__age-free').innerHTML += `<option value="${i}">${i} ages</option>`
   }
   });



let fileInput = document.getElementById('fileInput');
let fileInput2 = document.getElementById('fileInput2')
let fileInput3 = document.getElementById('fileInput3')

fileInput.addEventListener('change',addImage);
function addImage(e) {
  let fileDisplayArea = $(`#${e.target.name}`);
   let file = fileInput.files[0];
   let imageType = /image.*/;

   if (file.type.match(imageType)) {
       let reader = new FileReader();

       reader.onload = function(e) {
           //fileDisplayArea.innerHTML = "";

           let img = new Image();
           img.src = reader.result;

           fileDisplayArea.prepend(` <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                 <div class="fileDisplayArea__item">
                      <img src="${img.src}" alt="">
                 </div>
             </div>`);
       }

       reader.readAsDataURL(file);	
   } else {
       alert('File is not support')
   }
}

fileInput2.addEventListener('change',addImage2);
function addImage2(e) {
  let fileDisplayArea = $(`#${e.target.name}`);
   let file = fileInput2.files[0];
   let imageType = /image.*/;

   if (file.type.match(imageType)) {
       let reader = new FileReader();

       reader.onload = function(e) {
           //fileDisplayArea.innerHTML = "";

           let img = new Image();
           img.src = reader.result;

           fileDisplayArea.prepend(` <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                 <div class="fileDisplayArea__item">
                      <img src="${img.src}" alt="">
                 </div>
             </div>`);
       }

       reader.readAsDataURL(file);	
   } else {
       alert('File is not support')
   }
}

fileInput3.addEventListener('change',addImage3);
function addImage3(e) {
 
  let fileDisplayArea = $(`#${e.target.name}`);
   let file = fileInput3.files[0];
   let imageType = /image.*/;

   if (file.type.match(imageType)) {
       let reader = new FileReader();

       reader.onload = function(e) {
           //fileDisplayArea.innerHTML = "";

           let img = new Image();
           img.src = reader.result;

           fileDisplayArea.prepend(` <div class="col-sm-6 col-md-4 col-lg-3 mb-4">
                 <div class="fileDisplayArea__item">
                      <img src="${img.src}" alt="">
                 </div>
             </div>`);
       }

       reader.readAsDataURL(file);	
   } else {
       alert('File is not support')
   }
}



