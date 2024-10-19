const fs = require('fs');

fs.writeFile("intro.txt", "Hi you have successfully created adn added data to a file", function(err){
        if(err) console.error(err);
        else console.log("done")
    })