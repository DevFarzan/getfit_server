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

exports.stripeCharge = async function(req, res, next){
  let data = req.body;
  console.log(data,'stripe data');
  
  //console.log(data.name, data.email, data.amount, 'sab k sab')
  try {
    let {status} = await stripe.charges.create({
      amount: Math.round(data.amount*100),
      currency: data.currency,
      description: "An example charge",
      source: data.token
    });
    res.json({status});
  } catch (err) {
    console.log(err,'eeeeerrrrrrrr')
    res.status(500).end();
  }
}