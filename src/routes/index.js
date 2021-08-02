const outTour = require('./our__tour');
const contact = require('./contact');
const sitee = require('./site');
const login = require('./login');
const tourDetails = require('./tourDetail');
const search = require('./search');
const signUp = require('./signUp');
const logout = require('./logout');
const comment = require('./comment');
const filter = require('./filter');
const blog = require('./blog');
const photographers = require('./photographers');
const sortMidderwares = require('../app/midderwares/checkLoginMiderwares');
const account = require('./account')
const affiliatService = require('./affiliatService')
const order = require('./order')
const priviteOrderMiddleware = require('../app/midderwares/privateOrderMiddleware')
const privateAccountMiddleware = require('../app/midderwares/privateAccountMiddleware')
const partnership = require('./partnerhip')
// web webNhanh
const webnhanh = require('./webnhanh/webnhanh')

// admin
const listAllTour = require('./adminRoute/listAllTour');
const updateTour = require('./adminRoute/updateTour');
const createTour = require('./adminRoute/createTour');
const deleteTour = require('./adminRoute/deleteTour');
const indexadmin = require('./adminRoute/adminIndex');
const bookTour = require('./bookTour');
const adminOrder = require('./adminRoute/orderAdmin');

function route(app) {
    // user link 
    app.use('/partnership',partnership)
    app.use('/blog',blog);
    app.use('/bookTour',bookTour);
    app.use('/search',search);
    app.use('/outTour.html',outTour);
    app.use('/contact.html',contact);
    app.use('/login.html',login);
    app.use('/filter',filter);
    app.use('/log-out',logout);
    app.use('/sign-up.html',signUp);
    app.use('/create-comment',comment);
    app.use('/tours',tourDetails);
    app.use('/photographer',photographers);
    app.use('/account',privateAccountMiddleware,account)
    app.use('/affiliate-service',affiliatService)
    app.use('/api/order',priviteOrderMiddleware,order)
    // web nhanh
    app.use('/web-nhanh',webnhanh)
    // admin link
    app.use('/admin/api/order',adminOrder);
    app.use('/admin/createTour',createTour);
    app.use('/admin/all-list',listAllTour);
    app.use('/admin/updateTour',updateTour)
    app.use('/admin/deleteTour',deleteTour);
    app.use('/admin',indexadmin);
    // #
    app.use('/index.html',sitee);   
    app.use('/',sitee);
   // facebook
   app.use('/redriect',(req,res,next) => {
    res.redirect('https://www.facebook.com/cs.vku.udn.vn/posts/356782236109464');
   })
}

module.exports = route;