var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home_page', function(req, res, next) {
  res.render("<h1>Страница Основная</h1>");
});

/* Обьяснение что это такое */
router.get('/about', function(req, res, next) {
  res.render("<h1>Обьяснение</h1>");
});

/* GET home page. */
router.get('/characters', function(req, res, next) {
  res.render("<h1>Персонажи</h1>");
});

module.exports = router;
