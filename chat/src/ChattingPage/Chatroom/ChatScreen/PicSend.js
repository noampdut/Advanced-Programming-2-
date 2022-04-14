import './PicSend.css';

function PicSend(pic){
    return(
        <div className="mb-2 sendPic">
            <div className="media-body">
                <div className="py-2 px-3">
                    <img className='piiiic' src={pic} />
                </div>
            </div>
        </div>
    );
}

export default PicSend;