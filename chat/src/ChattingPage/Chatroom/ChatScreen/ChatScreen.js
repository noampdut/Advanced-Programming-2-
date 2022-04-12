import './chatScreen.css';
import CurrentUserChat from './CurrentUserChat';
import Input from './Input';
import MassageGet from './MassageGet';
import MassageSent from './MassageSent';
import PopUp from './PopUp';
import VoicePopUp from './VoicePopUp';
import { useState } from 'react';
import React from 'react';
import Messages from '../../Messages';

function ChatScreen() {
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
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [recordPopUp, setRecordPopUp] = useState(false);
    const [messages, setMessage] = useState(MessagesList);

    const addMessage = text =>{
        setMessage([...messages, {'text':text, 'getM':false}]);
    };
    return(
    <div className='chatBackground'>
        <CurrentUserChat user="Noam Pdut" picture='./luli.png'/>
        <Input setValue={setButtonPopUp} setValueRecord={setRecordPopUp} addMessage={addMessage}/>        
        <Messages MessagesList={messages} />
        <PopUp value={buttonPopUp} setValue={setButtonPopUp}/>
        <VoicePopUp value={recordPopUp} setValue={setRecordPopUp}/>
    </div>
        
    );
}
export default ChatScreen;