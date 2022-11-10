import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'

export default function FullWidthTextField() {
  const [mail,setMail]=useState("")
  const handleemail=(mailchange)=>{
    setMail(mailchange.target.value)
  }
  const [pass,setPass]=useState("")
  const handlepass=(chanhepass)=>{
    setPass(chanhepass.target.value)
  }
  // const checkemail=()=>{
  //   console.log("email is checked")
  //   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
  //     return (true)
  //   }
  //   alert("You have entered an invalid email address!")
  //   return (false)
  // }
  const [error,setError]=useState(false)
  const [success,setSuccess]=useState(false)
  const validatelogin=(e)=>{
    e.preventDefault()
    console.log("validation starts")
    if(mail.length===0||pass.length<8){
      setError(true)
    }
    else{
      setSuccess(true)
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    alert("You have entered an invalid email address!")
    setError(true)
    return (false)
  }



  return (
    <div className='background'>
      <div className="showit">
        {success?(<h1>you are logged in : </h1>):(
          <fieldset>
            <legend align='center' id='legend'>Login Page</legend>
          <form onSubmit={validatelogin}>
          <div id="logininfo" >
         <div id="email">
          <label htmlFor="">Enter Your E-Mail ID : </label>
          <TextField
              id="outlined-basic"
              label="E-mail ID"
              variant="outlined"
              //defaultValue="Hello World"
              onChange={handleemail}
              value={mail}
              //type="email"
              //onBlur={checkemail}
            />
         </div>
         <br />
         <div id="errormsgemail">{error && mail.length<=0 ? (<h4>plz enter email id</h4>):("")}</div>
         <br />
         {/* <div className="try">
         <TextField
              error
              id="outlined-error"
              label="Error"
              defaultValue="Hello World"
            />
         </div> */}
         <div id="password">
          <label htmlFor="">Enter Your PassWord :  </label>
          <TextField
          
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              value={pass}
              onChange={handlepass}
            />
         </div>
         <br />
         <div id="errormsgpassword">{error && pass.length<=8?(<h4>plz enter password</h4>):("")}</div>
         <br />
         <div id="loginbtn">
         <Button variant="contained" type='submit'>Login</Button>
         </div>
         </div>
         <hr />
         <div id="gotoregister">
          <h4>Are you a new user ? .. <Link to="register"><Button variant="contained">Register now</Button></Link></h4>
         </div>
         
        </form>
        </fieldset>

        )}
      </div>
      
    </div>
  );
}
