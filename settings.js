var settings = {

    /**       
    / ---------- DATABASE CONFIG ------------
    */
    databaseHost: "127.0.0.1",
    databasePort: 3306,
    databaseUserName: "root", // root
    databasePassword: "root", // root
    databaseName: "LocalDB", //

    /**       
    *---------- LOG CONFIG ------------
    */
    //choose date format
    dateFormat: 'YYYY.MM.DD',
    logDirectory: './client/log', //log file folder
    fileNamePattern: 'roll-<DATE>.log',

    /**       
    *---------- UNIT TESTING CONFIG ------------
    */
    /**       
    *---------- EMAIL CONFIG ------------
    */
    // copy from consonle.developer.google
    email: {
        "USER_EMAIL": "dektech.dcc@gmail.com",
        "USER_CLIENT_ID": "985840088773-5s0rmeo36dd1v2h15h658c8flikvu63j.apps.googleusercontent.com",
        "USER_CLIENT_SECRET": "Zk2q9G6IDYLATjkLCB0-R9P3",
        "USER_ACCESS_TOKEN": "ya29.GlsXBKtapW12VeEXUil-kRM3vpdq6dkmY7-J00vnYbDSoNZwO86BmpOZRJm-aqX1hJvhPEvl1oNY7uoTbvHxVDkkGSUYChdcJy9pJjH6EqVc1A0YXkqymV7E972_",
        "USER_REFRESH_TOKEN": "1/boN86F0olFg8TbihDAJRPkeJWKuAWp7Ik3HSV0s3nXE"
    },

    /**       
    *---------- NOTIFICATION EMAIL TIME ------------
    */
    NotificationEmailTime: '8:00',   // hour:minute,  24h format
};
module.exports = settings;
