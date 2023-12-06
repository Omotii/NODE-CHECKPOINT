var fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', function(err){
    if (err) {
        console.error(err);
    } console.log('saved');
});

fs.readFile('hello.txt', function(err, data){
    if (err) {
        console.error(err);
    } 
    console.log(data.toString())
});