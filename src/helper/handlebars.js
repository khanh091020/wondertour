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
         
        bookTour__childrenPrice(price) {
          return price - (price*20)/100;
        },
        bookTour__totalFisrt(price) {
          return (price - (price*20)/100) + price;
        },
        checkCancelOrder(status,id)
        {
          if(status !== 'canceled')
          return `<a href=""  class="btn btn-danger btn-sm" data-id="${id}"  data-toggle="modal" data-target="#cancelTourModal">Cancel</a>`
          return ''
        },
        checkPaidOrder(ispaid,id) {
          if(ispaid)
          return ''
          return `<a href="/tours/{{this.tourID.slug}}" data-toggle="modal" data-target="#confirmPaymentTour"  data-id="${id}" class="btn btn-success btn-sm">Comfirm paid</a>`
        }
        

        
     }
