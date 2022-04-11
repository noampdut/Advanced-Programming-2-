import './popUp.css';
import React from 'react'; 


function PopUp(props){
   if(props.value){
       return(
           <div className="btn-light popup">
               <div className="popup-inner">
                   <button type="button" className="btn-close myClose" aria-label="Close" onClick={()=>props.setValue(false)}></button>
                   <div className="mb-3">
                       <br></br>
                       <label htmlFor="formFile" className="form-label">please choose a file</label>
                       <br></br>
                       <input className="form-control" type="file" id="formFile" />
                       <button type="button" className="btn btn-outline-secondary">Send</button>
                   </div>
               </div>
           </div>
       );
   }
   else
   return("");
}

export default PopUp;