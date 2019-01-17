var express = require('express');
var app = express();

var db = require('./Database/database')

app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.static('public'));

app.use(require('./Routes/blog'))

app.get('/',(req,res)=>{
    res.send ('Blog home page')
})





app.listen(3000, ()=>{
    console.log("listening on port 3000 ")
})