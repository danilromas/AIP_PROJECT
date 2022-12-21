var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home_page', function(req, res, next) {
  res.send("<h1>Страница Основная</h1>");
  res.cookie('greeting', 'Hi!!!').render('index', {}
});

/* Обьяснение что это такое */
router.get('/about1', function(req, res, next) {
  res.send("<h1>Обьяснение</h1>");
});

/* GET home page. */
router.get('/characters1', function(req, res, next) {
  res.send("<h1>Персонажи</h1>");
  <p>Счетчик: <%= counter %></p>
});



module.exports = router;
