import * as React from 'react';
//import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import './Register.css'
import { useState } from 'react';
//import Genderdrop from './Genderdrop'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SimpleContainer() {
  const [first,setFirst]=useState("")
  const handlefname=(f)=>{
    setFirst(f.target.value)
  }
  const [last,setLast]=useState("")
  const handlelname=(l)=>{
    setLast(l.target.value)
  }
  const showparameters=()=>{
    document.getElementById("message").style.display="block"
  }
  const hideparameters=()=>{
    document.getElementById("message").style.display="none"
  }
  let uppsercase = /[A-Z]/g;
  let lowercase=/[a-z]/g;
  let number=/[0-9]/g;
  
  const [pass1,setPass1]=useState("")
  const handlepass=(p)=>{
    setPass1(p.target.value)
  }
  const verifyPass=()=>{
    if(pass1.match(uppsercase)){
      document.getElementById("uppsercase").style.color="green"
    }
    else{
      document.getElementById("uppsercase").style.color="red"
    }
    if(pass1.match(lowercase)){
      document.getElementById("lowercase").style.color="green"
    }
    else{
      document.getElementById("lowercase").style.color="red"
    }
    if(pass1.match(number)){
      document.getElementById("number").style.color="green"
    }
    else{
      document.getElementById("number").style.color="red"
    }
    if(pass1.length>=8){
      document.getElementById("length").style.color="green"
    }
    else{
      document.getElementById("length").style.color="red"
    }
  }
  const [confrimpass,setConfrimpass]=useState("")
  const conchange=(cp)=>{
    setConfrimpass(cp.target.value)
  }
  const check=()=>{
    if(pass1===confrimpass&&pass1.length>1&&confrimpass.length>1){
      alert("passwords are accepted")
    }
    else{
      alert("retype the passwords")
    }
  }
  let defaultsel="Male"
  let k="2022-12-31"
  let def="2000-01-01"
  const test=()=>{
    let t1=document.getElementById("dob").value
    console.log(t1)
  }
  const [tel,setTel]=useState("")
  const handlenumber=(telno)=>{
    setTel(telno.target.value)
  }
  const [valid,setValid]=useState(false)
  const [showsuccess,setShowsuccess]=useState(false)
  const [emaill,setEmaill]=useState("")
  const handleemailchange=(emch)=>{
    setEmaill(emch.target.value)
  }
  const validateForm=(vf)=>{
    vf.preventDefault()
    if(tel.length<10||tel.length>10){
      setValid(true)
    }
    else{
      console.log("number is of 10 digs")
    }
    if(first.length===0||last.length===0||emaill.length===0||pass1.length<8||confrimpass.length<8){
     
      setValid(true)
    }
    else{
      //setValid(false)
      setShowsuccess(true)
      console.log("form submitted")
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emaill)) {
      return (true)
    }
    alert("You have entered an invalid email address!")
    setValid(true)
    return (false)
  }
  return (
    <div>
      
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        {/* <h1 id='hello'>hello</h1> */}
        <div id='registerinfo'>
          <div id="display">
            {
              showsuccess?(<h1>Form is Submitted</h1>)
              :(

                <fieldset id='field'>
            <legend align='center'>Register here</legend>
            <form onSubmit={validateForm} >
              <br />
              <div id="fname">
                <label htmlFor="">Enter Your First Name : </label>
                <TextField
                  id="outlined-basic"
                  label="First-name"
                  maxRows={1}
                  type="text"
                  onChange={handlefname}
                  value={first}
                //defaultValue="Hello World"
                />
              </div>
              <div id="err1">
                {valid&&first.length<=0?(<h4>plz enter First Name </h4>):("")}
              </div>
              <br />
              <div id="lname">
                <label htmlFor="">Enter your Last Name : </label>
                <TextField
                  id="outlined-basic"
                  label="Last-name"
                  maxRows={1}
                  type="text"
                  onChange={handlelname}
                  value={last}
                //defaultValue="Hello World"
                />
              </div>
              <div id="err2">
                {valid&&last.length<=0?(<h4>plz enter Last Name </h4>):("")}
              </div>
              <br />
              <div id="email">
                <label htmlFor="">Enter Your E-mail ID : </label>
                <TextField
                id="outlined-basic-email-input"
                label="E-mail ID"
                value={emaill}
                onChange={handleemailchange}
                //defaultValue="Default Value"
                //helperText="Some important text"
                //type="email"
              />
              </div>
              <div id="err3">
              {valid&&emaill.length<=0?(<h4>plz enter email ID </h4>):("")}
              </div>
              <br />
              <div id="phoneumber">
                <label htmlFor="">Enter Your Phone Number : </label>
                <TextField
                id="outlined-number"
                label="Number"
                //type="number"
                type="tel"
                value={tel}
                //inputProps={{maxlength:10}}
                //pattern="[0-9]{10}"
                //maxlength="10"
                onChange={handlenumber}
                //onBlur={verifyTel}
                
                InputLabelProps={{
                  shrink: true,
                }}
              />
              </div>
              <div id="telerr">
              {valid&&tel.length<10?(<h4>telephone number must have 10 digits </h4>):("")}
              </div>
              <div id="telerr1">
              {valid&&tel.length==0?(<h4>Enter tel number </h4>):("")}
              </div>
              <div id="telerr2">
              {valid&&tel.length>10?(<h4>telephone number cannot exceed 10 digits </h4>):("")}
              </div>
              <br />
              <div id="sex">
                <label htmlFor="">Select Your gender </label>
                <Select name="" id="demo-simple-select"
                defaultValue={10}
                //label="gender"
                >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Others</MenuItem>
                </Select>
              </div>
              <div id="createpass">
                <h4>lets create a password </h4>
                <label htmlFor="">Enter a Password : </label>
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={pass1}
                //onChange={handlepass}
                //width={70}
                onChange={handlepass}
                onFocus={showparameters}
                onBlur={hideparameters}
                onKeyUp={verifyPass}
              />
              <div id="message">
                <p id='uppsercase'>one uppercase</p>
                <p id='lowercase'>one lowercase</p>
                <p id='number'>one number</p>
                <p id='length'>min 8 chracters</p>
              </div>
              </div>
              <div id="errpass1">
                {valid&&pass1.length<=8?(<h4>password must be of min 8 char </h4>):("")}
              </div>
              
              <div id="confirmpass">
                <h4>Retype the password to confirm</h4>
                <label htmlFor="">Confirm Pass : </label>
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={confrimpass}
                onChange={conchange}
                //width={70}
                // onChange={handlepass}
                // onFocus={showparameters}
                 onBlur={check}
                // onKeyUp={verifyPass}
                />
              </div>
              <div id="errconpass">
              {valid&&confrimpass.length<=8?(<h4>password must be of min 8 char </h4>):("")}
              </div>
              <br />
              <div id="yono">
                <label htmlFor="">Enter Your Date of birth : </label>
                <input type="date" name="" id="dob" max={k} onBlur={test} defaultValue={def}/>
              </div>
              <div id="submit">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </fieldset>

              )
            }
          </div>
          
        </div>
        </div>
      
    
  );
}
