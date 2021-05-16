const express = require('express');
const app = express();
const crawler = require('crawler-request');
const pdf = require('pdf-parse');

const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

var nykurs;


crawler("http://share.paretosec.com/upload/files/OTC_prices_web.pdf").then(function(response){
    // handle response

    pdf(response).then(function(data) {

    	  var str = data.text; 
  var n = str.search("Exeger");
    
    var bidstring = str.slice(n+16, n+19);
    var askstring = str.slice(n+20, n+23);
    var kursstring = str.slice(n+23, n+26);

    var bidnr = parseInt(bidstring, 10);

    var asknr = parseInt(askstring, 10);

    var kursnr = parseInt(kursstring, 10);




 nykurs = kursstring;
    

    
        
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('kurs update', nykurs);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});






  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
    console.log(msg);
  });
});

 





 
