 const express = require('express');

 const app = express();

//  app.get("/users/:userId/:name/:password",(req,res)=>{
//    console.log({...req.params})
//    res.send({'firstName':"Prajyot",'lastName':"Chavan"})
//  })

 app.use("/test",
  (req,res,next) => {
    console.log("res 1");
    //res.send("res1");
    next()
  },
  (req,res,next) => {
    console.log("res 2");
    res.send("res2");
  }

)

 app.listen(3000, () => {
    console.log("server")
 });

