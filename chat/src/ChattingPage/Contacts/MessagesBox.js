import AddContactButton from "./AddContactButton";
import ContactsListResult from "./ContactsListResult";
import contacts from "./contacts";
import { useState } from "react";

const activeUser = [{ 'userName':'' , 'nickName':'', 'picture':''}];

function MessagesBox(){

    const [contactsList, setContactsList] = useState(contacts);

    const addContact = function (nickName) {
        setContactsList(contacts.unshift({ nickName: nickName, lastMessage: '', time: '', picture: 'luli.jpeg' }));
    }

    const onchange = function (e) {
        const newContact = [{ nickName: e.target.value, lastMessage: '', time: '', picture: 'luli.jpeg' }];
        setContactsList([...contactsList, ...newContact]);
    }

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

                                <ContactsListResult contactsList={contacts} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-7 px-0">


            </div>


        </div>

    );

}

function addUserToActiveList(userName, nickName, picture) {

    activeUser.push({ 'userName':userName , 'nickName': nickName, 'picture': picture});
}

export default MessagesBox;
export {addUserToActiveList};
