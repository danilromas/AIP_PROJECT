var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test')

var charr = mongoose.model('charr', {name: String})
var about = new charr({name: 'Посредник'})
Wraith.save(function(err)
{
    if(err) {
        console.log(err)
    }
    else {
        console.log('16 типов личностей')
    }
})