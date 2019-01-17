var express = require('express');
var router = express.Router();
var db = require('../Database/database');
var bodyParser = require('body-parser');

router.get ('/blog',(req,res)=>{

    db.any('SELECT * FROM blog')
    .then((data)=>{
            res.render('blog', {
                blog:data
                
            })
            
    })
    });

router.use(bodyParser.urlencoded({extended: false}));

router.post('/blog',(req, res)=>{
    var title = req.body.title;
    var body = req.body;
    var author = req.body.author.fname;
    var bio = req.body.bio;
    var imageURL = req.body.image;
})

module.exports = router;