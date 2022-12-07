var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')
var char = require("./models/legend.js").char
var legend = new char({
    title: "Активист",
    nick: "Active"
})
console.log(char)
char.save(function(err, char, affected){
    console.log(char.title)
})