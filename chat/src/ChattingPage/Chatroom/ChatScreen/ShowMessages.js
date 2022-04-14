import MassageGet from "./MassageGet";
import MassageSent from "./MassageSent";
import PicSend from "./PicSend";

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
    return messages.map(message => {
            if (message.getM == true){
                if (message.type.toString() == "text"){
                    return messageG(message.data.toString());
                }
            }else {
                if (message.type.toString() == "text"){
                    return messageS(message.data.toString());
                } if (message.type.toString() == "pic"){
                    return PicSend(message.data);
                }
            }
           
        });
}



export default ShowMessages;