import React from 'react';
import { Routes,Route } from 'react-router-dom';

import './App.css';
import Dashboard from './pages/dashboard.js';
import EmployeeDetails from './pages/EmployeeDetails';




const App = () => {
  return (
    <>
    
   
    <Routes>
    <Route path="/" element={<Dashboard/>}/>
      <Route path="/detail" element={<EmployeeDetails/>}/>
    </Routes>
    </>
    
  );
}

export default App;
