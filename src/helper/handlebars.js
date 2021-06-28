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
         
        

        
     }
