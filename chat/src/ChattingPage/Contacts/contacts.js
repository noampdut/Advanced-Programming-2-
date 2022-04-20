const MessagesList = [{'type':"text", 'data':"Hello!", 'getM':true, 'time':""}, 
                        {'type':"text", 'data':"Hii, how are you?", 'getM':false, 'time':""},
                        {'type':"text", 'data':"Great!", 'getM':true, 'time':""}]

const contacts = [{userName: 'Luli', lastMessage :'Great!', time: '12:45', picture: 'luli.jpeg', messages: [...MessagesList]},
                      {userName: 'Oskar', lastMessage :'Great!', time: '10:00', picture: 'poodle.jpg', messages: [...MessagesList]},
                      {userName: 'Dani', lastMessage :'Great!', time: '10:00', picture: 'profile.jpg', messages: [...MessagesList]},
                        {userName: 'Gal Gadot', lastMessage: 'Great!', time: '11:00', picture: "galGadot.jpg", messages: [...MessagesList]},
                        {userName: 'Ronaldo', lastMessage: 'Great!', time: '11:00', picture: "ronaldo.jpg", messages: [...MessagesList]}
                    ];

function IsInContactList(user, contactsList) {
    for (var i = 0; i < contactsList.length; i++) {
        if (contactsList[i].userName == user) {
            alert("This user is alreay in your contacts list");
            return true;
        }
    }
    return false;
}


  export default contacts;
  export {IsInContactList};                               