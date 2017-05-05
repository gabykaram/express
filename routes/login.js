var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/', function (req, res, next) {

    res.render('login', {title: 'Welcome'});


});

router.post('/', function (req, res) {
    console.log(req.body);
    const email = req.body.email;
    const pass = req.body.pass;
    const article = req.body.articleId;


    const x = {
        'email': 'gkaramgk94@gmail.com',
        'pass': '123'
    };
    // res.send(email + ' ' + pass + ' ' + article);

    if (email === undefined || pass === undefined || article === undefined) {
        res.redirect('/login');
    } else if (email === x.email && pass === x.pass) {
        res.redirect('/user/' + email + '/' + pass + '/' + article);
    } else {
        res.redirect('/login');
    }
});

module.exports = router;
