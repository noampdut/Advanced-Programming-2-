import { useState } from "react";

const usersList=[{
    'userName':'noamPdut',
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
    //const [users, setUsers]=useState(usersList);

    //const user={'userName':'', 'nickName':'', 'picture':'', 'password':''};
}

function isExists(username){
    for (var i=0; i<usersList.length; i++){
        if (usersList[i].userName == username){
            return true;
        }
    }
    return false;
}




export {insertNewUser, isExists};