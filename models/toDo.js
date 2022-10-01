const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    desc: {type: String , required:true},
    category:{type:String},
    duedate : {type: String , required:true},
    checked:{type:Boolean}
});

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;