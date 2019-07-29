const Authentication = require('./app/controller/authentication');
const passportService = require('./services/passport');
const admin = require('./app/controller/admin');
const exerciseLog = require('./app/controller/excersiceLog');
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session:false });
const requireSignin = passport.authenticate('local', {session:false});
var cors = require('cors')
module.exports = function(app){

  
  //post routes
//app.post('/signin',requireSignin,  Authentication.signin);
app.post('/signup',Authentication.signup);
app.post('/signin',Authentication.signin);
//get routes
app.get('/getuseremail',Authentication.getemail);
app.post('/postemail',Authentication.forgotpasword);
app.post('/changepassword',Authentication.changePassword);
app.post('/postexerciselog',cors(),exerciseLog.exerciseLogData);


//admin routes
app.get('/getuser',admin.getAllUser);
app.get('/gettrainner',admin.getTrainner);
app.get('/gettrainny',admin.getTrainny);
app.post('/updateuser',cors(),admin.updateUser);

}
