const mongoose = require('mongoose')
const pedometerModel = mongoose.model('pedometer');


exports.postpedometerdata = function(req,res,next){
    var pedometerData = req.body;
     const pedometerFinalModel = new pedometerModel({
        userId:pedometerData.userId,
        time:pedometerData.time,
        date:pedometerData.date,
        stepCount:pedometerData.stepCount,
        dailGoal:pedometerData.dailGoal,
        dayOfWeek:pedometerData.dayOfWeek,
        year:pedometerData.year,
        month:pedometerData.month
     })
     pedometerFinalModel.save(function(err,successData){
         if(err){
             res.send({
                 code:404,
                 msg:'Something went wrong',
                 content:[]
             })
         }
         else if(successData){
             res.send({
                 code:200,
                 msg:'All pedometer Data posted',
                 content:successData
             })
         }
     })
}


exports.getpedometerdata = function(req,res,next){
    var userId = req.body.userId;
    pedometerModel.find({"userId":userId},function(err,successData){
        if(err){
            res.send({
                code:404,
                msg:'Changing in Server',
                content:[]
            })
        }
        else if(successData){
            res.send({
                code:200,
                msg:'Perticular pedometer Data',
                content:successData
            })
        }
    })
}