const express = require('express');
const phones = require('./phones.json');
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello From My First Every Server');
})

app.get('/phones', (req,res) => {
    res.send(phones);
})
app.get('/phones/:id', (req,res) => {
    const id = req.params.id;
    console.log('i need data for id: ',id);
    const phone = phones.find(phone => phone.id == id) || {};
    res.send(phone);
})

app.listen(port, ()=>{
    console.log(`My first server is running on port: ${port}`)
})