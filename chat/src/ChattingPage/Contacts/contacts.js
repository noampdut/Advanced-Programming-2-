const MessagesList = [{'type':"text", 'data':"Hello!", 'getM':true, 'time':""}, 
                        {'type':"text", 'data':"Hii, how are you?", 'getM':false, 'time':""},
                        {'type':"text", 'data':"Great!", 'getM':true, 'time':""}]

const contacts = [{userName: 'Luli', lastMessage :'How are you?', time: '12:45', picture: 'luli.jpeg', messages: [...MessagesList]},
                      {userName: 'Oskar', lastMessage :'O.K', time: '10:00', picture: 'poodle.jpg', messages: [...MessagesList]},
                      {userName: 'Noam', lastMessage :'O.K', time: '10:00', picture: 'noampdut.jpg', messages: [...MessagesList]},
                        {userName: 'Gal Gadot', lastMessage: 'o.k', time: '11:00', picture: "galGadot.jpg", messages: [...MessagesList]},
                        {userName: 'Ronaldo', lastMessage: 'o.k', time: '11:00', picture: "ronaldo.jpg", messages: [...MessagesList]}
                    ];

function IsInContactList(user) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].userName == user) {
            alert("This user is alreay in your contacts list");
            return true;
        }
    }
    return false;
}


  export default contacts;
  export {IsInContactList};                               