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


// admin
const listAllTour = require('./adminRoute/listAllTour');
const updateTour = require('./adminRoute/updateTour');
const createTour = require('./adminRoute/createTour');
const deleteTour = require('./adminRoute/deleteTour');
const indexadmin = require('./adminRoute/adminIndex');
const bookTour = require('./bookTour');

function route(app) {
    // user link 
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
    app.use('/account',account)
    app.use('/affiliate-service',affiliatService)
    // admin link
    app.use('/admin/index',indexadmin);
    app.use('/admin/createTour',createTour);
    app.use('/admin/all-list',listAllTour);
    app.use('/admin/updateTour',updateTour)
    app.use('/admin/deleteTour',deleteTour);
    // #
    app.use('/index.html',sitee);   
    app.use('/',sitee);
   
}

module.exports = route;