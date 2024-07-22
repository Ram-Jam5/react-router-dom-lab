// src/App.jsx
import { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from 'react-router-dom';
import MailboxForm from "./components/MailboxForm";
import MailboxList from "./components/MailboxList";


const App = () => {
  const [mailboxes, setMailboxes] = useState([]) 

  const addBox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }

  return (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<h1>Post Office</h1>} />
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
      {/* <Route path="/mailboxes/:mailboxId" element={<MailboxDetails />} /> */}
    </Routes>
  </>
)
};

export default App;
