const mongoose = require('mongoose')
const setGoal = mongoose.model('fitnessGoal');


exports.createGoal = function(req,res,next){
    let fitnessdata = req.body;
    const fitnesGoalModel = new setGoal({
        currentWeight:fitnessdata.currentWeight,
        dob:fitnessdata.dob,
        heightFit:fitnessdata.heightFit, 
        heightInch:fitnessdata.heightInch,
        heightCentimeter:fitnessdata.heightInch,
        lose:fitnessdata.lose,
        gain:fitnessdata.gain,
        userId:fitnessdata.userId,
        date:fitnessdata.date,
        time:fitnessdata.time,
     })
     fitnesGoalModel.save(function(err,successData){
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

exports.getGoal = function(req,res,next){
    let userId = req.body.userId;
    setGoal.find({"userId":userId},function(err,successData){
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

