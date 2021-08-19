const account = require("../controllers/models/account");
const { mutipleMongooseTobject } = require("../../util/mongoose");
const order = require("../controllers/models/order");
class adminIndexController {
  show(req, res, err) {
    res.render("adminWiew/adminIndex");
  }
  showUsers(req, res, err) {
    account
      .find({})
      .then((lists) => {
        res.render("adminWiew/adminUserManagement", {
          listAccount: mutipleMongooseTobject(lists),
        });
      })
      .catch(err);
  }
  showAdmin(req, res, err) {
    account
      .find({ admin: true })
      .then((lists) => {
        res.render("adminWiew/adminAccountManagement", {
          listAccount: mutipleMongooseTobject(lists),
        });
      })
      .catch(err);
  }
  showOrderTour(req, res, err) {
    order
      .find({})
      .populate("tourID", ["name", "img", "slug", "startPlace"])
      .sort({ createdAt: "desc" })
      .then((orders) => {
        res.render("adminWiew/listOrderTour", {
          orders: mutipleMongooseTobject(orders),
        });
      })
      .catch(err);
  }
  showPhotographer(req, res, err) {
    res.render("adminWiew/listOrderPhotograp");
  }

  showPartners(req, res, next) {
    res.render("adminWiew/partnerManagemet");
  }
 
  showListHotelOrder(req, res, next) {
    res.render("adminWiew/listHotelOrder");
  }

  // show live chat
  showLiveChat(req, res, next) {
    res.render('adminWiew/adminChat')
  }
 }

module.exports = new adminIndexController();
