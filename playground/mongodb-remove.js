const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{

    if(err)    
        return console.log('Unable to connect to the database');

    const db = client.db('TodoApp');

     //deleteMany
    //     db.collection('Todos').deleteOne({text:'e lunch'}).then((result)=>{
    //         console.log(result);
    //     });

    //     db.collection('Todos').deleteMany({text:'lunch'}).then((result)=>{
    //         console.log(result);
    //     });
    //  //deleteOne

     db.collection('Todos').findOneAndDelete({_id:ObjectId("5c0a2e6ab7088a42d88957f9")}).then((result)=>{
        console.log(result);
     });

     //findOneAndDelete

    
    db.collection('Users').deleteMany({name:'taylancivaoglu'}).then((result)=>{
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({name:'taylan'}).then((result)=>{
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id:ObjectId("5c10f0a58750e4b6c6e01f09")}).then(()=>{
        console.log('Ok deleted');
    })

    client.close();


});