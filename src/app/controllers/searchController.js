const tours = require("../controllers/models/tourMany");
const { mutipleMongooseTobject } = require("../../util/mongoose");
class searchController {
  // get
  show(req, res, err) {
    const search = req.query.search;
    const isDate = req.query.fromDate != "";

    Promise.all([
      tours
        .find({
          $or: [
            { name: new RegExp(search, "i") },
            { cityDestination: new RegExp(search, "i") },
          ],
          startDay: { $gte: isDate ? req.query.fromDate : "01/01/1000" },
        })
        .sort({ startDay: "asc" })
        .limit(5),
      tours
        .countDocuments({
          $or: [
            { name: new RegExp(search, "i") },
            { cityDestination: new RegExp(search, "i") },
          ],
          startDay: { $gte: isDate ? req.query.fromDate : "01/01/1000" },
        })
        .sort({ startDay: "asc" }),
    ])

      .then(([tours, count]) => {
        res.render("tour/tourGrid", {
          listSearch: mutipleMongooseTobject(tours),
          count: count,
        });
      })
      .catch(err);
  }

  showFlight(req, res, next) {
    res.render("flight/searchFlight");
  }

  showHotel(req, res, next) {
      res.render("hotel/searchHotel")
  }
}

module.exports = new searchController();
