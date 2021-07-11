const account = require('../controllers/models/account');

class signUpController {
    // get
    index(req,res) {
        res.render('others/createAccount');
    }

    // post
    creatAccount(req,res,next)
    {
        var  email = req.body.email;
        var password = req.body.password;
        var passwordRepeat = req.body.passwordRepeat;
        
         account.findOne({email : new RegExp(`^${email}$`, 'i')})
       .then(accountt => {
           if(accountt != null)
           {
                res.send('<p style="color:red">Email was exist</p>');
           }
           else {
               if(password === passwordRepeat) {
                delete req.body.passwordRepeat;
                res.send('<p style="color:green">Sign up successful ! Back to login</p>');
                account.create(req.body);
               }
               else {
                res.send('<p style="color:red">Password repeat not equals</p>');
               }
           }
       })

    }
}

module.exports = new signUpController;