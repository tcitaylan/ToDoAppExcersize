const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client)=>{
    if(err)
        return console.log('Unable to connect the database::',err);
    const db = client.db('TodoApp');
    console.log('Connected to database');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5c0a2e6ab7088a42d88957f9")
    // }).toArray().then((docs)=>{
    //     console.log('TODOS');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Error',err);
    // });

    var todos = db.collection('Todos');
    var users = db.collection('Users');
    todos.find().count().then((n)=>{
        console.log(`TODOS:${n}`);
    },(err)=>{
        console.log('Error',err);
    });

    users.find({name:'dogacivaoglu'}).count().then((n)=>{
        console.log(`USERS: ${n}`);
    });

    users.find({name:'dogacivaoglu'}).toArray().then((resultset)=>{
        var list = JSON.stringify(resultset,undefined,2);
        for (i=0;i<resultset.length;i++)
            console.log(resultset[i].name);
    });

    // db.collection('Users').find().toArray().then((docs)=>{
    //     var list = JSON.stringify(docs,undefined,2);
    //     console.log('Users');
    //     console.log(list);
    // },(err)=>{
    //     console.log('Unable to read data',err);
    // });   

    client.close();
});