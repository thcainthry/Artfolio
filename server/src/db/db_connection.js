import{
    config
} from './credentials.js'

const mysql = require('mysql');
const con = mysql.createConnection(
    {
        user: config.user,
        password: config.password,
        host: config.host,
        database: config.database
    }
);

con.connect(function(err){
    if(err) throw err;
    console.log("Conected!");
});