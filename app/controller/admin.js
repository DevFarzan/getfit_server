const User = mongoose.model('user');


exports.getAllUser = function(req, res, next){
    User.find(function(err, users){
      if(err){
        res.send({
          code:404,
          msg:'no user Found'
        })
      }
      else if(users){
        res.send({
          code:200,
          msg:'All getfit users',
          content:users
        })
      }
    })
}

exports.getTrainner = function(req, res, next){
  User.find({"type":"trainner"},function(err,trainnerData){
    if(err){
      res.send({
        code:404,
        msg:'trainner not found',
        content:[]
      })
    }
    else if(trainnerData){
      res.send({
        code:200,
        msg:'All trainner',
        content:trainnerData
      })
    }
  })
}

exports.getTrainny = function(req, res, next){
  User.find({"type":"trainny"},function(err, trainnyData){
    if(err){
      res.send({
        code:404,
        msg:'trainy not found',
        content:[]
      })
    }
    else if(trainnyData){
      res.send({
        code:200,
        msg:'All trainnies',
        content:trainnyData
      })
    }
  })
}

exports.updateUser = function (req, res, next){
  console.log(req.body)
  const trainnerName = req.body.trainnerName;
  const trainnyName  = req.body.trainnyName;
  const trainnerId = req.body.trainnerId;
  const trainnyId = req.body.trainnyId;
  console.log(trainnerName,+''+trainnyName,+''+trainnerId,+''+trainnyId);
  res.send({he:'heloo'})
}
