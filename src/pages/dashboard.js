
import React from 'react';
import { useState } from 'react';
import './Home.css';
import Add from './Add';
import Edit from './Edit';
import Header from './header';
import List from './List';
import Swal from 'sweetalert2';





function Dashboard() {
  const [employees, setemployees] = useState([]);
  const [selectedEmployee, setSelsectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
 


  


  const handleEdit = (_id) => {
    const[employee]=employees.filter(employee=>employee._id===_id);
    setSelsectedEmployee(employee);
    setIsEditing(true);
  
  }
 

  const handleDelete = (_id) => {
      Swal.fire({
        icon: "warning",
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        showCancelButton: true,
        confirmButtonText: 'yes,delete it!',
        cancelButtonText:'No cancel!',
      }).then(result=>{
        if(result.value){
          const [employee]=employees.filter(employee=>
            employee._id);

          Swal.fire({
            icon:'success',
            title:'Deleted',
            text: `${employee.name}'s data has been deleted.`,
            timer:1500,
          });
          setemployees(employees.filter(employee=>employee._id!==_id));
        }
      });

  }
 

  return (
    <div className='container'>
      
      {
        !isAdding && !isEditing && (
          <>
            <Header
              setIsAdding={setIsAdding}
            />
            <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            />
          </>
        )
      }
      {isAdding && (
        <Add
          employees={employees}
          setemployees={setemployees}
          setIsAdding={setIsAdding}
        />

      )}
      {isEditing && (
        <Edit
          employees={employees}
          selectedEmployee={selectedEmployee}
          setemployees={setemployees}
          setIsEditing={setIsEditing}
        />
       

      )}
     


    </div>

  );
};

export default Dashboard;

