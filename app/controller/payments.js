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
  // try {
  //   let {status} = await stripe.charges.create({
  //     amount: data.amount,
  //     currency: data.currency,
  //     description: "An example charge",
  //     source: data.token
  //   });
  //   res.json({status});
  //   stripe.customers.create({
  //     description: 'Customer for'+data.email,
  //     source: data.token // obtained with Stripe.js
  //   }, function(err, customer) {
  //     // asynchronously called
  //     console.log(customer);
  //     console.log(err);
  //   });
  // } catch (err) {
  //   console.log(err,'eeeeerrrrrrrr')
  //   res.status(500).end();
  // }
   stripe.customers.create({
    email: data.email,
    source: data.token
  })
  .then(customer => 
    stripe.charges.create({
      amount: data.amount, // Unit: cents
      currency: data.currency,
      customer: customer.id,
      source: customer.default_source.id,
      description: 'Test payment',
    }))
  .then(charge => res.send({
    code:200,
    amount:charge.amount,
    billing_details:charge.billing_details,
    created:charge.created,
    currency:charge.currency,
    description:charge.description,
    paid:charge.paid,
    status:charge.status
  }))
  .catch(err => {
    console.log("Error:", err);
    res.status(500).send({error: err.code});
  });
}