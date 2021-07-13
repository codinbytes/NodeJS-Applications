const mysql = require('mysql');

const connection = mysql.createConnection({
    // default values for local usage
    host: "localhost",
    user: "root",
    password: "",
    database: 'database-name',
    port: 3306,

    /** 
    *   ⚠️Note: If you are using a cloud service i.e heroku,
    *   then these values would be given by your cloud provider.
    */
});


connection.connect(err => {
    if (err)
        throw err;

    console.log("Database Connection established successfully......");
});

module.exports = connection;