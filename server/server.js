var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=>{
        console.log(JSON.stringify(doc,undefined,2));
        res.send(doc);
    },(e)=>{
        res.status(400).send(e.message);
        console.log(e)
    });
});

app.listen(3000, ()=>{
    console.log('Server started on port: 3000');
});
module.exports.app = app;

