
const mongoose = require('mongoose');
const exercise = mongoose.model('exercise');
const weight = mongoose.model('weightLog');

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

exports.getAllLogData = function(req,res,next){

    exercise.find(function(err,dataExercise){
        if(err){
            res.send({
                code:404,
                msg:'internal server error',
                content:[]
            })
        }
        else if(dataExercise){
            res.send({
                code:200,
                msg:'All exercise log',
                content:dataExercise
            })
        }
    })
}


exports.weightLog = function(req,res,next){
    
    const userId = req.body.userId;
    const day = req.body.day;
    const month = req.body.month;
    const time = req.body.time;
    const weight = req.body.weight;
    const date = req.body.date;

    const weightLog_info = new weight({
        day:day,
        month:month,
        weight:weight,
        date:date,
        time:time,
        userId:userId
    });
    weightLog_info.save(function(err,dataweight){
        if(err){
            res.send({
                code:404,
                msg:'Internal server error',
                content:[]
            })
        }
        else if(dataweight){
            res.send({
                code:200,
                msg:'weight data inserted',
                content:dataweight
            })
        }
    })
}

exports.getWeightLog = function(req,res,next){
    weight.find(function(err,dataWeight){
        if(err){
            res.send({
                code:404,
                msg:'internal server error',
                content:[]
            })
        }
        else if(dataWeight){
            res.send({
                code:200,
                msg:'All weight data',
                content:dataWeight
            })
        }
    })
}