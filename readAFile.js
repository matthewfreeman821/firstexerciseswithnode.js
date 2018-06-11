const fs = require('fs');
const filename = 'README.md';
const outputFile = 'README_output.md';

fs.readFile(filename, (err, buffer) => {
    if (err) {//prints error message if error is thrown
        console.log(err.message);
        return;
    }
    let content = buffer.toString();//changes content to be readable rather than garbled junk
    let upcased = content.toUpperCase();//changes content to all upppercase bc it is now a string
    console.log(upcased);

    fs.writeFile(outputFile, upcased, (err) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log('Yea, it totally worked');
    });


});