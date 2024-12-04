import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {

    const { mailboxId } = useParams();
    const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id=== Number(mailboxId));

    if (!singleMailbox) {
        return (
            <p>Mailbox Not Found!</p>
        );
    };

    return (
        <>
          <h1>Mailbox {singleMailbox._id}</h1>
          <h2>Details</h2>
          <dl>
            <li>Box Holder: {singleMailbox.boxholder}</li>
            <br></br>
            <li>Box Size: {singleMailbox.boxSize}</li>
          </dl>
        </>
    );
};

export default MailboxDetails;