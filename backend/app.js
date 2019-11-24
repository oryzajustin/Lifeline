var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Asserting that all environment variables are there:
require('dotenv').config()
console.log("\n--------------------------------------------------------------------------------");
console.log("ENVIRONMENT VARIABLES");
console.log("Twilio Account Id: " + process.env.TWILIO_ACC_ID);
console.log("Twilio Account Id: " + process.env.TWILIO_ACC_ID);
console.log("Twilio Auth Token: " + process.env.TWILIO_AUTH_TOKEN);
console.log("Twilio Phone #: " + process.env.TWILIO_PHONE);
console.log("Demo Phone #: " + process.env.DEMO_PHONE);
console.log("Twilio Voice Url: " + process.env.VOICE_URL);
console.log("--------------------------------------------------------------------------------\n");

var twilio = require('twilio');
var twilio_client = new twilio(process.env.TWILIO_ACC_ID, process.env.TWILIO_AUTH_TOKEN);

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html'); 
});

var distressSignals = [];

io.on('connection', function(socket){
  console.log("New Connexxion: " + socket.id);
  socket.emit('UpdateDistressSignals', distressSignals);

  // Add distress signal to the list and refreshes clients
  socket.on('CreateDistressSignal', function(data){
    distressSignals.push({
      id: socket.id, 
      coords: data.coords,
      time: Date.now()
    });

    twilio_client.calls.create({
      url: process.env.VOICE_URL,
      to: process.env.DEMO_PHONE, // Text this number
      from: process.env.TWILIO // From a valid Twilio number
    })
    .then((call) => console.log(call.sid));

    // Update all other users
    socket.emit('UpdateDistressSignals', distressSignals);
    socket.broadcast.emit('UpdateDistressSignals', distressSignals);
  });

  // Delete Distress Signal by ID and refreshes clients
  socket.on('ResolveDistressSignal', function(signal_id){
    // Update the rest of the app with the new distress signal list
    let index = -1;

    for(i = 0; i < distressSignals.length; i++) {
      if (distressSignals[i]['id'] === signal_id) {
        index = i;
        break;
      }
    }

    // If found. Otherwise, shame on you, Justin.
    if (index > -1) {
      distressSignals.splice(index);
      socket.emit('UpdateDistressSignals', distressSignals);
      socket.broadcast.emit('UpdateDistressSignals', distressSignals);
    }
  });

  // Refreshes the client
  socket.on('UpdateDistressSignals', function(){
    socket.emit('UpdateDistressSignals', distressSignals);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});