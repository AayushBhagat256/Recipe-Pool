import * as React from 'react';
//import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
//import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import './Login.css'
//import axios from 'axios';
//import axios from 'axios';
import axios from 'axios';

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
    if(mail.length===0||pass.length<2){
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

  

  // console.log({mail,pass})
  const handleApi=()=>{
    // axios.post('http://therecipepool.pythonanywhere.com/account/login/',{
    //   "email":mail,
    //   "password":pass
    // })
    // .then(result=>{console.log(result.data)
    // alert("succcess")
    // })
    // .catch(error=>{console.log(error)
    // alert("error is "+error)
    // })
//     var axios = require('axios');
// var qs = require('qs');
// var data = qs.stringify({
//   'email': 'aayush123@gmail.com',
//   'password': 'aayush@123' 
// });
// var config = {
//   method: 'post',
//   url: 'http://therecipepool.pythonanywhere.com/account/login/',
//   headers: { 
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   data : data
// };

// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });
var qs = require('qs');
var data = qs.stringify({
  //'email': 'prachip@gmail.com',
  'email': mail,
  //'password': 'pass@12345' 
  'password': pass
});
var config = {
  method: 'post',
  url: 'https://therecipepool.pythonanywhere.com/account/login/',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data))
  alert("success");
  console.log("this is api data name is "+response.data.name)
  localStorage.setItem("name",response.data.name);
})
// .then(function (data) {
//   console.log("this is api data "+data.name)
// })
.catch(function (error) {
  console.log(error)
  alert("error is "+error);
});


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
         <Button variant="contained" type='submit' onClick={handleApi}>Login</Button>
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
