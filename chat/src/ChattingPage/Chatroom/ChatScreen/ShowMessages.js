import MassageGet from "./MassageGet";
import MassageSent from "./MassageSent";

function ShowMessages(messages){
   for (var i = 0; i< messages.length(); i++){
        if (messages[i].getM == true){
            MassageGet(messages[i].text);
        }
        MassageSent(messages[i].text);
   }
}


export default ShowMessages;