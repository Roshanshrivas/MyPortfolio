import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Projects from './components/Project';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App