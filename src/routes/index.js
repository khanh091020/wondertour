const outTour = require("./clientRoute/our__tour");
const contact = require("./clientRoute/contact");
const sitee = require("./clientRoute/site");
const login = require("./clientRoute/login");
const tourDetails = require("./clientRoute/tourDetail");
const search = require("./clientRoute/search");
const signUp = require("./clientRoute/signUp");
const logout = require("./clientRoute/logout");

const filter = require("./clientRoute/filter");
const blog = require("./clientRoute/blog");
const photographers = require("./clientRoute/photographers");
const sortMidderwares = require("../app/midderwares/checkLoginMiderwares");
const account = require("./clientRoute/account");
const affiliatService = require("./clientRoute/affiliatService");
const order = require("./clientRoute/order");
const authCheckUser = require("../app/midderwares/authCheckUser");
const privateAccountMiddleware = require("../app/midderwares/privateAccountMiddleware");
const partnership = require("./clientRoute/partnerhip");
const authen = require('./authOtherApp')
const adminAuth = require("../app/midderwares/authCheckAdmin");
// web webNhanh
const webnhanh = require("./webnhanh/webnhanh");

// admin
const listAllTour = require("./adminRoute/listAllTour");
const updateTour = require("./adminRoute/updateTour");
const createTour = require("./adminRoute/createTour");
const deleteTour = require("./adminRoute/deleteTour");
const indexadmin = require("./adminRoute/adminIndex");
const bookTour = require("./clientRoute/bookTour");
const adminOrder = require("./adminRoute/orderAdmin");

function route(app) {
  // user link
  app.use("/partnership", partnership);
  app.use("/blog", blog);
  app.use("/auth",authen)
  app.use("/bookTour", bookTour);
  app.use("/search", search);
  app.use("/outTour.html", outTour);
  app.use("/contact.html", contact);
  app.use("/login.html", login);
  app.use("/filter", filter);
  app.use("/log-out", logout);
  app.use("/sign-up.html", signUp);

  app.use("/tours", tourDetails);
  app.use("/photographer", photographers);
  app.use("/account", privateAccountMiddleware, account);
  app.use("/affiliate-service", affiliatService);
  app.use("/api/order", authCheckUser, order);
  // web nhanh
  app.use("/web-nhanh", webnhanh);
  // admin link
  app.use("/admin/api/order",authCheckUser,adminAuth, adminOrder);
  app.use("/admin/createTour",authCheckUser,adminAuth, createTour);
  app.use("/admin/all-list",authCheckUser,adminAuth, listAllTour);
  app.use("/admin/updateTour",authCheckUser,adminAuth, updateTour);
  app.use("/admin/deleteTour",authCheckUser,adminAuth, deleteTour);
  app.use("/admin",authCheckUser,adminAuth, indexadmin);
  // facebook

  // #
  app.use("/index.html", sitee);
  app.use("/", sitee);
}

module.exports = route;
