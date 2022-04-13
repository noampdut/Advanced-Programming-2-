import AddContactButton from "./AddContactButton";
import ContactsListResult from "./ContactsListResult";
import contacts from "./contacts";
import { useState } from "react";

const activeUser = [{ 'userName':'' , 'nickName': '', 'picture': ''}];

const MessagesBox = () => {

    const [contactsList, setContactsList] = useState(contacts);

    const addContact = function (nickName) {
        setContactsList(contacts.unshift({ nickName: nickName, lastMessage: '', time: '', picture: 'luli.jpeg' }));
    }

    const onchange = function (e) {
        const newContact = [{ nickName: e.target.value, lastMessage: '', time: '', picture: 'luli.jpeg' }];
        setContactsList([...contactsList, ...newContact]);
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

                                <ContactsListResult contactsList={contacts} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-7 px-0">


            </div>


        </div>

    );

}

function addUserToActiveList(userName, nickName, picture) {

    activeUser.push({ 'userName':userName , 'nickName': nickName, 'picture': picture});
}

export default MessagesBox;
export {addUserToActiveList};
