import './massageSent.css';

function MassageSent({text}){
    return(
        <div className="media w-50 ml-aut mySent">
            <div className="media-body">
                <div className="bg-secondary rounded py-2 px-3">
                    <p className="text-small mb-0 text-white">{text}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MassageSent;