//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj =  new ObjectID();
console.log(obj);



var user = {
    name: 'Taylan',
    age:41,
    location: 'Ankara'
}

var {name}=user;

console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) =>{
    if(err){
        return console.log('Unable to connect server'); //to stop executing the rest code :: return
    }

    console.log('Connected to Database');
    const db = client.db('TodoApp'); //Dont forget

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result)=>{
    //     if(err)
    //         return console.log('Unable to create todo item');
    //     console.log (`New todo item created. :: ${JSON.stringify(result.ops,undefined,2)}`); 
    // });

    // db.collection('Users').insertOne({
    //     name:'dogacivaoglu',
    //     age:6,
    //     location:'Ankara'
    // }, (err, result)=>{
    //     if(err)
    //         return console.log('Unable to create user::',err);
    //     console.log(`New user is created::${JSON.stringify(result.ops, undefined,2)}`);
    //     console.log(`Time :: ${result.ops[0]._id.getTimestamp()}`)
    // });

    client.close();
});
