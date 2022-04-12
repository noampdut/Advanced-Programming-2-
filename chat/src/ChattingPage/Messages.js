import ShowMessages from "./Chatroom/ChatScreen/ShowMessages";

const MessagesList=[{
    'text':"Hello!",
    'getM':true},
    {'text':"Hii, how are you?",
    'getM':false},
    {'text':"Great!",
    'getM':true},
    {'text':"Great!",
    'getM':true},
    {'text':"check",
    'getM':false
    }];

function Messages(){
   return ShowMessages(MessagesList);
}

function insertNewMessages(text){
    MessagesList.push({'text': text, 'getM': false});
}


export {insertNewMessages};
export default Messages;