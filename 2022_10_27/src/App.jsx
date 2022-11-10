import { useState } from 'react'
import './App.css'
import Contact from './components/Contact';
import Header from './components/Header';
import Works from './components/Works';
import React, { createContext } from 'react';
import nightMode from './assets/nightMode';

function App() {
  const [nM, setNM] = useState(false);

  return (
    <div className="App">
      <nightMode.Provider value={{nM, toggleNM:() => {setNM(!nM)}}}>
        <Header />
        <Works />
        <Contact />
      </nightMode.Provider>
    </div>
  )
}

export default App
