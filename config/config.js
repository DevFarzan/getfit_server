var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';


 var config = {
    development: {
        root: rootPath,
        app: {
            name: 'mobileServer'
        },
        port: process.env.PORT || 8000,
        secret : "getfitfar3344556698765432",
        EvenNodeDB: 'mongodb://farzan:far@ds019882.mlab.com:19882/interviewquestion'
    },

    test: {
        root: rootPath,
        app: {
            name: 'mobileServer'
        },
        port: process.env.PORT || 8000,
        secret : "getfitfar3344556698765432",
        EvenNodeDB: 'mongodb://farzan:far@ds019882.mlab.com:19882/interviewquestion'
    },

    production: {
        root: rootPath,
        app: {
            name: 'mobileServer'
        },
        port: process.env.PORT || 8000,
        secret : "getfitfar3344556698765432",
        EvenNodeDB: 'mongodb://farzan:far@ds019882.mlab.com:19882/interviewquestion'
    }
};

module.exports = config[env];
