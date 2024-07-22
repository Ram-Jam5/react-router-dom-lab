const MailboxList = (props) => {
    return (
        <>
        <h2>Mailboxes</h2>
        <ul>
            {props.mailboxes.map((currentMailbox) => (
                <li key={currentMailbox._id}>{currentMailbox.name}</li>
            ))}
        </ul>
        
        
        
        
        </>
    )
}
export default MailboxList