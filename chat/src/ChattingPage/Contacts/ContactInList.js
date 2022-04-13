
function ContactInList({nickName, time, lastMessage, picture}) {

    return (

        <button href="#" className="list-group-item list-group-item-action list-group-item-light rounded-0">
            <div className="media"><img src={picture} alt="user" width="50" className="rounded-circle"></img>
                <div className="media-body ml-4">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <h6 className="mb-0">{nickName}</h6><small className="small font-weight-bold">{time}</small>
                    </div>
                    <p className="font-italic text-muted mb-0 text-small">{lastMessage}</p>
                </div>
            </div>
        </button>

    );

}

export default ContactInList;