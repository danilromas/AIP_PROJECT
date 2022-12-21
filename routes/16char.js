var express = require('express');
var router = express.Router();


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

/* Страница интелекта ////*/
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