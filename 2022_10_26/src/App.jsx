import { useState } from 'react'
import './App.css'
import Job from './pages/Job';
import Skill from './pages/Skill';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  const [linksToDisplay, setLinksToDisplay] = useState([]);

  const newLinksToDisplay = () => {
    console.log(localStorage.getItem('links'))
    setLinksToDisplay(JSON.parse(localStorage.getItem('links')))
  }

  return (
    <BrowserRouter>
      <main>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home linksToDisplay={linksToDisplay}/>} />
          <Route path="/job" element={<Job />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
