
import { useState } from "react";
import {GoogleLogin,GoogleLogout } from "react-google-login";
import {Redirect} from 'react-router-dom'
require('dotenv').config()

const Login = ({loginhandler}) => {
   const [showLoginButton,setShowLoginButton]=useState(true);
    const [showLogoutButton,setShowLogoutButton]=useState(false);
    const onLoginSuccess=(res)=>{
      console.log("Login Successfull",res.profileObj)
     setShowLoginButton(false)
     setShowLogoutButton(true)
     loginhandler();
  }
  
     const onFailureSuccess=(res)=>{
       console.log("Login Failed",res)
     }
  
    

    return ( 
        <div>
            {showLogoutButton?<Redirect to="/detail" />:null}
           <div className="d-flex flex-row">

              <div className="col-6">
               <figure><img src="banner.png" alt="banner" className="img-fluid " style={{width:'100%',height:'100vh'}}/></figure>
              </div>

              <div className="col-6 d-flex flex-column justify-content-around align-items-center">
                  <h1 style={{color:'#A4A4A4',fontSize:'2.5rem'}}>Welcome!</h1>
                  <h1 style={{color:'#0ACF83',fontSize:'4rem'}}>Join The Community</h1>
                  
                  <h1 style={{fontSize:'1.5rem'}} className="text-center"> {showLoginButton?
        <GoogleLogin
    clientId={process.env.REACT_APP_CLIENT_ID}
    buttonText="Login With Google"
    onSuccess={onLoginSuccess}
    onFailure={onFailureSuccess}
    cookiePolicy={'single_host_origin'}
    />:null }
    </h1>
                  <div>logos</div>
                 
                  <h1 style={{fontSize:'1.5rem'}}>If you have an account?<span style={{color:' #0ACF83',fontSize:'1.5rem'}}> Sign In here</span></h1>
              </div>

           </div>
        </div>
     );
}
 
export default Login;