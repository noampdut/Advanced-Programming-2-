const contacts = [{nickName: 'Luli', lastMessage :'How are you?', time: '12:45', picture: 'luli.jpeg'},
                      {nickName: 'Lilachit', lastMessage :'O.K', time: '10:00', picture: 'poodle.jpg'},
                      {nickName: 'Nitzan', lastMessage :'O.K', time: '10:00', picture: 'poodle.jpg'}];

function IsInContactList(userName) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].nickName == userName) {
            alert("This user is alreay in your contacts list");
            return true;
        }
    }
    return false;
}


  export default contacts;
  export {IsInContactList};