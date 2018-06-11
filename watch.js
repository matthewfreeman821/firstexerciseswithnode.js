const fs = require('fs');//no clue what this is because I wasn't here for beginning of lecture

// const print = (what) => { //same as using function (what) {}, called arrow notation
//     console.log('HEY: ' + what);
// }

// const print = what => { //Since only one arguement, can take away parenthesis around parameter what, otw same as above
//     console.log('HEY: ' + what);
// }

// const print = what => 'HEY: ' + what; //this is called implicit return

const print = what => (//must wrap in parenthesis if not leaving on one line like above
    'HEY: ' + what
);


fs.watch('README.md', () => {
    console.log('Ouch');//change to print if console.log is in above function
});