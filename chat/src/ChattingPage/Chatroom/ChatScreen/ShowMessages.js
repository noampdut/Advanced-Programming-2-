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
    var x= messages[0].text.getString;
    x=3;
    alert(x);
   for (var i = 0; i< messages.length; i++){
        if (messages[i].getM == true){
            messageG(messages[i].text.toString);
        }
        messageS(messages[i].text.toString);
   }
}



export default ShowMessages;