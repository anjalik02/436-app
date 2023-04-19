import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Brainstorm from './components/pages/brainstorm';
import Generate from './components/pages/generate';
import Notate from './components/pages/notate';
import Check from './components/pages/check';
import Share from './components/pages/share';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/brainstorm' element={<Brainstorm/>} />
        <Route path='/generate' element={<Generate/>} />
        <Route path='/notate' element={<Notate/>} />
        <Route path='/check' element={<Check/>} />
        <Route path='/share' element={<Share/>} />
    </Routes>
    </Router>
);
}
  
export default App;