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

/* GET new message page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'Message Board - New message'});
});

/* Save message. */
router.post('/new', function(req, res, next) {
  let { username, message } = req.body;
  let newMessage = {
    user: username,
    text: message,
    added: new Date(),
  };

  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
