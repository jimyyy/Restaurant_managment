
//importation de mongoose
const mongoose= require('mongoose');
//generation dun shema
const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    tel:String,
    role:String,
    speciality:String,
    Experience:Number,
    idAdmin:String,
    message:String,
    date:Date,
    persons:String
    



});
//generate model 
const user=mongoose.model('User',userSchema);
//export model

module.exports=user;