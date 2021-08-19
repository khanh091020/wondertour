const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const app = express();
const port = 3000;
const db = require('./config/db')
const methodOverride = require('method-override');
const sortMidderwares = require('./app/midderwares/sortMidderwares');
const cookieParser = require('cookie-parser')
const passport = require('passport');
const checkLoginMidleware = require('../src/app/midderwares/checkLoginMiderwares');
const soketIo = require('socket.io');
var sharedsession = require("express-socket.io-session");
 

// connect db
db.connect();
// import route
const routes = require('./routes');

// read data from clienr 
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended : false
}))
// cokies parser 
app.use(cookieParser())
// custom sortMidderwares 
app.use(sortMidderwares);
// sesion
var session = require("express-session")({
  secret: "my-secret",
  resave: true,
  saveUninitialized: true
});
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
// set staic file 
 app.use(express.static(path.join(__dirname,'public')));

// set morgan 
// app.use(morgan('combined'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));





// set handlebars
app.engine('hbs', exphbs({
          extname : '.hbs',
          helpers: require("../src/helper/handlebars"),
          }));

app.set('views', path.join(__dirname, '/resources/wiews'));
app.set('view engine', 'hbs');
app.post('/news',(req,res) => {
  console.log(req.body)
   res.send("Hello " + req.body.search);
});

// function route
app.use(checkLoginMidleware);
routes(app);

// Quyền truy cập 
const cors = require('cors');
const corsOptions ={
    origin:'https://wonderplace.herokuapp.com/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
// port listener 

 var server = app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
 
var io = soketIo(server, {
  cors: {
    origin: '*',
  }
})
io.use(sharedsession(session, {
  autoSave:true
})); 
var ioController = require('./util/soketio')(io);


