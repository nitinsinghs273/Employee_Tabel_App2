import {Routes,Route} from 'react-router-dom';
import './App.css';
import Signup from './Signup.js';
import OTP from './OTP.js';
import LAST from './LAST.js';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Signup/>}/>
     <Route exact path ="/otp" element={<OTP/>}/>
      
      <Route path ='/last' element={<LAST/>}/>
    </Routes>
    </>
    
  );
}

export default App;
