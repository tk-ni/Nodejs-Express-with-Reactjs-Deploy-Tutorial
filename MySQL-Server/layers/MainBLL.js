const DAL = require('./DAL');

const getAllRows = (cb) =>{
    DAL.readAll('SELECT * FROM main_table',(e,data)=>{
        if(e){
            cb(e);
        }else{
            cb(null,data);
        }
    })
}

module.exports ={
    getAllRows: getAllRows
}