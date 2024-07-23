// src/App.jsx
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import NavBar from "./components/NavBar";
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";
import MailboxDetails from "./components/MailboxDetails";


const App = () => {
  const [mailboxes, setMailboxes] = useState([]) 
  
  const addBox = (formData) => {
    const newMailbox = {...formData, _id: mailboxes.length + 1};
    setMailboxes([...mailboxes, newMailbox])
  }


  return (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<h1>Post Office</h1>} />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      <Route path="*" element={<h2>Mailbox Not Found!</h2>} />
    </Routes>
  </>
)
};

export default App;
