const express=require('express');
const cors=require('cors');
const socketIO=require('socket.io');
const http=require('http');
const app=express();
const server=http.createServer(app);
const io=socketIO(server);
const port=4500;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("yeah its working");
})
const users=[{}]
const room=[{}]
io.on("connection",(socket)=>{
    console.log("New connection");
    socket.on('joined',({user})=>{
      socket.join(`${user.year1}`);
      socket.join('general');
        users[socket.id]=user.name1;
        room[socket.id]=user.year1;
        console.log(user.name1);
      })

      socket.on('message',({message,id})=>{
       io.to(`${room[id]}`).to('general').emit('sendmessage',{user:users[id],message,id});
      })

      socket.on('disconnect',()=>{
        console.log('user left');
      })
      
})


server.listen(port,()=>{
    console.log(`server is listening on the ${port}`);
})