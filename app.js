var express = require("express");
var app = express();
const router1 = require('./routes/Resource1Route');
const router2 = require('./routes/Resource2Route');
const router3 = require('./routes/Resource3Route');




app.get('',(req,res)=>{
    res.end("hello world");
});
app.use('/Resource1',router1);
app.use('/Resource2',router2);
app.use('/Resource3',router3);
app.get('/myip',(req,res)=>{
    res.status(200).end(req.socket.remoteAddress);
});


module.exports=app;
