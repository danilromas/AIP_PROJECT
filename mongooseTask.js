var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var schema = mongoose.Schema({name: String})

schema.methods.phrase = function() {
    console.log(this.get("name") + " поздоровалась.")
}

var charr = mongoose.model('charr', schema)
var about = new charr({name: 'Посредник'})
about.save(function(err)
{
    about.phrase()
})