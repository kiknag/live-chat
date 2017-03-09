const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const colors = require('colors');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    // console.log('user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log(`message: ${colors.green(msg)}`);
  });
});


http.listen(3000, () => {
  console.log('Listening on port 3000');
})