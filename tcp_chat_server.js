var net = require('net')
var server = net.createServer()
var sockets = []

// accept and handle connections
server.on('connection', socket => {
    console.log('Got new connection')

    // record the sockets
    sockets.push(socket)

    socket.on('data', data => {

        sockets.forEach(otherSocket => {
            if (otherSocket !== socket) {
                otherSocket.write(data)
            }
        })

        if (data.toString().trim().toLowerCase() === 'quit') {
            socket.end()
            server.close()
            return
        }

        console.log(`Got data: ${data}`)
    })

    socket.on('end', () => {
        console.log('Connection closed')
    
        sockets.splice(sockets.findIndex(elem => {
            elem === socket
        }), 1)
    })
})



// error handler
server.on('error', err => {
    console.log(`Error detected: ${err.message}`)
})

// close event listener
server.on('close', () => {
    console.log('Server closed')
})

server.listen(4001)