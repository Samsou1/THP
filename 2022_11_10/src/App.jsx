import { useState } from 'react'
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'
import Profile from './pages/Profile'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <main >
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
