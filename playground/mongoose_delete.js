const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findByIdAndRemove('5b11674a91dd0c0e0029cf22').then((todo) => {
    console.log(todo);
}).catch((err) => {
    console.log(err);
});