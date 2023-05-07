import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
// import Home from './components/pages/home';
import Intro from './components/pages/intro';
import Promo from './components/pages/promo';
import Slides from './components/pages/slides';
import Insights from './components/pages/insights';
import Conclusions from './components/pages/conclusions';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Intro />} />
        {/* <Route path='/home' element={<Home/>} /> */}
        <Route path='/intro' element={<Intro/>} />
        <Route path='/promo' element={<Promo/>} />
        <Route path='/slides' element={<Slides/>} />
        <Route path='/insights' element={<Insights/>} />
        <Route path='/conclusions' element={<Conclusions/>} />
        <Route path='*' element={<Navigate to="/" />} />
    </Routes>
    </Router>
);
}
  
export default App;