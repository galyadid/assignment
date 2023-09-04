import React from 'react';
import './App.css';
import { ContactList } from './features/contact-list/contact-list';

export const App = () => {

  return (
    <div className="App">
       <ContactList/>
    </div>
  );
}

export default App;
