

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './Home.css';
// import detail from './EmployeeDetails';
import Pagination from '../pagination';



  function List({employees,handleEdit})
{
  const [employeeList, setemployeeList] = useState([]);
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(1);
  


  const fecthEmployeeList = async () => {
    let apiResponse = await axios.get("https://mockrestapi.herokuapp.com/api/employee?pageNo=1&limit=10")
    setemployeeList(apiResponse.data.data)

  }
  useEffect(() => {
    fecthEmployeeList()
  }, [])

  // const [Del,setDel]=useState([])


  const handleDelete =async(id)=>{
    axios.delete('https://mockrestapi.herokuapp.com/api/employee/'+id)
    .then(response =>{
      if(response.data != null){
        alert("deleted sucessfully!!! please refresh the page");
        
      }
    });
   
    

  }
  useEffect(()=>{
    handleDelete()
  },[])

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
  //  const currentPosts = employeeList.slice(indexOfFirstPost, indexOfLastPost);
 
   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className='container'>
      <table className='striped-table'>
        <thead>
          <tr>
            <th>NO.</th>
            <th>Name</th>
            <th>mobile</th>
            <th>Email</th>
            <th colSpan={3} className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.length > 0 ? 
          (
            employeeList.map((employee, i) => (
              <tr key={employee._id}>
              <td>{i + 1}</td>
              <td> {employee.name}</td>
              <td> {employee.phone}</td>
              <td> {employee.email}</td>

              <td> <button className="button1" onClick={() => {
                navigate('detail?id=' + employee._id)
              }}>Detail</button>
              </td>

              <td> <button 
              onClick={()=>handleEdit
               (employee._id)}className='button3'>Edit</button></td>


              <td> <button onClick={()=>{handleDelete(employee._id)}}
                 className='button2'>Delete</button></td>

            </tr>
        ))):(
        <tr>
          <td colSpan={7}>No Employees</td>
        </tr>)
}
        </tbody>
      </table>

 
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={employeeList.length}
        paginate={paginate}
      />

    </div >

  );
}

export default List;
