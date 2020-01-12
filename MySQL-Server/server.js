const express = require('express');
const app = express();
const PORT = process.env.PORT || 3201;
const cors = require('cors');

app.use(cors());

app.get('/test',(req,res)=>{
    res.status(200),send();
})

app.listen(PORT, ()=>{console.log(`MySQL server listening on ${PORT}.`)})