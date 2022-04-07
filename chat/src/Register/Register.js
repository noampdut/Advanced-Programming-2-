import './register.css';
import validationPassword from './validation';

function Register() {
 return (
     <div class="register">
         <div class="title">
             Register
         </div>
         <form>
             <div class="mb-3">
                 <label for="exampleInputEmail1" class="form-label">Username:</label>
                 <input type="name" id="userName" class="form-control"></input>
             </div>
             <div class="mb-3">
                 <label for="exampleInputEmail1" class="form-label">Nickname:</label>
                 <input type="name" id="nickName" class="form-control"></input>
             </div>

             <div class="input-group mb-3">
                 <input type="file" id="picture" class="form-control"></input>
             </div>

             <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Password:</label>
                 <input type="password" class="form-control" id="password"></input>
             </div>
             <div class="mb-3">
                 <label for="exampleInputPassword1" class="form-label">Confirm Password:</label>
                 <input type="password" class="form-control" id="confirmPassword"></input>
             </div>
             <button type="button" onClick={checkForm} class="btn btn-light" >Register</button>
         </form>

     </div>  
 );

}


function checkForm() {
var userName = document.getElementById("userName").value;
var nickName = document.getElementById("nickName").value;
var password = document.getElementById("password").value;
var confirmPassword = document.getElementById("confirmPassword").value;
var picture = document.getElementById("picture").value;

if(userName.length == 0 || nickName.length==0 || password.length==0 || confirmPassword.length==0) {
 alert("Please fill all the fields");
 return false;
}

if(!validationPassword(password)) {
    return false;
}

if(confirmPassword != password) {
    alert("Invalid password verification.");
    return false;
}
return true;
}



export default Register;