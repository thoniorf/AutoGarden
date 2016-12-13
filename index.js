/*
* esversion:6
*/
const express = require('./express');
const http = require('http').Server(express);
const port = 3000;

const io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(port,(err) => {
  if(err) {
    return console.console.log('something wrong happened',err);
  }
  console.log(`server is listen on port ${port}`);
});
