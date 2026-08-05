const express = require('express');
const connectDB = require("./config/database.js")
const app = express();
const User = require("./models/user.js")

app.post("/signup",async (req,res)=>{
  const userObj = {
    firstName: "Priaynshi",
    lastName:"Shah",
    emailId:"pivishah29@gmail.com",
    password:"priyanshi@123"
  }

  const user = new User(userObj)
  

  try{
    await user.save()
    res.send("User Added Successfully")
  }catch(err){
    res.status(400).send("Error saving the User:" + err.message)
  }
  
})

connectDB() 
  .then(()=>{
    console.log("Database connection Successful..!!")
    app.listen(3000, () => {
      console.log("Server is listed on port 3000")
    });
  }).catch((err)=>{
    console.log("Database connection Failed...!")
  })
 

