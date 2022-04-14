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
import currentContact from '../../currentContact';
import { isInUserList } from '../../../DataBase/dataBase';
import { IsInContactList } from '../../Contacts/contacts';

const activeUser = [{ 'userName': '', 'nickName': '', 'picture': '' }];

function ChatScreen() {
    const MessagesList = [{'text': "Hello!",'getM': true},{'text': "Hii, how are you?",'getM': false },{'text': "Great!",'getM': true},
    {'text': "Great!",'getM': true},{'text': "check",'getM': false}];

    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [recordPopUp, setRecordPopUp] = useState(false);
    const [messages, setMessage] = useState(MessagesList);
    const [currentContact1, setCurrentContact] = useState({'nickName': '', 'picture': '', 'lastMessage': ''});


    // state from MB
    const [contactsList, setContactsList] = useState(contacts);

    const addMessage = text => {
        setMessage([...messages, { 'text': text, 'getM': false }]);
    };

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

    return (
        
            <div class="container py-5 px-4">

                <div class="row rounded-lg overflow-hidden shadow">

                    <div class="col-5 px-0">
                        <div class="bg-white">

                            <button href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
                                <div class="media"><img src={activeUser[1].picture} alt="user" width="30" class="rounded-circle"></img>&nbsp;Hi {activeUser[1].userName}!
                                    <div class="media-body ml-4">
                                        <div class="d-flex align-items-center justify-content-between mb-1">
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <div class="bg-gray px-4 py-2 bg-light">
                                <p class="h5 mb-0 py-1">Contacts &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>
                                        <AddContactButton addContact={addContact} onchange={onchange} />
                                    </span>
                                </p>
                            </div>

                            <div class="messages-box">
                                <div class="list-group rounded-0">

                                    <ContactsListResult contactsList={contacts} changeContact={changeContact} />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className='chatBackground'>
                <CurrentUserChat user={currentContact[0].nickName} picture={currentContact[0].picture} />
                <Input setValue={setButtonPopUp} setValueRecord={setRecordPopUp} addMessage={addMessage} />
                <Messages MessagesList={messages} />
                <PopUp value={buttonPopUp} setValue={setButtonPopUp} />
                <VoicePopUp value={recordPopUp} setValue={setRecordPopUp} />
            </div>
            </div>
    );
}

function addUserToActiveList(userName, nickName, picture) {

    activeUser.push({ 'userName': userName, 'nickName': nickName, 'picture': picture });
}
export default ChatScreen;
export { addUserToActiveList };
