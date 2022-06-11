import React from "react";
import "./Home.css";
function Header({setIsAdding}){
    return(
       <header>
        <h1>Employee Management System</h1>
        <button onClick={()=>setIsAdding(true)} className="button">Add Employee</button>

       </header>
    )
}
export default Header;