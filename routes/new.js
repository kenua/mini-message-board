let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    res.render('form', { title: 'Message Board - New message'});
});

module.exports = router;