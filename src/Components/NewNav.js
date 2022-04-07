import React,{useState} from 'react';
import { ReactComponent as Filters } from '../images/filters.svg';
import { ReactComponent as Close } from '../images/close.svg';
import { ReactComponent as Search } from '../images/search.svg';
import {ReactComponent as AddBook} from '../images/addbook.svg';
import FilterCom from './Filters'
import './newnav.css'
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

export default function NewNav() {
const [showSideBar,setShowSideBar]=useState(false);
const handleOnClick=()=>{
  setShowSideBar(true);
}
  return (
    <div className='nav'>
      
      <div className='nav_left'><Filters className="nav_svg" onClick={()=>{handleOnClick()}}/></div>
        <div className='nav_middle'>
            <input placeholder='Search'/>
            <Search className="nav_svg"/>
        </div>
        <div className='nav_right'>
            <div className='sign_in_text'>Sign in</div>
            <div><AddBook className="nav_svg"/></div>
        </div>
      <div>
      
            <SlidingPane
          closeIcon={<div style={{width:200,fontSize:24,textAlign:'center'}}>Hello, User </div>}
          isOpen={showSideBar}
          
          from="left"
          width="300px"
          onRequestClose={() => setShowSideBar(false )}
        >
        <FilterCom/>
        </SlidingPane>
       
        
        </div>

    </div>
  )
}

{/* <div style={{color:"red",position:"absolute",left:310,top:5,width:50,border:'1px solid black'}}><Close c/></div> */}