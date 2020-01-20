'use strict'

const fs=require('fs')

function registrar(usuario){
    fs.appendFile('registrouser',usuario+'\n', function(err){
        if (err) throw err
        console.log('usuario registrado')
    })
}

module.exports={registrar}