var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home_page', function(req, res, next) {
  res.send("<h1>Страница Основная</h1>");
});

/* Обьяснение что это такое */
router.get('/about1', function(req, res, next) {
  res.send("<h1>Обьяснение</h1>");
});

/* GET home page. */
router.get('/characters1', function(req, res, next) {
  res.send("<h1>Персонажи</h1>");
});

router.get('/index', function(req, res, next) { 
 res.render('index', {
          title: "Карамелька", 
          picture: "images/karamelka.jpg",   
          desc: "проверка"
        });
      });

router.get('/about', function(req, res, next) { 
        res.render('about', {
                 title: "Здесь инфа об психологии", 
                 picture: "images/karamelka.jpg",   
                 desc: "проверка"
               });
             });
             
router.get('/characters', function(req, res, next) { 
              res.render('characters16', {
                       title: "о персонажах психологии", 
                       picture: "images/karamelka.jpg",   
                       desc: "проверка"
                     });
                   });

module.exports = router;
