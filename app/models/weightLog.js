const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define models
const weightSchema = new Schema({
    userId:{type:String},
    date:{type:String},
    time:{type:String},
    month:{type:Number},
    weight:{type:String},
    day:{type:String},
    dayOfMonth:{type:Number},
    biceps:{type:String},
    chest:{type:String},
    neck:{type:String},
    shoulder:{type:String},
    thigh:{type:String},
    waist:{type:String},
    year:{type:Number},
})

//model class
module.exports = mongoose.model('weightLog',weightSchema);