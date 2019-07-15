const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');

var chatMessageSchema = mongoose.Schema({
    RoomID:{type: String, required: true, unique: true },
    InsertedOn:Array,
    chatMessage:Array
});
mongoose.model('chatMessage',chatMessageSchema);
chatMessageSchema.plugin(uniqueValidator,{message:'Error , expected {RoomID} to be unique.'});
