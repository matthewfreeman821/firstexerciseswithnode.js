const net = require('net');
const server = net.createServer((con) => {
    // console.log(con);
    console.log('Someone is here!!!')//prints on server side
    con.write('Welcome')//goes on user side

    setInterval (() => {
        con.write((new Date()).getTime() + '\n');
    }, 1000)
});
server.listen(9989);