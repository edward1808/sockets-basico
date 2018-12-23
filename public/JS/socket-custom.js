var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se ha perdido la conexión con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Edward',
    message: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta servidor: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});