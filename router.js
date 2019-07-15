const Authentication = require('./app/controller/authentication');
const passportService = require('./services/passport')
const admin = require('./app/controller/admin')
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session:false });
const requireSignin = passport.authenticate('local', {session:false});


module.exports = function(app){

  //post routes
//app.post('/signin',requireSignin,  Authentication.signin);
app.post('/signup',Authentication.signup);
app.post('/signin',Authentication.signin);
//get routes
app.get('/getuseremail',Authentication.getemail);
app.post('/postemail',Authentication.forgotpasword);
app.post('/changepassword',Authentication.changePassword);


//admin routes
app.get('/getuser',admin.getAllUser);



}
