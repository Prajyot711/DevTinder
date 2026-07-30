 const express = require('express');

 const app = express();

 app.get("/users",(req,res)=>{
   res.send({firstName:"Prajyot",lastName:"Chavan"})
 })

 app.post("/users",(req,res)=>{
   res.send("Data saved Successfully")
 })

 app.use("/",(req,res) => {
    res.send("Hello ")
 })

 app.listen(3000, () => {
    console.log("server")
 });

