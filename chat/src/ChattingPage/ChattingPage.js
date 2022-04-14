import ChatScreen from "./Chatroom/ChatScreen/ChatScreen";
import StartScreen from "./Chatroom/StartScreen/StartScreen";
import MessagesBox from "./Contacts/MessagesBox";
import'./Messages/ChattingPage.css';

function ChattingPage(){

    return(
        <div className="ChattingPage">
            <ChatScreen/>
        
        </div>

    );
}

export default ChattingPage;