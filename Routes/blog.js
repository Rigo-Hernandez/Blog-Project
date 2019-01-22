var express = require('express');
var router = express.Router();
var db = require('../Database/database');
var bodyParser = require('body-parser');

router.get ('/blog',(req,res)=>{

    db.any('SELECT * FROM blog, author, comments')
    .then((data)=>{
            res.render('blog', {
                blog:data
                
            })
            
    })
    
    });
    

router.use(bodyParser.urlencoded({extended: false}));

router.post('/blog',(req, res)=>{
    var username = req.body.username;
    var post_date = req.body.post_date;
    var comment_body = req.body.comment_body;
    // var imageURL = req.body.img_path;

    // db.none("INSERT INTO comments (username, post_date, comment_body) VALUES($1, $2, $3)", [username, post_date, comment_body])
    // .then((data)=>{
    //     db.any('SELECT * FROM comments')
    //     .then((results)=>{
    //         res.render('blog', {
    //             blog: results
    //         })
    //     })
    // })

    
    
});

router.get('/newblog', (req, res )=>{
    res.render('newblog');
})


module.exports = router;