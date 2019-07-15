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
