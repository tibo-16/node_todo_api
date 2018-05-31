// START SERVER
// ./mongod --dbpath ~/mongo_data

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    var db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({
    //     text: 'Eat Lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({
    //     text: 'Eat Lunch'
    // }).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({
        name: 'Tobi'
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b0fe1991dd186121d87cce3')
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log('Unable to delete user', err);
    });

    //client.close();
});