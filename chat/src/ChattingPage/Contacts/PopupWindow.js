import './PopupWindow.css';
import { insertNewContact } from './MessagesBox';
import {useState} from 'react';


function Popup(props) {

    
    
    const onChange = e => 
    {
        
        props.onchange(e);
        //alert("yeeeh!");
    };
    const onSubmit = e => 
    {
    
        e.preventDefault();
        //props.addContact(e);
        
    };

    return (props.trigger) ? (
        <div className="window" >
            <div className="title"> Add New Contact</div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Contact`s Name</label>
                    <input type="name" id="nickName" name="nickName" onChange={onChange} className="form-control"></input>
                </div>
                <button type="button" className="btn btn-light" onSubmit={onSubmit} >Add </button>&nbsp;&nbsp;
                <button type="button" className="btn btn-light" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </form>

        </div>
    ) : "";

}


export default Popup;