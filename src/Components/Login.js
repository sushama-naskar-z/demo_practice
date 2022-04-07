import React, { useState,useEffect } from 'react'
import AdminHome from './AdminHome';
import Home from './Home';
import UserHome from './UserHome';
import { GoogleLogin } from 'react-google-login';
import { GoogleLogout } from 'react-google-login'
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
 const [authenticated, setAuthenticated] = useState(false);

  const clientId=process.env.REACT_APP_googleClientID;
  const responseGoogle = (response) => {
    console.log(response);
    // console.log(response.tokenObj.id_token);
    setAuthenticated(true);
    
    localStorage.setItem('user', JSON.stringify(response));

    navigate('/Home')
  }
  const onLogoutSuccess=()=>{
    console.log('logout')
    setAuthenticated(false)
    
    localStorage.clear();

    navigate('/')

  }
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if(loggedInUser){
      setAuthenticated(true);
    }
   
  }, []);
  return (
    <div>
      <GoogleLogin
    clientId={clientId}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    
  />
 <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onLogoutSuccess}
    />
    {
      authenticated==true?<div></div>:<div>not authenticated</div>
    }

    </div>
  )
}

// {authenticated == false ? <Home handleAuthentication={handleAuthentication} /> : <UserHome/>}