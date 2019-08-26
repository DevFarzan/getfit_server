const User = mongoose.model('user');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jwt-simple');
//creating token for user or through user.id
function tokenForUser(user){
  console.log(user,'tokennnnnnn')
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp}, 'getfitfar3344556698765432');
}
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
  User.find({"type":"trainee"},function(err, trainnyData){
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
  //res.send({he:'heloo'})
}


exports.createAdminUser = function(req, res, next){
  const userObj = req.body;
 console.log(userObj)
 User.updateOne(
  {"_id":userObj.id},
  {$set: profileObj},
  {multi:true}
).then((response) => {
  res.send({
      code:200,
      msg:'profile data updated successfully',
      content:profileObj
  });
}).catch(() => res.status(422).send({msg:'okay'}));
}

exports.getUserByEmail = function(req, res, next){
  const specificEmail = req.body.email;
  //console.log(specificEmail);
  User.find({"email":specificEmail},function(err,specificUser){
    if(err){
      res.send({
        code:404,
        msg:'Not get any user',
        content:[]
      })
    }
    else if(specificUser){
      res.send({
        code:200,
        msg:'data for' +''+specificEmail,
        content:specificUser
      })
    }
  })
}

exports.getemailadmin = function(req,res,next){
  User.find(function(err,userEmail){
    if(err){
      return res.status(422).send({error:'something went wrong'});
    }
    else if(userEmail){
      const emails = [];
      for(var i=0;i<userEmail.length;i++){
        emails.push({
          Email:userEmail[i].email,
          id:userEmail[i]._id
        })
      }
      res.send({
        code:200,
        msg:'All user emails',
        content:emails
      })
    }
  })
}