let express = require('express');
let router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

let locals = { title: 'Message Board - Home', messages: messages }

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', locals);
});

module.exports = router;
