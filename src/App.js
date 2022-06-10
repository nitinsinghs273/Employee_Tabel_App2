import {Routes,Route} from 'react-router-dom';

import './App.css';
import Home from './Home.js';
import Detail from './EmployeeDetail.js';


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
     <Route exact path ="/detail" element={<Detail/>}/>
      
      
    </Routes>
    </>
    
  );
}

export default App;
