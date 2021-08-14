const express = require('express');
const route = express.Router();
const controller = require('../../app/adminController/createTour');
const multer = require('multer')
const fs = require('fs')
var cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'wonder-place', 
  api_key: '294997753685562', 
  api_secret: '2R5HClFhxlUNLBg5lp9FtV3WHlA',
  secure: true
});

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

  // Delete image only admin can use
route.post('/destroy', (req, res) =>{
  try {
      const {public_id} = req.body;
      if(!public_id) return res.status(400).json({msg: 'No images Selected'})

      cloudinary.v2.uploader.destroy(public_id, async(err, result) =>{
          if(err) throw err;

          res.json({msg: "Deleted Image"})
      })

  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
  
})

  
const removeTmp = (path) =>{
  fs.unlink(path, err=>{
      if(err) throw err;
  })
}

  var upload = multer({ storage: storage,limits : {
    files : 5,
  }, fileFilter: fileFilters})

  function uploadToCloudinary(path) {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload(path,{folder: "image"}, (err, data) => {
        if (err) return reject(err);
        removeTmp(path)
        return resolve(data.secure_url);
      })
    });
  }

route.post('/upload__img-tour',upload.any(),async function(req, res,next) {
   var urls = new Array();
  for (let file of req.files) {
   const data = await uploadToCloudinary(file.path);
   urls.push(data);
  }
  res.send(urls);
})
route.get('/',controller.show);
route.post('/',controller.save)
module.exports = route;



