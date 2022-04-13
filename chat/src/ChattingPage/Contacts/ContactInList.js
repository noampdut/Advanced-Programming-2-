
function ContactInList({nickName, time, lastMessage, picture}) {

    return (

        <button href="#" class="list-group-item list-group-item-action list-group-item-light rounded-0">
            <div class="media"><img src={picture} alt="user" width="50" class="rounded-circle"></img>
                <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                        <h6 class="mb-0">{nickName}</h6><small class="small font-weight-bold">{time}</small>
                    </div>
                    <p class="font-italic text-muted mb-0 text-small">{lastMessage}</p>
                </div>
            </div>
        </button>

    );

}

export default ContactInList;