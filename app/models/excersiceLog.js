const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//define models
const exerciseSchema = new Schema({
    mainObj:{type:Object},
    // userId:{type:String},
    // date:{type:String},
    // time:{type:String},
    // month:{type:Number},
    // year:{type:Number},
    // dayOfMonth:{type:Number},
    // exerciseName:{type:Array},
    // exerciseAmount:{type:Object},
    // exerciseUnit:{type:Object},
})

//model class
module.exports = mongoose.model('exercise',exerciseSchema);