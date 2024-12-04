import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    console.log(props);

    const { mailboxId } = useParams();
    const singleMailbox = props.mailboxes.find((mailbox) => mailbox._id === Number(mailboxId));
    console.log('Mailbox object:', singleMailbox)

    return (
        <>
          <h2>{singleMailbox._id}</h2>
          <dl>
            <dt>Box Size:</dt>
            <dd>{singleMailbox.boxSize}</dd>
            <dt>Box Holder:</dt>
            <dd>{singleMailbox.boxholder}</dd>
          </dl>
        </>
    );
};

export default MailboxDetails;