const { ok } = require('assert');
const express = require('express');
const app = express();
const port = 9900;
const mongo = require('mongodb');
const mongoclient = mongo.MongoClient;
const mongodbUrl = "mongodb://localhost:27017";
// connecting mongo server
mongoclient.connect(mongodbUrl, (err,connection) =>{

    if(err){
        console.log(err);
    }
    db = connection.db('Internship');
});
let db;

    
//routes

//health ok
app.get('/', (a,b) =>{
    b.send("ok");
})


//get city list
app.get('/city',(req,res)=>{
    

    db.collection('city').find().toArray((err,result) => {
        if(err){
            throw err;
        }
        res.send(result);
      })
    
})


//get city by cityname
app.get('/city/:cityname', (req,res)=>{
    var cityName = req.params.cityname;
    db.collection('city').find({city_name:cityName}).toArray((err,result) => {
        if(err){
            throw err;
        }
        res.send(result);
    })
})
// get mealType
app.get('/meal', (req,res) => {
    db.collection('mealType').find().toArray((err,result) =>{
        if(err){
            console.log(err);
            throw err;
        }
        res.send(result);
    })
})

//connecting server
app.listen(port,(err)=>{
    if(err){
       throw err;
    }
    console.log(`Server running on port ${port}`);
})
