 const express = require('express');

 const app = express();

 app.get("/users/:userId/:name/:password",(req,res)=>{
   console.log({...req.params})
   res.send({'firstName':"Prajyot",'lastName':"Chavan"})
 })

 app.listen(3000, () => {
    console.log("server")
 });

