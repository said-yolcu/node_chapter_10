var server= require('net').createServer()
var port= 4001

server.on('listening', () => {
    console.log('Server is listening on port', port)
})

server.on('connection', socket => {
    console.log('Server has a new connection')
    socket.end()
    server.close()
})

// this close event listener does not work
server.on('close', () => {
    console.log('Server is snow closed')
})

server.on('error', error => {
    console.log(`Error occurred: ${err.message}`)
})

server.listen(port)