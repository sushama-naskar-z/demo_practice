import React from 'react';
import './home.css';
import Googleicon from '../images/googleicon.png'
import {useState} from 'react';

export default function Home({handleAuthentication}) {
    console.log(handleAuthentication)
   
    return (
        <div className='home'>
         
        </div>
    )
}


{/* <div className='left_div'>
<div className='about_us'>
    <h1>About Us</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus, purus nec placerat fringilla, arcu massa fermentum ligula, interdum eleifend eros nulla et velit. Praesent lacus lorem, rhoncus sit amet lacinia nec, blandit pharetra orci. Vivamus efficitur turpis vitae urna bibendum, eget volutpat lacus porta.</p>
</div>
</div>
<div className='right_div'>
<div >
    <h3>Hello!</h3>
    <p> Praesent lacus lorem, rhoncus sit amet lacinia nec, blandit pharetra orci. </p>
</div>
<div className='signin_btn'><div>
    <button onClick={()=>{handleAuthentication()}}>
       <div><img src={Googleicon} className="google_icon" /></div> 
      <div>Sign in with Google</div>  
    </button>
</div>
</div>
</div> */}