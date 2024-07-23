import { useParams } from "react-router-dom";


const MailboxDetails = ({mailboxes}) => {
    const { mailboxId } = useParams();
    
    const selectedBox = mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );
    
    if (!selectedBox) {
        return (
            <>
                <h1>Mailbox not found!</h1>
            </>
        )
    }



    return (
        
        
        <>
            <h1>Mailbox {mailboxId}</h1>
            <h2>Details:</h2>
            <dl>
                <dt>Boxholder:</dt>
                <dd>{selectedBox.boxholder}</dd>
                <dt>Box Size:</dt>
                <dd>{selectedBox.boxsize}</dd>
            </dl>
        </>
    )
}

export default MailboxDetails