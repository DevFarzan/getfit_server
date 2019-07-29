const exercise = mongoose.model('exercise');

exports.exerciseLogData = function(req, res, next){
const exerciseName = req.body.exerciseName;
const exerciseAmount = req.body.exerciseAmount;
const exerciseUnit = req.body.exerciseUnit;
const date = req.body.date;
const time = req.body.time;
const userId = req.body.userId;

const exerciseLog_info = new exercise({
    exerciseName:exerciseName,
    exerciseAmount:exerciseAmount,
    exerciseUnit:exerciseUnit,
    date:date,
    time:time,
    userId:userId
});
exerciseLog_info.save(function(err,data){
    if(err){
        res.send({
            msg:'not store any data',
            code:404,
            content:[]
        })
    }
    else if(data){
        res.send({
            code:200,
            msg:'exercise detail post',
            content:data
        })
    }
});



}