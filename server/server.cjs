'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080
app.use(cors({
  origin: "*",
  methods: ["GET", "POST"]
}));
app.use(express.json());


//websocket setup
const http = require('http');
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

server.listen(3000, () => {
    console.log('websocket port: 3000');
  })


app.listen(port, () => {
    console.log(`Express Port: ${port}`)
})
  
  
