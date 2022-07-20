require('net').createServer(socket => {
    socket.on('data', data => {
        console.log(`Data received: ${data}`)
    })

    socket.on('end', data => {
        console.log('Socket is closed')
    })


    socket.write('Write on the page\r\n')


}).listen(4000)