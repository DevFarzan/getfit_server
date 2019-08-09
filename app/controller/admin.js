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


exports.createAdminUser = function(req, res, next){
  const userObj = req.body;
  User.findOne({email:userObj.email},function(err,existingUser){
    if(err){
      return next(err);
    }
    //if user is exist, return error
    if(existingUser){
      return res.status(422).send({error:'email in use'});
    }
    const user = new User({
      email:userObj.email,
      password:userObj.password,
      mobileNo:userObj.mobileNo,
      name:userObj.name,
      verified:userObj.verified,
      blocked:userObj.blocked,
      type:userObj.type
    });
    user.save(function(err,saveUser){
      if(err){
        return next(err);
      }
      else if(saveUser){
        res.send({
          code:200

        })
      }
    })
  })
  res.send(userObj)
  //console.log(userObj,'admin user object');
}