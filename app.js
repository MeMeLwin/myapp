const log=require('./logger.js');

log('Hi! I am Me Me...');

//Event
const EventEmitter=require('events');
const emitter=new EventEmitter();

//Register a listener
emitter.on('messageLogged',function(){
  console.log('Listener Called...');
});
//Raise an event
emitter.emit('messageLogged');

//Path
const path=require('path');
var pathObj=path.parse(__filename);
console.log(pathObj);

//OS
const os=require('os');
var totalMemory=os.totalmem();
var freeMemory=os.freemem();

//console.log("Total Memory:"+totalMemory);
//console.log("Free Memory:"+freeMemory);

//Template String
//ES6 / ES2015 : ECMAScript 6

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);

//File System
const fs=require('fs');
//const files=fs.readdirSync('./');
//console.log(`Files :${files}`);

fs.readdir('./',function(err,files){
  if(err)console.log('Error',err);
  else console.log('Result',files);
})
