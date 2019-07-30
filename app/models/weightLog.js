const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//define models
const weightSchema = new Schema({
    userId:{type:String},
    date:{type:String},
    time:{type:String},
    month:{type:String},
    weight:{type:String},
    day:{type:String},
})

//model class
module.exports = mongoose.model('weightLog',weightSchema);