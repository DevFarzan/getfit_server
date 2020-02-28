const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//define models
const setGoal = new Schema({
     currentWeight:{type:String},
     dob:{type:String},
     heightFit:{type:String}, 
     heightInch:{type:String},
     heightCentimeter:{type:String},
     lose:{type:String},
     gain:{type:String},
     userId:{type:String},
     date:{type:String},
     time:{type:String},
     goalSteps:{type:String},
     fitnessGoal:{type:String},
     dayOfWeek:{type:String},
     year:{type:String},
     month:{type:String}
})

//model class
module.exports = mongoose.model('fitnessGoal',setGoal);