import React from "react";
import {useState,useRef,useEffect} from "react";
import Swal from 'sweetalert2';
import './Home.css';
import './List'
function Add({employees,setemployees,setIsAdding}){

    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [mobile,setmobile]= useState('');
    const [age,setage]= useState('');
    const textInput=useRef(null);

    useEffect(()=>{
        textInput.current.focus(); 
    },[])


    const handleAdd=e=>{
        e.preventDefault();
        if(!name||!email||!mobile||!age){
            return Swal.fire({
                icon:'error',
                title:'Error',
                text:'All fields are required.',
                showConfirmButton:true
            });
        }
        
        let _id = employees._id;
        const id = _id;
        const newEmployee={
            _id:id,
            name,
            mobile,
            email,
            age
        }
        employees.push(newEmployee);
        setemployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text:`${name}'s data has been Added.`,
            showConfirmButton:false,
            timer:1500
        })

    }
    return(
        <div className="small-container">
           <form onSubmit={handleAdd}>
            <h1>Add Employee</h1>
            <label  htmlFor="name" className="label">Employee Name </label>
            <input
            id='name'
            type='text'
            ref={textInput}
            value={name}
            name="name"
            onChange={e=>setName(e.target.value)}
            />
      
            <label htmlFor="mobile" className="label">Mobile Number</label>
            <input
            id='mobile'
            type='text'
            value={mobile}
            name="moble"
            onChange={e=>setmobile(e.target.value)}
            />
          
            <label  htmlFor="email"className="label">Email Id</label>
            
            <input
            id='email'
            type='text'
            value={email}
            name="email"
            onChange={e=>setEmail(e.target.value)}
            />
          
            <label htmlFor="age" className="label">Employee Age</label>
            <input
            id='age'
            type='text'
            value={age}
            name="age"
            onChange={e=>setage(e.target.value)}
            />
          

            <div style={{marginTop:'30px'}}>
                <input className="submittbutton" type='submit' value="Add"/>
                <input
                    style={{marginLeft:'12px'}}
                    className="mutted-button"
                    type="button"
                    value="cancel"
                    onClick={()=>setIsAdding(false)
                    }

                    />
            </div>
            </form> 
        </div>
    )
}
export default Add;