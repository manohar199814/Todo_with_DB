const express = require('express');
const port = 3000;
const app = express();

//set view engine
app.set('view engine','ejs');
//set views folder
app.set('views','views');

//serve static files
app.use(express.static('./assets'))

app.get('/',(req,res) => {
    res.render('home',{title:'TODO App'})
});

app.post('/',(req,res) => {
    res.redirect('back')
})

app.listen(port,(err) => {
    if(err){
        console.log(err);
    }

    console.log('server started on port 3000')
});

