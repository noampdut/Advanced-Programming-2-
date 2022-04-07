
import './login.css';
import Register from '../Register/Register';
import {useNavigate} from 'react-router-dom';


function Login(){
    const navigate = useNavigate();
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
        <button type="button" class="btn" className="btn-link" onClick={() => navigate("/Register")} >click here </button>
    <span>to register</span>
    </span>
    </div>
    );
}

export default Login;