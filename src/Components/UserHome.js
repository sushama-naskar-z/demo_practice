import React,{useEffect, useState} from 'react';
import UserNav from './UserNav';
import Filters from './Filters';
import './userhome.css';
import Booklist from './Booklist';
import NewNav from './NewNav';





export default function UserHome() {
  const [userType,setUserType]=useState("Admin");

  const toggleUser=()=>{
      console.log("toggler");
    if(userType=="Admin"){
      setUserType("generalUser");
    }else{
      setUserType("Admin");
    }
  }

  const[showDiv,setShowDiv]=useState("search");

  const funShowDiv=(id)=>{
    if(id=='search'){
      setShowDiv('search');
    }else{
      setShowDiv('filter')
    }

  }

  return (
    <div>
    {/* {  <button onClick={toggleUser}>Toggle User</button>
     <UserNav userType={userType} funShowDiv={funShowDiv}/>
     
     {
       showDiv=="search"?<div className='search'><input id="search" type="text" placeholder='Search'/></div>:<Filters/>
     }} */}
     <NewNav/>
     <Booklist/>
    
    </div>
  )
}
