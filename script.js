const fs = require('fs');

// fs.appendFile("intro.txt", "Append file appends data to already existing file`", function(err){
//         if(err) console.error(err);
//         else console.log("done")
//     })

// fs.rename("intro.txt","newName.txt",function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })


//FOR COPY FILE OPERATION WE ARE CREATING A COPY FOLDER AND TELLING TO CREATE A COPIED FILE IN THAT FOLDER

// fs.copyFile("newName.txt","./copy1/copied.txt",function(err){
//     if(err) console.error(err);
//     else console.log("done")
// })


// unlink  USED TO DELETE FILE
//  fs.unlink("./copy/copied.txt",function(err){
//     if(err) console.error(err);
//     else console.log("done")
//  }) 



// HTTP

const http = require('http');

const server= http.createServer(function(req, res){
   res.end("Ruhi U have successfully created a server! ")
})

server.listen(3000) // to run use node script.js and then in browser type localhost:3000
