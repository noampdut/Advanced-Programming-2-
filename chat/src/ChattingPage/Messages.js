import { useState } from "react";
import ShowMessages from "./Chatroom/ChatScreen/ShowMessages";

const MessagesList=[{
    'text':"Hello!",
    'getM':true},
    {'text':"Hii, how are you?",
    'getM':false},
    {'text':"Great!",
    'getM':true}];

function Messages(){
    ShowMessages(MessagesList);
}

function insertNewMessages(text){
    Messages.push({text});
}


export {insertNewMessages};
export default Messages;