const mysql = require('mysql');

const database = mysql.createPool({
    host: 'www.myurl.com',
    user: 'myDBuser',
    pass:'myDBpass',
    port: 3306,
    database: 'exampleDB',
    insecureAuth: true
})

const readAll = (query, cb) =>{
    database.query(query, (e,data)=>{
        if(e){
            cb(e);
        }else{
            cb(null,data);
        }
    })
}

module.exports = {
    readAll: readAll
}