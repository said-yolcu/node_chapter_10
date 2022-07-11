var server = require('net').createServer(socket => {
    console.log('new connection');

    socket.setEncoding('utf8')

    socket.write('Hello, you can start typing. Type \'quit\' to exit.\n')

    socket.on('data', data => {
        console.log('got:', data.toString())
        if(data.trim().toLowerCase() === 'quit'){
            socket.write('Bye bye!')
            return socket.end()
        }
        socket.write(data)
    })

    socket.on('end', () => {
        console.log('Client connection ended')
        //server.close()
    })
}).listen(4001)