import ReactDOM from 'react-dom/client';
import React from 'react';
import { addUserToActiveList } from '../ChattingPage/Contacts/MessagesBox';

const usersList=[{
    'userName':'noampdut',
    'nickName':'noamit',
    'picture':'luli.jpeg',
    'password':'n123456'}, { 
    'userName':'lilachLacham',
    'nickName':'lilachit',
    'picture':'poodle.jpg',
    'password':'l123456'  
    }];

function insertNewUser(userName, nickName, picture, password){
    usersList.push({userName, nickName, picture, password});

}

function isExists(username){
    for (var i=0; i<usersList.length; i++){
        if (usersList[i].userName == username){
            return true;
        }
    }
    return false;
}

function userIdentification(username, Password) {
    for (var i = 0; i < usersList.length; i++) {
        if (usersList[i].userName == username && usersList[i].password == Password) {
            alert("You are signed");
            //this.props.history.push('/ChattingPage');
            addUserToActiveList(usersList[i].userName, usersList[i].nickName, usersList[i].picture);
            //alert("add");
            return true;
        }
        alert("You haven't signed up for the site yet.")
        return false;
    }
}
export {insertNewUser, isExists, userIdentification};