'use strict'
const express = require('express')
const bodyparser = require('body-parser')
const db=require('./db')

const app = express()
app.use(bodyparser.urlencoded({extended: true}))

app.post('/',function(req,res){
 res.send('Hola Mundo')

})

app.post('/user',function(req,res){
    res.send('Hola user')
   
})

app.listen(3001, function(){
    console.log('app listening on port 3001')
})

app.post('/ingreso',function(req,res){
    const {body} = req
    db.registrar(JSON.stringify(body))
    res.send('200 usuario registrado')
})