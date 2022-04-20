import { addUserToActiveList } from "../ChattingPage/Chatroom/ChatScreen/ChatScreen";


var usersList = [{
    'userName': 'noampdut',
    'nickName': 'noamit',
    'picture': 'profile.jpg',
    'password': 'n123456'
}, {
    'userName': 'lilach',
    'nickName': 'lilachit',
    'picture': 'poodle.jpg',
    'password': 'l123456'
}];

function insertNewUser(user, nickName, picture, password) {

    if (picture == ""){
        picture = "User-Profile.png";
    }
    usersList.push({ 'userName': user, 'nickName': nickName, 'picture': picture, 'password': password });

}

function isExists(username) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == username) {
            return true;
        }
    }
    return false;
}

function userIdentification(user, Password) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == user) {
            if (usersList[i].password == Password) {
                addUserToActiveList(usersList[i].userName, usersList[i].nickName, usersList[i].picture);
                return true;
            }
            alert("Wrong password");
            return false;
        }
    }
    alert("You haven't signed up for the site yet.")
    return false;
}

function isInUserList(user) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == user) {
            return true;
        }
    }
    alert("This user is not registered");
    return false;
}

function getPic(user){
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == user) {
            return usersList[i].picture;
        }
    }
}



export { insertNewUser, isExists, userIdentification, isInUserList, getPic};