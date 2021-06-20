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
var session = require('express-session');
const checkLoginMidleware = require('../src/app/midderwares/checkLoginMiderwares');

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
app.use(checkLoginMidleware);
app.use(sortMidderwares);
// sesion

// set staic file 
 app.use(express.static(path.join(__dirname,'public')));

// set morgan 
app.use(morgan('combined'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));




// set handlebars
app.engine('hbs', exphbs({
          extname : '.hbs',
          helpers: require("../src/helper/handlebars"),
          }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\wiews'));

app.post('/news',(req,res) => {
  console.log(req.body)
   res.send("Hello " + req.body.search);
});

// function route
routes(app);
// port listener 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})