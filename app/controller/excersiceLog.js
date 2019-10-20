
const mongoose = require('mongoose');
const exercise = mongoose.model('exercise');
const weightdata = mongoose.model('weightLog');
const macros = mongoose.model('macrocalculater');

exports.exerciseLogData = function(req, res, next){
    
 const exerciseName = req.body.exerciseName;
 const exerciseAmount = req.body.exerciseAmount;
 const exerciseUnit = req.body.exerciseUnit;
const date = req.body.date;
const time = req.body.time;
const userId = req.body.userId;
const month = req.body.month;
const year = req.body.year;
const dayOfMonth =req.body.dayOfMonth;

const exerciseLog_info = new exercise({
    exerciseName:exerciseName,
    exerciseAmount:exerciseAmount,
    exerciseUnit:exerciseUnit,
    date:date,
    time:time,
    month:month,
    year:year,
    dayOfMonth:dayOfMonth,
    userId:userId
});
exerciseLog_info.save(function(err,data){
    if(err){
        res.send({
            msg:'Not store any data',
            code:404,
            content:[]
        })
    }
    else if(data){
        res.send({
            code:200,
            msg:'Exercise detail post',
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


exports.weightPostLog = function(req,res,next){
    
    
    const userId = req.body.userId;
    const day = req.body.day;
    const month = req.body.month;
    const time = req.body.time;
    const weight = req.body.weight;
    const date = req.body.date;
    const dayOfMonth = req.body.dayOfMonth;
    const biceps = req.body.biceps;
    const chest = req.body.chest;
    const neck = req.body.neck;
    const shoulder = req.body.shoulder;
    const thigh = req.body.thigh;
    const waist = req.body.waist;
    const year = req.body.year;
    const dayOfWeek = req.body.dayOfWeek;

    //console.log(userId,+''+day)
    const weightLog_info = new weightdata({
        day:day,
        month:month,
        weight:weight,
        date:date,
        time:time,
        userId:userId,
        dayOfMonth:dayOfMonth,
        biceps:biceps,
        chest:chest,
        neck:neck,
        shoulder:shoulder,
        thigh:thigh,
        waist:waist,
        year:year,
        dayOfWeek:dayOfWeek
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
    weightdata.find(function(err,dataWeight){
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

exports.macrosPostCalculater = function(req, res, next){
    
    const userId = req.body.userId;
    const date = req.body.date;
    const time = req.body.time;
    const calculteCalries = req.body.calculteCalries;
    const totalDEE = req.body.totalDEE;
    const fatMass = req.body.fatMass;
    const proteins = req.body.proteins;
    const carbohydrates = req.body.carbohydrates;
    const dob = req.body.dob;
    const age = req.body.age;
    const gender = req.body.gender;
    const height = req.body.height;
    const currentWeight = req.body.currentWeight;
    const goalWeight = req.body.goalWeight;
    const heightUnit = req.body.heightUnit
    const currentWeightUnit = req.body.currentWeightUnit
    const goalWeightUnit = req.body.goalWeightUnit;
    const  activityLevel = req.body.activityLevel;

    const macroCalculate_info = new macros({
        userId:userId,
        date:date,
        time:time,
        calculteCalries:calculteCalries,
        totalDEE:totalDEE,
        fatMass:fatMass,
        proteins:proteins,
        carbohydrates:carbohydrates,
        dob:dob,
        age:age,
        gender:gender,
        height:height,
        currentWeight:currentWeight,
        goalWeight:goalWeight,
        heightUnit:heightUnit,
        currentWeightUnit:currentWeightUnit,
        goalWeightUnit:goalWeightUnit,
        activityLevel:activityLevel
    })
    macroCalculate_info.save(function(err,datamacro){
        if(err){
            res.send({
                code:404,
                msg:'internal server error',
                content:[]
            })
        }
        else if(datamacro){
            res.send({
                code:200,
                msg:'Macro data inserted successfully',
                content:datamacro
            })
        }
    })
}

exports.getmacros = function(req,res,next){
    let userId = req.body.userId;
    macros.find({"userId":userId},function(err,dataMacros){
        if(err){
            res.send({
                code:404,
                msg:'Something went wrong'
            })
        }
        else if(dataMacros){
            res.send({
                code:200,
                msg:'Specific Macros',
                content:dataMacros
            })
        }
    })
}