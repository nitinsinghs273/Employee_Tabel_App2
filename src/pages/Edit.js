import React from "react";
// import Swal from "sweetalert2";
import './Home.css';




function Edit({ employees, selectedEmployee, setEmployees, setIsEditing}){
   
    


   
         
 
    const handleUpdate=e=>{
        alert("this is for update and still not complete")
    }

    // const handleUpdate = e => {
    //     e.preventDefault();

    //     if (!name || !mobile || !email || !age) {
    //         return Swal.fire({
    //             icon: 'error',
    //             title: 'Error!',
    //             text: 'All fields are required.',
    //             showConfirmButton: true
    //         });
    //     }

    //     const employee = {
    //         id,
    //         name,
    //         email,
    //         mobile,
    //         age
    //     };

    //     for (let i = 0; i < employees.length; i++) {
    //         if (employees[i]._id === id) {
    //             employees.splice(i, 1, employee);
    //             break;
    //         }
    //     }

    //     setemployees(employees);
    //     setIsEditing(false);

    //     Swal.fire({
    //         icon: 'success',
    //         title: 'Updated!',
    //         text: `${employee.name}'s data has been updated.`,
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    // };


    return(

       <div>
        <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label  className="label" htmlFor="name">First Name</label>
                <input
                    id="name"
                    type="text"
                    name="firstName"
                    // value={firstName}
                //     onChange={e => setFirstName(e.target.value)}
                />
                <label   className="label" htmlFor="email"> Employee Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    // value={email}
                    // onChange={e => setEmail(e.target.value)}
                />
                <label  className="label" htmlFor="mobile">Mobile Number</label>
                <input
                    id="mobile"
                    type="text"
                    name="moile"
                    // value={email}
                    // onChange={e => setEmail(e.target.value)}
                />
                <label  className="label" htmlFor="age">Employee Age</label>
                <input
                    id="age"
                    type="text"
                    name="age"
                    // value={email}
                    // onChange={e => setEmail(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input className="submittbutton"  type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="mutted-button"
                        type="button"
                        value="Cancel"
                        // onClick={() => setIsEditing(false)}
                    />
                </div>
        </form>
       </div>
        

       
    );
};
export default Edit;