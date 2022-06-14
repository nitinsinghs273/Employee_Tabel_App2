
import {  useEffect} from 'react';
import axios from 'axios';
import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';


function EmployeeDetails() {
  const [employee, setemployee] = React.useState(null);
  const navigate = useNavigate();


  const fecthEmployeeDetails = async () => {
    let urlQuery = new URLSearchParams(window.location.search);
    let apiResponse = await axios.get("https://mockrestapi.herokuapp.com/api/employee/" + urlQuery.get("id"));
    setemployee(apiResponse.data.data);

  };
  useEffect(() => {
    fecthEmployeeDetails();
  }, []);


  return (
    <main style={{ padding: "1rem 0" }}>
      <h2 className='Detail' >Employee Details</h2>

      <button className='buttonB' onClick={()=>navigate('/')}>Back</button>
      {employee != null ? (
        <div>
          <div className='details'>
            <div className='labels'>Name</div>
            <div>{employee.name}</div>
          </div>

          <div className='details'>
            <div className='labels'>Age</div>
            <div>{employee.age}</div>
          </div>
          <div className='details'>
            <div  className='labels'>Address</div>
            <div>{employee.address}</div>
          </div>
          <div className='details'>
            <div  className='labels'>Country</div>
            <div>{employee.country}</div>
          </div>
          <div className='details'>
            <div  className='labels'>CreatedAt</div>
            <div>{employee.createdAt}</div>
          </div>
          <div className='details'>
            <div  className='labels'>updatedAt</div>
            <div>{employee.updatedAt}</div>
          </div>
          <div className='details'>
            <div  className='labels'>ID</div>
            <div>{employee._id}</div>
          </div>
          

          <div className='details'>
            <div  className='labels'>Email</div>
            <div>{employee.email}</div>
          </div>
          <div className='details'>
            <div  className='labels'>Mobile Number</div>
            <div>{employee.phone}</div>
          </div>{" "}

        </div>) : ("Loading")}

    </main>

  );
}


export default EmployeeDetails;
