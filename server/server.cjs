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

const rooms = [
  {
    "roomName": "GLOBAL CHAT",
    "roomPassword": "",
    "users": []
  }
];

app.get('/', (req, res) => {
  res.status(200).send('test');
})

app.post('/createRoom', (req, res) => {
  try {
    const { body } = req;
    let { roomName, roomPassword } = body;

    if (!roomName) {
      res.status(406).send('No room name provided')
    }
    
    rooms.forEach(room => {
      if (roomName === room.roomName) {
        res.status(403).send('Room already exists');
        return;
      }
    })
    
    if (!roomPassword) {
      console.log('no')
      roomPassword = "";
    }



    rooms.push(
      {
        roomName,
        roomPassword,
        "users": []
      }
    )

    res.sendStatus(200);
  } catch {
    res.sendStatus(400);
  }

});


app.get('/checkGamesExistance', (req, res) => {
  try {
    const { body } = req;
    let { roomName, roomPassword } = body;

    if (!roomName) {
      res.status(406).send('No Room Name Provided')
    }
    if (!roomPassword) {
      roomPassword = "";
    }


    rooms.forEach((room) => {
      if (roomName === room.roomName) {
        if (room.roomPassword === "" || roomPassword === room.roomPassword) {
          res.sendStatus(200);
        } else {
          res.status(403).send("Incorrect Password")
        }
      }
    })
    res.status(404).send('Room not found');

  } catch {
    res.status(400);
  }
})

io.on('connection', (client) => {


})



server.listen(3000, () => {
    console.log('websocket port: 3000');
  })


app.listen(port, () => {
    console.log(`Express Port: ${port}`)
})
  
  
