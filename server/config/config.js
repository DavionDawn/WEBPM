var settings = require('../../settings.js');
var logConfigOptions = {
    logDirectory: settings.logDirectory,
    fileNamePattern: settings.fileNamePattern,
    dateFormat: settings.dateFormat
};
module.exports =
    {
        //database config
        "environment": {
            "dialect": "mysql",
            "username": settings.databaseUserName,
            "password": settings.databasePassword,
            "database": settings.databaseName,
            "host": settings.databaseHost,
            "pool": {
                "max": 5,
                "min": 0,
                "idle": 10000
            },
            port: settings.databasePort,
            "logging": false
        },
        "test": {
            "dialect": "mysql",
            "username": "root",
            "password": "root",
            "database": "LocalDB",
            "host": "127.0.0.1",
            "storage": "test_database.sqlite",
            "pool": {
                "max": 5,
                "min": 0,
                "idle": 10000
            },
            port: 3311,
            "logging": false
        },
        "localDevelopment": {
            "dialect": "mysql",
            "username": "root",
            "password": "root",
            "database": "LocalDB",
            "host": "127.0.0.1",
            "pool": {
                "max": 5,
                "min": 0,
                "idle": 10000
            },
            port: 3306,
            "logging": false
        },
        //Log config
        "log": require('simple-node-logger').createLogManager(logConfigOptions).createLogger()
    }
