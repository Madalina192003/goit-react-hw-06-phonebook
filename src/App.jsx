import React from 'react';
import AddContact from './components/AddContact.jsx';
import ContactList from './components/ContactList.jsx';
import './App.css'; // Stiluri pentru App, adaugă fișierul dacă nu există

function App() {
  return (
    <div className="App">
      <h1>Contact Book</h1>
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
