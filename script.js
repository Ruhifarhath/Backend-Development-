const express = require('express')
const app= express()

app.use(function(req,res,next){
   console.log("This is a middleware")
   next()
});
app.get("/",function(req,res){
   res.send("This is default route page")
})

app.get("/profile", function(req,res){
   res.send("This is the profile route")
})

app.listen(3000)