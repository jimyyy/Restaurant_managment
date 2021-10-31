//importation de mongoose
const mongoose= require('mongoose');
//generation dun shema
const platSchema = mongoose.Schema({
    platName:String,
    price:String,
    description:String,
    idchef:String,
    img:String
   



});
//generate model 
const plat=mongoose.model('Plat',platSchema);
//export model

module.exports=plat;