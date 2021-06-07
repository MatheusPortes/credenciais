const express = require('express');
const app = express();
const server = require('http').createServer(app);
const mysql = require('mysql');

app.use()

app.get('/connection',(req,res)=>{

    async function connection (){

        const conn = mysql.createConnection({
            host: '',
            user: '',
            password: '',
            database: ''
        });
    
        conn.connect();

        conn.query('DESC colaborador',(err,results)=>{
            if(err) throw err;
            res.send(json(results));
        });
        
    }
    

    connection();
});


server.listen(9090,()=>{
    console.log('online');
});



