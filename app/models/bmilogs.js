const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define models
const bmiSchema = new Schema({
    userId:{type:String},
    height:{type:String},
    weight:{type:String},
    heightUnit:{type:String},
    weightUnit:{type:String},
    bmi:{type:String},
    date:{type:String},
    time:{type:String},
})

//model class
module.exports = mongoose.model('bmilogs',bmiSchema);