import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import StudyCase from './pages/Work/StudyCase';

function App() {
  return (
    <>
      <BrowserRouter>
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<Work />} />
            <Route path="/works/:works" element={<StudyCase />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App;
