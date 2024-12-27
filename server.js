require('dotenv').config();
const index = require('./routes/index')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('Servidor está rodando');
});

app.use('/api', index);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(` Servidor rodando em http://localhost:${PORT}`)
})
