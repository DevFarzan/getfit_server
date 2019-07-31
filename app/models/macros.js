const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//define models
const macroSchema = new Schema({
    userId:{type:String},
    date:{type:String},
    time:{type:String},
    calculteCalries:{type:String},
    totalDEE:{type:String},
    fatMass:{type:String},
    proteins:{type:String},
    carbohydrates:{type:String},
    dob:{type:String},
    age:{type:String},
    gender:{type:String},
    height:{type:String},
    currentWeight:{type:String},
    goalWeight:{type:String},
    heightUnit:{type:String},
    currentWeightUnit:{type:String},
    goalWeightUnit:{type:String},
    activityLevel:{type:String},
})

//model class
module.exports = mongoose.model('macrocalculater',macroSchema);