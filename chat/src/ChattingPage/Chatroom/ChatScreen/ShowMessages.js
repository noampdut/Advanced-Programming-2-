import MassageGet from "./MassageGet";
import MassageSent from "./MassageSent";

function messageG(str){
    return(
        <MassageGet text={str} />
    );
}
function messageS(str){
    return(
        <MassageSent text={str} />
    );
}

function ShowMessages(messages){
    return messages.map(message => 
        {
            if (message.getM == true){
                return messageG(message.text.toString());
            }
            return messageS(message.text.toString());
        });
}



export default ShowMessages;