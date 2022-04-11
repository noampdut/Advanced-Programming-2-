import ContactInList from "./ContactInList";

function ContactsListResult({ contactsList }) {
    const contactList = contactsList.map((data, key) => {
        return <ContactInList {...data} />
    });

    return (
        <div>
            {contactList}
        </div>

    );

}

export default ContactsListResult;