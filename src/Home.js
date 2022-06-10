import logo from './transprent-logo.png';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { lazy, Suspense, useEffect, useState } from 'react';


import Detail from './EmployeeDetail.js';

function Home() {
  const [employeeList, setemployeeList] = useState([])
  const navigate = useNavigate();

  const fecthEmployeeList = async () => {
    let apiResponse = await axios.get("https://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=10")
    setemployeeList(apiResponse.data.data)

  }
  useEffect(() => {
    fecthEmployeeList()
  }, [])


  return (
    <main style={{ padding: "1rem 0" }}>
      <div>Employees List</div>
      <br />
      <br />
      <br />
      <br />
      <div className='employeelist'>
        {employeeList.map((employee) => {
          return <div style={{
            display: 'flex',
            width: "100%",
            justifyContent: 'space-between',
            padding: "20px",
            borderBottom: "1px solid",
          }}>
            <div className='employeeName'>{employee.name}</div>
            <div className='employeephone'>{employee.phone}</div>
            <buttion onClick={() => {
              navigate('detail?id=' + employee._id)
            }}>View Detail</buttion>
          </div>
        })}
      </div>
    </main>

  );
};

export default Home;

