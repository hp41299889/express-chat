import {Server} from 'socket.io';
import {createServer} from 'http';
import {app} from '../index';

export const server = createServer(app);

const io = new Server(server, {
  cors: {origin: 'http://localhost:3000'},
});

io.on('connection', socket => {
  console.log('a user connected', socket.id);

  socket.emit('id', socket.id);

  socket.on('chat message', msg => {
    console.log(`${socket.id} says：` + msg);

    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});
