var express     = require('express'),
    app         = express(),
    config      = require('.//config/config'),
   cookieParser = require('cookie-parser');
    bodyParser  = require('body-parser'),
    glob        = require('glob'),
    mongoose    = require('mongoose'),
    server      = app.listen(config.port),
    io          = require('socket.io').listen(server);
require('./app/models/user');
const router = require('./router')




const port = process.env.PORT || 3000;
if (process.stdout._handle) process.stdout._handle.setBlocking(true);
//const app = express();
app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data

router(app);
app.use(cookieParser());
//Connecting database

var configDB = require('./config/database.js');
mongoose.connect(configDB.EvenNodeDB);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database connection failed:'));
db.once('open', function (callback) {
    console.log("Database :: Interview :: connection established successfully.");
});


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});
//Connecting Schemas
// var models = glob.sync(config.root + '/app/models/*.js');
// models.forEach(function (models) {
//     require(models);
// });
//require('./config/passport');

require('./config/express')(app, config);
require('./config/passport');


console.log('Server is running at ' + config.port);
