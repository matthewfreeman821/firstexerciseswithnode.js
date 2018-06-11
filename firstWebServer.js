const http = require('http');
const server = http.createServer( (req, res) => {
    console.log('Hey! Someone connected!!!')
    res.end(`Hey!`); 
});
server.listen(8888)
console.log('Your server is running at http://localhost:8888')