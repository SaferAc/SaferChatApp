require('./database');
var app= require('./app');
const Message= require('./models/message');
const User = require('./models/user');

var server = require('http').Server(app);
var io = require('socket.io')(server);




io.on("connection", function (socket) {
  console.log('user connected');
  
  socket.emit("test-event",'test data');

  socket.on('new-message', (msg) => {
    console.log(msg);
    //Save Message
    let message = new Message(msg);
    Message.addMessage(message, (err, newMsg) => {});
    io.emit('new-message', msg);
   });

   socket.on ('onDisconnect', async(id)=>{
     try {
      await  User.findByIdAndDelete(id['id']);
      io.emit('usersUpdated', msg);
     } catch (error) {
       console.log(error);
     }
    
   })

});

server.listen(3000,()=>{
  console.log('Server running on port 3000');
});



 
