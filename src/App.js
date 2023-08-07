import Nav from './components/nav';
import Header from './components/header';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom"
import About from './components/pages/about';
import Resume from './components/pages/resume';
import Contacts from './components/pages/contacts';
import CustomLoader from './components/customLoader/CustomLoader';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  


  return (
    <div className='container-fluid'>
      {isLoading ? <CustomLoader /> : null}
       <Nav/>
      <Routes>
        <Route path="/" element={  <Header/> } />  
        <Route path="/about" element={  <About/> } />
        <Route path="/resume" element={  <Resume/> } />  
        <Route path="/contacts" element={  <Contacts/> } />  
      </Routes>
     
    </div> 
  );
}

export default App;
