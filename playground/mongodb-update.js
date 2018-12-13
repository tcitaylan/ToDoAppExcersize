const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err) return console.log('Unable to connect to the database');

    const db = client.db('TodoApp');

    var notes = db.collection('Todos');

    var users = db.collection('Users');

    // notes.find().toArray().then((resultset)=>{
    //     var list = JSON.stringify(resultset,undefined,2);

    //     for (i=0;i<resultset.length;i++)
    //         console.log(resultset[i]);

    // });

    // notes.findOneAndUpdate({
    //     _id: new ObjectId('5c0a2e59140eee3a8cb0fc5b')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });


    function call(){

        users.find().toArray().then((resultset)=>{

            var list = JSON.stringify(resultset,undefined,2);

            for(i=0;i<resultset.length;i++)
            console.log(resultset[i]);
        });
    }
    
    call();

    // users.insertOne({
    //     name: 'taylancivaoglu',
    //     age: 40,
    //     location: 'Ankara'
    // }).then((result)=>{
    //     console.log('Added');
    // })

    // call();

    users.findOneAndUpdate({
        _id:new ObjectId('5c111dbc21cf2e314c857b49')
    },{
        $set:{
            name: 'Taylan41'
        },
        $inc:{
            age: 1

        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

 



    client.close();

});