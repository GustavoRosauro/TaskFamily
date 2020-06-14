const express = require('express');
const app = express();
const path = require('path');
const http = require('http')
const bodyParser = require('body-parser');
const tasksRouter = require('./router/tasksRouter');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

app.use(express.static(path.join(__dirname, 'build')))
const baseDir = `${__dirname}/build/`
let porta = process.env.PORT || 4000; 
app.use(bodyParser.urlencoded({extended:true}))
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
})
app.use(express.static(path.join(baseDir)))
app.get('/',(req,res)=>{
    res.send(path.join('index.html',{root:baseDir}))
})
app.listen(porta,()=>{
    console.log(`rodando porta ${porta}`);
})
const server = http.createServer(app);
app.use(express.json());
app.use('/',tasksRouter);
