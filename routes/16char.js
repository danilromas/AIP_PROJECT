var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с char');
});

/* Страница харакетров */
router.get('/:nick', function(req, res, next) {
    char.findOne({nick:req.params.nick}, function(err, char) {
        if (err) return next(err)
        if (!char) return next(new Error ("Нет такой легенды"))
        res.render('char', {
          title: char.title,
          picture: char.avatar,
          desc: char.desc
        })
      })
});

module.exports = router;