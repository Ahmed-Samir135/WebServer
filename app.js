var express = require("express");
var morgan = require("morgan");
var app = express();
const router1 = require('./routes/Resource1Route');
const router2 = require('./routes/Resource2Route');
const router3 = require('./routes/Resource3Route');

// middlewares
if(process.env.NODE_ENV == "development"){
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));


//routes
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
