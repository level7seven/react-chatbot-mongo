const express = require('express');

const app = express();

//handler for the get request (route adresss as a parameter)
app.get('/', (req,res) => {
    res.send({'hello': 'there'});
}) 

const PORT = process.env.PORT || 5000;

// listening to this port
app.listen(PORT)