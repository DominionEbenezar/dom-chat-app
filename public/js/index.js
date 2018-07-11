var socket = io();

socket.on('connect', function (){
    console.log('connected to server');

    socket.emit('createMessage', {
       from: 'Dominion',
        text: 'Hey this is dominion'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from sever');
});

socket.on('newMessage', function(message){
    console.log('New message', message);
});