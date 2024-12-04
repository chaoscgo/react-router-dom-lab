import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';


const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBox) => {
    newBox._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newBox]);
  };

  console.log(mailboxes);

  return (
   <>
     <NavBar />
     <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>} />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
     </Routes>
   </>
  )
};

export default App;
