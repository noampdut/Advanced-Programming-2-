const contacts = [{userName: 'Luli', lastMessage :'How are you?', time: '12:45', picture: 'luli.jpeg'},
                      {userName: 'Oskar', lastMessage :'O.K', time: '10:00', picture: 'poodle.jpg'},
                      {userName: 'Noam', lastMessage :'O.K', time: '10:00', picture: 'noampdut.jpg'},
                        {userName: 'Gal Gadot', lastMessage: 'o.k', time: '11:00', picture: "galGadot.jpg"},
                        {userName: 'Ronaldo', lastMessage: 'o.k', time: '11:00', picture: "ronaldo.jpg"}
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