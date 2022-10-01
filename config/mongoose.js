const mongoose = require('mongoose');

console.log('in mongoose db');

main().catch((err)=> {console.log(err)});

async function main() {
    let res = await mongoose.connect('mongodb://0.0.0.0:27017/ToDoList_DB');
    console.log('connection successful');
}

