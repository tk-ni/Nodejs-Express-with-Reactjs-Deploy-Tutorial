const express = require('express');
const app = express();
const PORT = process.env.PORT || 3201;
const cors = require('cors');

const MainBLL = require('./layers/MainBLL');
app.use(cors());

app.get('/getusers',(req,res)=>{
    MainBLL.getAllRows((e,data)=>{
        if(e){
            res.status(500).send();
        }else{
            res.status(200).send(data);
        }
    })
})

app.listen(PORT, ()=>{console.log(`MySQL server listening on ${PORT}.`)})