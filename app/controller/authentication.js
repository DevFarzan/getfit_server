const mongoose = require('mongoose')
const jwt = require('jwt-simple');
const User = mongoose.model('user');
//var configDB = require('./config/database.js');
//const moment = require('moment');
const crypto = require('crypto');
const bcrypt = require('bcrypt-nodejs');


//creating token for user or through user.id
function tokenForUser(user){
  console.log(user,'tokennnnnnn')
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp}, 'getfitfar3344556698765432');
}



exports.signup = function(req, res, next){
  console.log('API HIT')
  const email = req.body.email;
  const password = req.body.password;
  const mobileNo = req.body.mobileNo;
  const verified = 'true';
  const name = req.body.name;
  const blocked = 'false';
  console.log(email +''+ password +''+ mobileNo +''+verified);
  if(!email || !password){
      return res.status(422).send({error:'you must provide email and password'})
    }

    //see if a user given email exist show error
        User.findOne({email:email},function(err,existingUser){
          if(err){ return next(err); }
    //if a user with email does exit, return a error
        if(existingUser){
          return res.status(422).send({error:'Email in use'});
        }

        const user = new User({
        email:email,
        password:password,
        mobileNo:mobileNo,
        name:name,
        verified:verified,
        blocked:blocked
      });
      console.log(user,'checkingggggggg');
      user.save(function(err){
        if(err){ return next(err); }
      });
      res.json({
        token:tokenForUser(user),
        _id:user._id,
        code:200
      });
    });
}

exports.getemail = function(req,res,next){
  User.find(function(err,userEmail){
    if(err){
      return res.status(422).send({error:'something went wrong'});
    }
    else if(userEmail){
      const emails = [];
      for(var i=0;i<userEmail.length;i++){
        emails.push(userEmail[i].email)
      }
      res.send({
        code:200,
        msg:'All user emails',
        content:emails
      })
    }
  })
}
exports.signin = function(req, res, next){
  //user has already had their email and password auth'd
  //we just need to give them a token
  console.log('api hit')
  var useremail = req.body.email;
  var password = req.body.password;
  console.log(useremail)
  User.findOne({email:useremail},function(err,user){
    if(user){
      console.log(user,'database user');
      //const user = this;

      bcrypt.compare(password, user.password, function(err, isMatch){
        if(err){ return callback(err); }
        //callback(null, isMatch);
        if(isMatch){
          res.send({
        token: tokenForUser(user),
        _id:user._id,
        email:user.email,
        code:200,
        //username:user.firstName +''+ user.lastName
      });
        }
        else if(!isMatch){
          res.send({
            msg:'password not match',
            Match:isMatch
          })
        }
        //console.log(isMatch);
      })

    }
  })
}
exports.comparePassword = function(req, res, next){
  currentpassword = req.body.password;
  email = req.body.email;
  User.findOne({email:email},function(err,user){
    if(user){
      console.log(user);
      //const user = this;
      bcrypt.compare(currentpassword, user.password, function(err, isMatch){
        if(err){ return callback(err); }
        //callback(null, isMatch);
        if(isMatch){
          res.send({
            msg:'password Match',
            Match:isMatch
          })
        }
        else if(!isMatch){
          res.send({
            msg:'Not Match',
            Match:isMatch
          })
        }
        //console.log(isMatch);
      })
    }
  })
}
