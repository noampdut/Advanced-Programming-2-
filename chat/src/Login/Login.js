
import './login.css';
import Register from '../Register/Register';
import {BrowserRouter as Router, Route, Link, BrowserRouter, Routes} from 'react-router-dom';



function Login(){
    return(
    <div class="login">
    <div class="title">
        Login
    </div>
    <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username:</label>
            <input type="name" class="form-control"></input>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password:</label>
            <input type="password" class="form-control" id="exampleInputPassword1"></input>
        </div>
        <a href="chat.html"><button class="btn btn-light">login</button></a>
    </form> 
    <span> Not registered?
    <BrowserRouter>
       <Link to="/Register" >click </Link>
       <Routes>
           <Route path='/Register' element={ <Register/ >}></Route> 
       </Routes>
       </BrowserRouter>
       
        <span>to register</span>
    </span>
    </div>
    );
}

export default Login;