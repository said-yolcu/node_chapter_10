var ws = require('fs').createWriteStream('mysocketdump.txt')
var rs = require('fs').createReadStream('hello.txt')
var port= 4001;
var host= '0.0.0.0'

var server = require('net').createServer(socket => {

    // set a quitting condition
    socket.on('data', data => {
        socket.pause()
        if(data.toString().trim().toLowerCase() === 'quit'){
            socket.write('So long and thanks for all the fish')
            return socket.end()
        }
        socket.resume()
    })

    // pipe socket data to my socket dump.txt
    socket.pipe(ws)

    // pipe hello.txt data to socket
    rs.pipe(socket, { end: false })

    // set timeout
    /*
    socket.setTimeout(6000, () => {
        socket.end('idle timeout, disconnecting, bye!')
        server.close()
    })
    */

    socket.setKeepAlive(true)

    // prevents buffering of data before sending, thus annihilates
    // data sending delay
    socket.setNoDelay(true)

    // handling socket errors
    socket.on('error', socket => {
        console.log(`An error detected. Error no: ${error.message}`)
    })
}).listen(port, host)


