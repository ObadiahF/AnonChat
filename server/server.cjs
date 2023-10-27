'use strict'
const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080
const { HASHER } = require('./utlis/hasher.cjs')
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
    "roomName": "GLOBAL",
    "roomPassword": "",
    "users": []
  }
];

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
      roomPassword = "";
    }



    rooms.push(
      {
        roomName,
        "roomPassword": roomPassword === "" ? "" : HASHER(roomPassword),
        "users": []
      }
    )
    
    res.sendStatus(200);
  } catch (e){
    console.log(e);
    res.sendStatus(400);
  }

});


app.get('/checkGamesExistance:id', (req, res) => {
  try {
    const { body } = req;
    const { id } = req.params;

    let { roomPassword } = body;
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

app.get('/users:id', (req, res) => {
  const { body } = req;
  const { id } = req.params;
  let { roomPassword } = body;

  const foundRoom = roomDetailsVerification(id, roomPassword);

  if (foundRoom === false) {
    res.sendStatus(404);
  } else {
    res.status(200).send(foundRoom.users);
  }
})

io.on('connection', (client) => {

})

const roomDetailsVerification = (roomName, roomPassword) => {
  let room;
  rooms.forEach((one) => {
    if (roomName === one.roomName) {
      room = one;
    }
  })

  if (!room) return false;
  if (room.roomPassword === "") return room;

  if (room.roomPassword === roomPassword) {
    return room;
  } else {
    return false;
  }
  
}



server.listen(3000, () => {
    console.log('websocket port: 3000');
  })


app.listen(port, () => {
    console.log(`Express Port: ${port}`)
}) 
