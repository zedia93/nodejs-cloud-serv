const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('¡Escuchando Sockets!');
});

const server = app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
})

const SocketIo = require('socket.io');
const io = SocketIo(server);

io.on('connection', (socket) => {
    
    io.emit('hi', `Se ha conectado ${socket.id}`);
    console.log('new conection', socket.id);

});