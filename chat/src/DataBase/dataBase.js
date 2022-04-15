import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";
import { addUserToActiveList } from "../ChattingPage/Chatroom/ChatScreen/ChatScreen";

var usersList = [{
    'userName': 'noampdut',
    'nickName': 'noamit',
    'picture': 'luli.jpeg',
    'password': 'n123456'
}, {
    'userName': 'lilach',
    'nickName': 'lilachit',
    'picture': 'poodle.jpg',
    'password': 'l123456'
}];

function insertNewUser(userName, nickName, picture, password) {
    usersList.push({ 'userName': userName, 'nickName': nickName, 'picture': picture, 'password': password });

}

function isExists(username) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == username) {
            return true;
        }
    }
    return false;
}

function userIdentification(username, Password) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == username) {
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

function isInUserList(userName) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == userName) {
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