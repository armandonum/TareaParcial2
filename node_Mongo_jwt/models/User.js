const { default: mongoose } = require('mongoose');
const mongose=require('mongoose');


const userSchema=new mongose.Schema({
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true}
});


const User=mongoose.model('User',userSchema);


module.exports=User;