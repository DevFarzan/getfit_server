const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//define models
const exerciseSchema = new Schema({
    userId:{type:String},
    date:{type:String},
    time:{type:String},
    month:{type:String},
    year:{type:String},
    dayOfMonth:{type:String},
    exerciseName:{type:String},
    exerciseAmount:{type:String},
    exerciseUnit:{type:String},
})

//model class
module.exports = mongoose.model('exercise',exerciseSchema);