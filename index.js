const express = require('express');

const app = express();

//handler for the get request (route adresss as a parameter)
app.get('/', (req,res) => {
    res.send({'hello': 'there'});
}) 


// listening to this port
app.listen(5000);