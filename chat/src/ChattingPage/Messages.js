import { useState } from "react";
import ShowMessages from "./Chatroom/ChatScreen/ShowMessages";

const Messages=[{
    'text':"Hello!",
    'getM':true},
    {'text':"Hii, how are you?",
    'getM':false},
    {'text':"Great!",
    'getM':true}];

function Messages(){
    const [messages,setMessages] = useState(Messages);

    ShowMessages(messages);
}

function insertNewMessages(text){
    Messages.push({text});
}


export {insertNewMessages};
export default Messages;