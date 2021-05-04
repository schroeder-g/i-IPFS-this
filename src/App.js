import './App.css';
import React, { useState } from 'react';
import Landing from './components/landing/Landing.js';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app" style={{backgroundColor: 'black'}}>   
      <Landing />
    </div>
  );
}

export default App;
