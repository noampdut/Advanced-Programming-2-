import './chatScreen.css';
import { useState, useEffect, React } from 'react';
import AddContactButton from '../../Contacts/AddContactButton';
import contacts from '../../Contacts/contacts';
import { isInUserList } from '../../../DataBase/dataBase';
import { IsInContactList } from '../../Contacts/contacts';
import currentContact from '../../Contacts/currentContact';
import { getPic } from '../../../DataBase/dataBase';
import MessagesBox from '../../Contacts/MessagesBox';
import MessageScrollBar from './MessageScrollBar';
import View from './View';
const activeUser = [{ 'userName': '', 'nickName': '', 'picture': '' }];


function ChatScreen() {
    const MessagesList = [{'type':"text", 'data':"Hello!", 'getM':true, 'time':""}, 
                        {'type':"text", 'data':"Hii, how are you?", 'getM':false, 'time':""},
                        {'type':"text", 'data':"Great!", 'getM':true, 'time':""}]
    const [buttonPopUp, setButtonPopUp] = useState(false);
    const [videoPopUp, setVideoPopUp] = useState(false);
    const [recordPopUp, setRecordPopUp] = useState(false);
    const [messages, setMessage] = useState(MessagesList);
    const [startScreen, setStartScreen] = useState(true);
    const [currentContact1, setCurrentContact] = useState({'userName': '', 'picture': '', 'lastMessage': ''});


    // state from MB
    const [contactsList, setContactsList] = useState(contacts);

    const addMessage = text => {
        text = text.trim();
        if (text != ""){
            setMessage([...messages, {'type':"text", 'data':text, 'getM':false, 'time':""}]);
        }
    };

    

    // MB
    const addContact = function (user) {
        if(isInUserList(user) && !IsInContactList(user)) {
            if(activeUser[1].userName == user) { 
                alert(user +", You can not create a new conversition with yourself.");
                 return;
            }
        setContactsList(contacts.unshift({ userName: user, lastMessage: '', time: '', picture: getPic(user)}));
        }
    }
    // MB
    const onchange = function (e) {
        const newContact = [{ userName: e.target.value, lastMessage: '', time: '', picture: 'luli.jpeg' }];
        setContactsList([...contactsList, ...newContact]);
    }

    const changeContact = function (user, picture, lastMessage) {
        currentContact.unshift({userName: user, picture: picture, lastMessage: lastMessage});
        //startScreen = false;
        setStartScreen(false);
        setCurrentContact(currentContact.unshift({userName: user, picture: picture, lastMessage: lastMessage}));
    }

    const addImg = (file) => {
        var fr = new FileReader();
        fr.onload = function () {
            setMessage([...messages, {'type': "pic", 'data':fr.result, 'getM':false, 'time':new Date()}]);
        }
        fr.readAsDataURL(file);
    };

    const addVideo = (file) => {
        var fr = new FileReader();
        fr.onload = function () {
            setMessage([...messages, {'type': "video", 'data':fr.result, 'getM':false, 'time':new Date()}]);
        }
        fr.readAsDataURL(file);
    }

    const addAudio = (audio) =>{
        //alert("from ff");
            setMessage([...messages, {'type': "audio", 'data':audio, 'getM':false, 'time':new Date()}])
    }

    return (
        <div className="container py-5 px-4">
            <div className="row rounded-lg overflow-hidden shadow">
                <div className="col-5 px-0">
                    <div className="bg-white">
                        <button href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
                            <div className="media"><img width="60" height="30" src={activeUser[1].picture} alt="user" className="rounded-circle"></img>&nbsp;Hi {activeUser[1].userName}!
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
                        <MessageScrollBar>
                            <MessagesBox contactsList={contacts} changeContact={changeContact}/>
                        </MessageScrollBar>
                    </div>
                </div>
            </div>
            <div className='chatBackground'>
                <View startScreen={startScreen} setButtonPopUp={setButtonPopUp} setVideoPopUp={setVideoPopUp} setRecordPopUp={setRecordPopUp} messages={messages}
                 buttonPopUp={buttonPopUp} 
                 videoPopUp={videoPopUp} 
                 addMessage={addMessage}
                 addAudio={addAudio}
                 addVideo={addVideo}
                 addImg={addImg}
                 currentContact={currentContact[0].userName}
                 currentPicture={currentContact[0].picture}
                 recordPopUp={recordPopUp}/>
            </div>
        </div>
    );
}

function addUserToActiveList(userName, nickName, picture) {

    activeUser.push({ 'userName': userName, 'nickName': nickName, 'picture': picture });
}
export default ChatScreen;
export { addUserToActiveList};