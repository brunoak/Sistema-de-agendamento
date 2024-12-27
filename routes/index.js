const express = require('express');
const router = express.Router()

router.get('/agendamento', (req, res)=>{
    res.send('todos os agendamentos')
})

router.post('/agendamento', (req, res)=>{
    res.send('Incluido um agendamento')
})

router.put('/agendamento/:id', (req, res)=>{
    res.send('Atualizando um agendamento')
})

router.delete('/agendamento/:id', (req, res)=>{
    res.send('deletando um agendamento')
})


module.exports = router