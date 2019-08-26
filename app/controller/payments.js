const keys = require('../../config/keys');
const stripe = require("stripe")(keys.stripeSecretKey);

exports.stripeKeys = function(req, res, next){
    const publicKey = String(keys.stripePulishableKey)
  console.log(publicKey,'with string')
  console.log(keys.stripePulishableKey,'without string')
res.send({
  keys:publicKey
})
}

exports.stripeCharge = function(req, res, next){
  let data = req.body;
  console.log(body,'stripe data');
}