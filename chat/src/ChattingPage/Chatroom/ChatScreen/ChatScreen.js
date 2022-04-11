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
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [recordPopUp, setRecordPopUp] = useState(false);

    return(
    <div className='chatBackground'>
        <CurrentUserChat user="Noam Pdut" picture='./luli.png'/>
        <Input setValue={setButtonPopUp} setValueRecord={setRecordPopUp}/>
    
        <MassageGet text="hiiiii"/>
        <MassageSent text="Bi!"/>
        <Messages />
        <PopUp value={buttonPopUp} setValue={setButtonPopUp}/>
        <VoicePopUp value={recordPopUp} setValue={setRecordPopUp}/>
    </div>
        
    );
}
export default ChatScreen;