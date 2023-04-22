// import React, { useState } from 'react';
// import './App.css';
// import Navbar from './components/navbar';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './components/pages/home';
// import Brainstorm from './components/pages/brainstorm';
// import Generate from './components/pages/generate';
// import Notate from './components/pages/notate';
// import Check from './components/pages/check';
// import Share from './components/pages/share';
// import LoginHome from './components/pages/loginHome';
// import LoginLink from './components/pages/loginLink';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path='/login' element={<LoginHome handleLogin={handleLogin} />} />
//         <Route path='/login-link' element={<LoginLink />} />
//         {isLoggedIn ? (
//           <>
//             <Navbar isLoggedIn={isLoggedIn} />
//             <Route exact path='/' element={<Home />} />
//             <Route path='/home' element={<Home />} />
//             <Route path='/brainstorm' element={<Brainstorm />} />
//             <Route path='/generate' element={<Generate />} />
//             <Route path='/notate' element={<Notate />} />
//             <Route path='/check' element={<Check />} />
//             <Route path='/share' element={<Share />} />
//           </>
//         ) : (
//           <Navigate to='/login' />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/pages/home';
import Brainstorm from './components/pages/brainstorm';
import Generate from './components/pages/generate';
import Notate from './components/pages/notate';
import Check from './components/pages/check';
import Share from './components/pages/share';
import LoginHome from './components/pages/loginHome';
import LoginLink from './components/pages/loginLink';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginHome />} />
        <Route path='/login-link' element={<LoginLink />} />
        <Route exact path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/brainstorm' element={<Brainstorm />} />
        <Route path='/generate' element={<Generate />} />
        <Route path='/notate' element={<Notate />} />
        <Route path='/check' element={<Check />} />
        <Route path='/share' element={<Share />} />
      </Routes>
    </Router>
  );
}

export default App;