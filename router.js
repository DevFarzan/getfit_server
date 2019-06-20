const Authentication = require('./app/controller/authentication');
const passportService = require('./services/passport')
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session:false });
const requireSignin = passport.authenticate('local', {session:false});


module.exports = function(app){

  //post routes
//app.post('/signin',requireSignin,  Authentication.signin);
app.post('/signup',Authentication.signup);

//get routes
app.get('/getuseremail',Authentication.getemail);
}
