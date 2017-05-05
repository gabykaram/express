var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/home/:id', function(req, res){
    res.send('users ' + req.params.id);
});
module.exports = router;
