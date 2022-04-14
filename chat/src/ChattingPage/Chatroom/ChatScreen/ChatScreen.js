import './chatScreen.css';
import CurrentUserChat from './CurrentUserChat';
import Input from './Input';
import PopUp from './PopUp';
import VoicePopUp from './VoicePopUp';
import { useState } from 'react';
import React from 'react';
import Messages from '../../Messages';
import AddContactButton from '../../Contacts/AddContactButton';
import ContactsListResult from '../../Contacts/ContactsListResult';
import contacts from '../../Contacts/contacts';
import { isInUserList } from '../../../DataBase/dataBase';
import { IsInContactList } from '../../Contacts/contacts';
import ChatScrollBar from './ChatScrollBar';
import VideoPopUp from './VideoPopUp';
import { useEffect } from 'react';
import currentContact from '../../Contacts/currentContact';

const activeUser = [{ 'userName': '', 'nickName': '', 'picture': '' }];

function ChatScreen() {
    const MessagesList = [{'type':"text", 'data':"Hello!", 'getM':true, 'time':""}, 
                        {'type':"text", 'data':"Hii, how are you?", 'getM':false, 'time':""},
                        {'type':"text", 'data':"Great!", 'getM':true, 'time':""}]
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [videoPopUp, setVideoPopUp] = useState(false);
    const [recordPopUp, setRecordPopUp] = useState(false);
    const [messages, setMessage] = useState(MessagesList);
    const [currentContact1, setCurrentContact] = useState({'nickName': '', 'picture': '', 'lastMessage': ''});


    // state from MB
    const [contactsList, setContactsList] = useState(contacts);

    const addMessage = text => {
        text = text.trim();
        if (text != ""){
            setMessage([...messages, {'text':text, 'getM':false}]);
        }
    };

    useEffect(() =>{
        var scrool = document.getElementById("chatScroll");
        scrool.scrollTop = scrool.scrollHeight - scrool.clientHeight;
    });

    // MB
    const addContact = function (nickname) {
        if(isInUserList(nickname) && !IsInContactList(nickname)) {
            if(activeUser[1].userName == nickname) { 
                alert(nickname +", You can not create a new conversition with yourself.");
                 return;
                }
        setContactsList(contacts.unshift({ nickName: nickname, lastMessage: '', time: '', picture: 'luli.jpeg' }));
        }
    }
    // MB
    const onchange = function (e) {
        const newContact = [{ nickName: e.target.value, lastMessage: '', time: '', picture: 'luli.jpeg' }];
        setContactsList([...contactsList, ...newContact]);
    }

    const changeContact = function (nickName, picture, lastMessage) {
        currentContact.unshift({nickName: nickName, picture: picture, lastMessage: lastMessage});
        setCurrentContact(currentContact.unshift({nickName: nickName, picture: picture, lastMessage: lastMessage}));
    }

    const addImg = (file) => {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById("img").src = fr.result;
        }
        fr.readAsDataURL(file);
    };

    return (
        
            <div className="container py-5 px-4">
                <div className="row rounded-lg overflow-hidden shadow">
                    <div className="col-5 px-0">
                        <div className="bg-white">

                            <button href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div className="media"><img src={activeUser[1].picture} alt="user" width="30" className="rounded-circle"></img>&nbsp;Hi {activeUser[1].userName}!
                                    <div className="media-body ml-4">
                                        <div className="d-flex align-items-center justify-content-between mb-1">
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <div className="bg-gray px-4 py-2 bg-light">
                                <p className="h5 mb-0 py-1">Contacts &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>
                                        <AddContactButton addContact={addContact} onchange={onchange} />
                                    </span>
                                </p>
                            </div>

                            <div className="messages-box">
                                <div className="list-group rounded-0">

                                    <ContactsListResult contactsList={contacts} changeContact={changeContact} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className='chatBackground'>
                <CurrentUserChat user={currentContact[0].nickName} picture={currentContact[0].picture} />
                <Input setValue={setButtonPopUp} setValueVideo={setVideoPopUp} setValueRecord={setRecordPopUp} addMessage={addMessage} />
                <ChatScrollBar>
                    <Messages MessagesList={messages} />
                </ChatScrollBar>
                <img id="img"></img>
                <PopUp value={buttonPopUp} setValue={setButtonPopUp} addMessage={addMessage} addImg={addImg} />
                <VideoPopUp value={videoPopUp} setValue={setVideoPopUp} />
        <VoicePopUp value={recordPopUp} setValue={setRecordPopUp}/>
            </div>
            </div>
    );
}

function addUserToActiveList(userName, nickName, picture) {

    activeUser.push({ 'userName': userName, 'nickName': nickName, 'picture': picture });
}
export default ChatScreen;
export { addUserToActiveList };