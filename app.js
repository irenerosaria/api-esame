var express = require('express');
var ex = require('esamecarlo');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//POST Di Creazione ToDo
app.post('/list',  function(req, res){
	var a=req.body.name;
	var b=req.body.description;
	var c=req.body.completed;
	var d=req.body.assignedTo;
    ex.addToDo(a,b,c,d);
    res.status(201).json({messagge:'ToDo inserito'});
})

//DELETE Cancellazione di un ToDo in base all ID

app.delete('/list/:id', function(req, res) {
    var i = parseInt(req.params.id);
    res.json(ex.deleteById(i));
})

//PUT di modifica di ToDo in base all'id
app.put('/list/:id', function(req, res) {
	ex.deleteById(req.params.id);
	res.json(ex.addToDo(a,b,c,d));
    // var i = parseInt(req.params.id);
    // //posts[i] = editPost;
   	// list[i].name = req.body.name;
    // list[i].description = req.body.description;
    // list[i].completed = req.body.completed;
    // list[i].assignedTo = req.body.assignedTo;
    //res.json(list[i]);
})

//GET lettura di tutti i ToDo filtrata per utente
app.get('/list/:assignedTo', function(req, res) {
   if (req.query.assignedTo) {
        res.json(ex.findListByAssigned(req.query.assignedTo));
    } else {
        res.json(ex.getList());
    } 
})

//GET lettura di tutti gli utenti disponibili
app.get('/users',function(req,res){
	var people=["mamma","papà","zia","zio","nonna","nonno"];
	res.json(people);	
})
//GET lettura di tutti i ToDo filtrata per stato di completamento
app.get('/completed', function(req, res) {
 
    res.json(findCompleted());
})

app.listen(3001);
module.exports = app;