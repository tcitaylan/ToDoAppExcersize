var {mongoose} = require('../db/mongoose');

var user = mongoose.model('Users',{
    name: {
        type:String,
        required: true,
        minglenth: 1,
        trim:true
    },
    email: {
        type:String,
        required:true,
        minlength:1,
        trim:true
    }
});

module.exports = {user};