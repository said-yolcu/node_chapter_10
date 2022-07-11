require('net').createServer(socket => {
    socket.on('data', data => {
        console.log('Data received')
    })

    socket.on('end', data => {
        console.log('Socket is closed')
    })


    socket.write('Write on the page\r\n')


}).listen(4001)