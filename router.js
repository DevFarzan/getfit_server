const Authentication = require('./app/controller/authentication');
const passportService = require('./services/passport');
const admin = require('./app/controller/admin');
const exerciseLog = require('./app/controller/excersiceLog');
const profileData = require('./app/controller/profile');
const bmiPostData = require('./app/controller/bmilogs');
const stripeKeysDev = require('./app/controller/payments');
const cloudinaryProcess = require('./app/controller/cloudinarywidget');
//const macroPost = require('./app/controller/')
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', { session:false });
const requireSignin = passport.authenticate('local', {session:false});
var cors = require('cors')
module.exports = function(app){

  
//post routes
//app.post('/signin',requireSignin,  Authentication.signin);
app.post('/signup', cors(), Authentication.signup);
app.post('/signin', cors(), Authentication.signin);
app.post('/postemail', cors(), Authentication.forgotpasword);
app.post('/changepassword', cors()  ,Authentication.changePassword);
app.post('/postexerciselog', cors() ,exerciseLog.exerciseLogData);
app.post('/weightLog', cors(), exerciseLog.weightPostLog);
app.post('/profile',profileData.userProfilePost);
app.post('/bmilogs', cors(), bmiPostData.bmiLogData);
app.post('/macrodata',exerciseLog.macrosPostCalculater);
app.post('/payment',cors(),stripeKeysDev.stripeCharge);
app.post('/otherpayment', cors(), stripeKeysDev.otherpaymentmethod);
//app.post('/imageupload', cors(), cloudinaryProcess.uploadImage);

//get routes
app.get('/getuseremail',Authentication.getemail);
app.get('/getallexerciselog',exerciseLog.getAllLogData);
app.get('/getweightlog',exerciseLog.getWeightLog);
app.get('/keys',stripeKeysDev.stripeKeys);


//admin routes
app.get('/getuser',admin.getAllUser);
app.get('/gettrainner',admin.getTrainner);
app.get('/gettrainny',admin.getTrainny);
app.post('/updateuser',cors(),admin.updateUser);
app.post('/adminuser', cors(),admin.changeStatusByAdmin);
app.post('/getuserbyemail', cors(), admin.getUserByEmail);
app.get('/getemailadmin', admin.getemailadmin);
app.post('/block', cors(), admin.blockuser);
app.post('/invoice', cors(), admin.invoices);
app.post('/getProfile', cors(),admin.userProfile);
}
