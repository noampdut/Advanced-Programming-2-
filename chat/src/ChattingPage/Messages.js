import { useState } from "react";
import ShowMessages from "./Chatroom/ChatScreen/ShowMessages";



function Messages({MessagesList}){
   return ShowMessages(MessagesList);
}

export default Messages;