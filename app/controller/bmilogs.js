const mongoose = require('mongoose');
const bmidetail = mongoose.model('bmilogs');


exports.bmiLogData = function(req, res, next){

    const userId = req.body.userId;
    const height = req.body.height;
    const weight = req.body.weight;
    const heightUnit = req.body.heightUnit;
    const weightUnit = req.body.weightUnit;
    const bmi = req.body.bmi;
    const date = req.body.date;
    const time = req.body.time;

    const bmilog_info = bmidetail({
        userId:userId,
        height:height,
        weight:weight,
        heightUnit:heightUnit,
        weightUnit:weightUnit,
        bmi:bmi,
        date:date,
        time:time
    })

    bmilog_info.save(function(err,bmilogData){
        if(err){
            res.send({
                code:404,
                msg:'internal server error',
                content:[]
            })
        }
        else if(bmilogData){
            res.send({
                code:200,
                msg:'bmi data saved successfully',
                content:bmilogData
            })
        }
    })
}

