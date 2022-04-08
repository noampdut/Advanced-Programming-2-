
import './login.css';
import Register from '../Register/Register';
import {useNavigate} from 'react-router-dom';
import DataBase from '../DataBase/dataBase';

function Login(){
    const navigate = useNavigate();
    return(
    <div className="login">
    <div className="title">
        Login
    </div>
    <form>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Username:</label>
            <input type="name" className="form-control"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
        </div>
        <a href="chat.html"><button className="btn btn-light">login</button></a>
    </form> 
    <span> Not registered?
        <button type="button" className="btn btn-link" onClick={() => navigate("/Register")} >click here </button>
    <span>to register</span>
    </span>
    </div>
    );
}
 

export default Login;