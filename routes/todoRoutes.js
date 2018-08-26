const express = require('express');
const router = express.Router();
const connection = require("../connection")

router.get('/',(req,res)=>{
    connection.query("select * from todo",(err, result)=> {
        if(err){
            res.send(err)
        }else{
            res.json(result)
        }
    })
})

router.post('/',(req,res) => {
    connection.query(`INSERT INTO todo(list) values('${req.body.list}')`,(err, result)=>{
        if(err){
            res.send(err)
        }else{
            connection.query(`SELECT * FROM todo where id=${result.insertId}`,(error,resp)=>{
                res.json(resp)
            })
        }
    })
})

router.delete('/delete/:id',(req,res)=>{
    connection.query(`DELETE FROM todo where id=${req.params.id} `,(err,resp)=>{
        if(err){
            res.send(err)
        }else{
            connection.query('SELECT * FROM todo',(error, result)=>{
                res.json(result)
            })
        }
    })
})

router.get('/edit/:id/:text',(req,res)=>{
    connection.query(`UPDATE todo SET list= '${req.params.text}' where id=${req.params.id} `,(error,result)=>{
        if(error){
            res.send(error)
        }else{
            connection.query('SELECT * FROM todo',(error, result)=>{
                res.json(result)
            })
        }
    })
})
module.exports = router;