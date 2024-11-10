import './Css Files/App.css';
import React, { useEffect, useRef } from 'react';
import NavBar from './Templates/NavBar';
import { useLocation } from 'react-router-dom';
function App() {
  const NavRef = useRef(null);
  const location = useLocation();
  useEffect(() => {
    if (NavRef.current) {
      NavRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="App">
      <NavBar ref={NavRef}></NavBar>
    </div>
  );
}

export default App;
