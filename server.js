const http = require('http');
const express = require('express');
const path = require('path');
const { Server } = require('socket.io');

const app = express()
const server = http.createServer(app)
const io = new Server(server)
const port = 3000



app.use(express.static(path.join(__dirname, 'app/dist',)));
// app.get('/socket.io/socket.io.js', (req, res) => {
//   res.sendFile(path.join(__dirname, 'node_modules', 'socket.io', 'client-dist', 'socket.io.js'));
// });

// io.on('connection', (socket) => {   //socket means client i.e, whenever a client joins then arrow function will be activated
//   console.log("A new user joined", socket.id)
// })


server.listen(port, () => {
  console.log(`App listening on port ${port}`)
})