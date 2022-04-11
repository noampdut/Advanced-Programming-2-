import ContactInList from "./ContactInList";
import AddContactButton from "./AddContactButton";
import ContactsListResult from "./ContactsListResult";
import contacts from "./contacts";
import { useState } from "react";


const MessagesBox = () => {

    const [contactsList, setContactsList] = useState(contacts);
     const addContact = function(e){
         //alert("line 12 Messages Box!");
         const newContact = [{nickName:e.target.value, lastMessage :'', time: '', picture: 'luli.jpeg'}];
        // contacts.push({newContact});
        setContactsList([...contactsList, ...newContact]);
        alert("added!!!!!!!");

         
     }

     const onchange = function(e){
        //alert("line 18 Messages Box!!");
        const newContact = [{nickName:e.target.value, lastMessage :'', time: '', picture: 'luli.jpeg'}];
        setContactsList([...contactsList, ...newContact]);
    }

    
 
    return (

        <div class="container py-5 px-4">
          
            <div class="row rounded-lg overflow-hidden shadow">
               
                <div class="col-5 px-0">
                    <div class="bg-white">

                        <div class="bg-gray px-4 py-2 bg-light">
                            <p class="h5 mb-0 py-1">Contacts &nbsp;&nbsp;&nbsp;&nbsp; 
                            <span>
                                <AddContactButton addContact={addContact} onchange={onchange} /> 
                                </span>
                                </p>
                        </div>
                        
                        <div class="messages-box"> 
                            <div class="list-group rounded-0">
                            
                               <ContactsListResult contactsList={contactsList}  />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
               
                <div class="col-7 px-0">
                    <div class="px-4 py-5 chat-box bg-white">
                       
                        </div>

                    </div>


                    </div>

    );

}

function insertNewContact(nickName){
    contacts.push({nickName});
    alert("we");
    for (var i=0; i<contacts.length; i++){
        if (contacts[i].nickName == nickName){
           
            alert("we did it!");
        
        }
    }

}



export default MessagesBox;
export {insertNewContact};
