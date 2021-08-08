const express = require('express');
const route = express.Router();
const controller = require('../../app/adminController/createTour');
const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/public/image')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname)
    }
  })

  function fileFilters (req, file, cb) {
    
    if(!file.originalname.match(/\.(jpg|png|gif|jpeg|svg|webp)$/))
    {
        cb(new Error('I don\'t have a clue!'))
        cb(null, false)
    }
    else
    cb(null, true)
  }

  var upload = multer({ storage: storage, fileFilter: fileFilters})

route.post('/upload__img-tour',upload.any(),controller.uploadImg)
route.get('/',controller.show);
route.post('/',controller.save)
module.exports = route;