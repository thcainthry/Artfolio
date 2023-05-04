import{
    config
} from './credentials.mjs'

import mysql from 'mysql';
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
    console.log("Connected to database.");
});