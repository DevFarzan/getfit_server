const chatMessage = mongoose.model('chatMessage');


exports.chatMessageApi = function(req, res, next){

  const chatRoom_info = new ChatRoom({
        RoomID:req.body.userChatName,
        userName:req.body.userChatName,
        InsertedOn:req.body.InsertedOn,
        chatMessage:req.body.chatMessage
    });
    chatRoom_info.save(function(err,data){
        res.send({
            err:err,
            data:data
        });
    });
}
