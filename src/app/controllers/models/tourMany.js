const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
var mongoose_delete = require('mongoose-delete');

const Tours = new Schema({
    _id : Number,
    name : {type : String},
    img : {type :String},
    price : {type :Number},
    saleOff : {type :Number},
    description : {type :String},
    startDay : {type : Date},
    slug: { type: String, slug: 'name', slug_padding_size: 4,  unique: true },
    countLeft : Number,
    video_id : String,
    img1 : String,
    img2 : String,
    img3 : String,
    img4 : String,
    img5 : String,
    startPlace : String,
    time : String,
    cityDestination : String
}, { 
    _id : false
});
Tours.plugin(AutoIncrement);

Tours.plugin(mongoose_delete,
     { 
         deletedAt : true,
         overrideMethods: 'all',
    });
// helper sortable
Tours.query.sortable = function (req) {
         const type = ['desc','asc'].includes( req.query.type);
         if(req.query.hasOwnProperty('_sort')) {
        return  this.sort({[req.query.column] : type  ?  req.query.type : 'desc'})
        }
    return this;
}

module.exports = mongoose.model('Tours', Tours);
