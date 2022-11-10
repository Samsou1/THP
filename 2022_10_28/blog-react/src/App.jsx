import './App.css'
import Article from './pages/Article'
import Home from './pages/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:article" element={<Article />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
