import React ,{useEffect, useState} from 'react'
import {user} from "../Join/Join.js"
import "./Chat.css";
import socketIO from "socket.io-client"
import Message from '../Message/Message.js';


import ReactScrollToBottom from "react-scroll-to-bottom"
let socket;
const ENDPOINT="http://localhost:4500";

const Chat = () => {
  const [id, setid] = useState("");
  const [message, setmessage] = useState([]);

  const sendMessage=()=>{
    const message=document.getElementById("chatMessage").value;
    socket.emit('message',({message,id,user})); 
    document.getElementById("chatMessage").value="";
  }
 useEffect(() => {
  socket=socketIO(ENDPOINT,{transports:['websocket']});

   socket.on("connect",()=>{
     alert("connected");
     setid(socket.id);
   })
   socket.emit('joined',{user});
   return () => {
     socket.disconnect();
     socket.off();
   }
 }, [])
 
   useEffect(() => {
     socket.on('sendmessage',(data)=>{
      setmessage([...message,data]);
      console.log(data.user,data.message);
     })
   
     return () => {
       socket.off();
     }
   }, [message])
   
  return (
   <div className="ChatPage">
     <div className="Chatcontainer">
      
      <ReactScrollToBottom className="chatbox">
       {message.map((item,i)=><Message user={item.id===id?"":item.user}message={item.message} classes={item.id===id?'right':'left'}/>)} 
      </ReactScrollToBottom>
      <div className="inputbox">
        <input type="text" id="chatMessage" />
        <button style={{backgroundColor:'greenyellow'}}onClick={sendMessage}>Send</button>
      </div>
  
      
      {/* <h1>{user.name1}</h1> */}
      
     </div>
   </div>
  )
}

export default Chat
