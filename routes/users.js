var express = require('express');
var router = express.Router();

/* GET users listing. */


router.get('/:id?/:pass?/:article?', function (req, res, next) {

    if ((!req.params.id && req.params.id === undefined ) || ( !req.params.pass && req.params.pass === undefined ) || (!req.params.article && req.params.article === undefined)) {
        console.log('sss');
        console.log(req.params.article);
        res.statusCode = 302;
        res.setHeader("Location", "/login");
        res.end();

    }
    else {
        res.render('index', {title: 'Welcome'});

    }


});

module.exports = router;
