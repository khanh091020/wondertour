const Handlebars = require('handlebars');
var dateFormat = require("dateformat"); 


module.exports = {
    
        sum : (a,b) => a + b ,
        sortable(field,sort) {
         const sortType = field === sort.column ? sort.type : 'default'
           const icons = {
             default : 'fas fa-sort',
             asc : 'fas fa-sort-amount-down',        
             desc : 'fas fa-sort-amount-up',
           }

           const types = {
             default : 'desc',
             asc : 'desc',
             desc : 'asc',
           }
           const type = types[sortType];
           const icon = icons[sortType];
           const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);
           
            var result =  `<a href="${href}"> <i class="${icon}"></i></a>`
            return new Handlebars.SafeString(result);
         
        
        },

        formatDate(date) {
             return dateFormat(date,"dd/mm/yyyy");
        },

        formatDateDetails(date) {
            return dateFormat(date,"mm/dd/yyyy HH:MM:ss");
        },

        checkUserName(name)
        {
          if(name==='')
          {
            return false
          }
          return true
        },
         pagination(count) {
           
           var endPage = parseInt(count/5);
           if(count%5 != 0) {
             endPage++;
           }
          
           var btn = ` <li> <button class="btn__index" type="button">1</button></li>`;
          if(endPage>1) {
            for(var i = 1;i<endPage;i++) {
            btn = btn + ` <li> <button class="btn__index" type="button">`+(i+1)+`</button></li>`
            }
          }
          return btn;
         },
         
         displayLogin(name)
        {
          if(name!='')
          {
            return `<div class="header__user">
            <i class="fas fa-user"></i>
            <h5 onclick="openClose__UserTool()">Hello ${name} <i class="fas fa-chevron-down"></i></h5>
            <ul class="list__Tool-User">
                <li class="list__Tool-User-item"> <a class="list__Tool-User-link1" href="">Profile</a> </li>
                <li class="list__Tool-User-item"> <a href="">Your tours</a> </li>
                <li class="list__Tool-User-item"> <a href="">Love tour</a> </li>
                <li class="list__Tool-User-item"> <a href=""> Discount code</a></li>
                <li class="list__Tool-User-item"> <a class="list__Tool-User-link-last" href="/log-out"> Log out <i class="fas fa-sign-out-alt"></i></a></li>
            </ul>
        </div>`
          }
          return ` <a href="/login.html" class="btn btn-background-slide mar__left_10rem header__produce-right-signup">
          SIGN UP 
        </a>`
        },

        
     }
