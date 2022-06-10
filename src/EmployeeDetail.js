
import { lazy, Suspense, useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';




function EmployeeDetails() {
  const [employee, setemployee] = React.useState('');


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
      <h2 style={{textalign: "center"}}>Employee Details</h2>
      {employee != null ? (
        <div>
          <div style={Styles.row}>
            <div>Name</div>
            <div>{employee.name}</div>
          </div>

          <div style={Styles.row}>
            <div>Age</div>
            <div>{employee.age}</div>
          </div>

          <div style={Styles.row}>
            <div>Email</div>
            <div>{employee.email}</div>
          </div>
          <div style={Styles.row}>
            <div>Mobile Number</div>
            <div>{employee.phone}</div>
          </div>{" "}

        </div>) : ("Loading")}

    </main>

  );
}
const Styles={
  row:{
    
    display: "flex",
    width : "80%",
    
    justifyContent:"space-between",
    padding:"20px",
    borderBottom:"1px solid",
  }
}

export default EmployeeDetails;
