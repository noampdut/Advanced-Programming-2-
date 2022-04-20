import ContactsListResult from "./ContactsListResult";

function MessagesBox({contactsList,changeContact}) {
    return(
        <div className="messages-box">
            <div className="list-group rounded-0">
                <ContactsListResult contactsList={contactsList} changeContact={changeContact} />
            </div>
        </div>
    );
    }
    
    export default MessagesBox;