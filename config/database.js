const {Pool} = require('pg');
const dotenv = require('dotenv');
const { text } = require('body-parser');

dotenv.config();
const pool = new Pool({
    user:"tseaaarbilmnsl",
    password:"2a58e3721ae3e6dc16a460df19d71887418951b5acfd3ff80a2de899baa53829",
    database:"dai934f45cdljp",
    port:5432,
    host:"ec2-18-232-143-90.compute-1.amazonaws.com",
    ssl:true
});
pool.on('connect',()=>{
    console.log('conectado com sucesso');
}, error => console.log(error))

module.exports = {
    query: (text,params) => pool.query(text,params),
};