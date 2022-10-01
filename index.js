const express = require('express');
const port = 8000;
const bodyParser =  require('body-parser');

const homeRoutes = require('./routes/home');

//mconect to mongoose
const mongoose = require('./config/mongoose');

const app = express();

//set view engine and views folder
app.set('view engine','ejs');
app.set('views','views');

//serve static files
app.use(express.static('./assets'));
//body parser
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',homeRoutes);

app.listen(port,(err) => {
    if(err){
        console.log(err);
    }
    console.log('server started on port 8000')
});

