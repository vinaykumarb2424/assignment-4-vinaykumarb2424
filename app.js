const express = require('express');
const app = express();
const port = 9900;
const mongo = require('mongodb');
const mongoClient = mongo.mongoClient;
const mongodbUrl = "mongodb://localhost:27017";
// connecting mongo server
mongoClient.connect(mongodbUrl, (err,connection) =>{

    if(err){
        console.log(err);
    }
    db = connection.db('MEANStackDB');
});
let db;
var city = [
    {
    _id: 1,
    city_name: "Delhi",
    city: 1,
    country_name: "India"
    },
    {
        _id: 3, 
        city_name: "Pune", 
        city: 3, country_name: "India"
    },
    {_id: 2, city_name: "Mumbai", city: 2, country_name: "India"} ,
        {_id: 4, city_name: "Chandigarh", city: 4, country_name: "India"} ,
        {_id: 5, city_name: "Goa", city: 5, country_name: "India"} ,
         {_id: 6, city_name: "Manali", city: 6, country_name: "India"}];

//routes
app.get('/city',(req,res)=>{
    //mongodb.Db.collection('Internship')
    db.collection('Internship').find().toArray((err,result) => {
        if(err) throw err;
        res.send(result);
      })
    res.send(city);
})

//connecting server
app.listen(port,(err)=>{
    if(err){
       throw err;
    }
    console.log(`Server running on port ${port}`);
})
