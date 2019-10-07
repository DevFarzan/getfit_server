const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//define models
const pedometerSchema = new Schema({
     userId:{type:String},
     time:{type:String},
     date:{type:String},
     stepCount:{type:String},
     dailGoal:{type:String},
})

//model class
module.exports = mongoose.model('pedometer',pedometerSchema);