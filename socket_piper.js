var ws = require('fs').createWriteStream('mysocketdump.txt')
var rs = require('fs').createReadStream('hello.txt')


require('net').createServer(socket => {
    // pipe socket data to my socket dump.txt
    socket.pipe(ws)
    // pipe hello.txt data to socket
    rs.pipe(socket, { end: false })
}).listen(4001)


