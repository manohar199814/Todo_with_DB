const todoItems = [];

const ToDo = require('../models/toDo');


//to render home page
module.exports.renderHome = (req,res) => {
    ToDo.find({} , function(err,toDoList) {
        if(err){
            console.log('Error in fetching ToDos from data base');
            return;
        }
        return res.render('home',{title:'TODO App',todoItems:toDoList});
    }) 
    
}

//to add todo item 
module.exports.postToDoItem = (req,res) => {
    ToDo.create({...req.body, checked:false },function (err, todoItem) {
        if (err) { 
            console.log(err);
            return;
        }
        return res.redirect('/');
    });
}

//delete todo item
module.exports.deleteTodoItem = (req,res) => {
    const id  = req.query._id;
    ToDo.deleteOne({ _id : id} , (err) => {
        if(err){ 
            console.log(err);
            return;
        }  
    });
    res.redirect('back');
}

//to handle check and uncheck of input todolist value
module.exports.checkTODoItem = async (req,res) => {

    ToDo.find({_id:req.params.id.slice(1)} , async function(err,toDoList) {
        if(err){
            console.log('Error in fetching ToDos from data base');
            return;
        }
        await ToDo.updateOne({_id:req.params.id.slice(1)}, {checked : !toDoList[0].checked});
    });
    
}