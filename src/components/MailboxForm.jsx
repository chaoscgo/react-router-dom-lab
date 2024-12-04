import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    _id: 0,
    boxSize: '',
    boxholder: '',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addMailbox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({ ...formData, [target._id]: target.value});
    };

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Enter a Boxholder:</label>
                <input
                  type="number"
                  id="id"
                  name="id"
                  value={formData._id}
                  onChange={handleChange}
                />
                <label htmlFor="boxSize">Select a Box Size:</label>
                <input
                  type="text"
                  id="boxSize"
                  name="boxSize"
                  value={formData.boxSize}
                  onChange={handleChange}
                />
                
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm;