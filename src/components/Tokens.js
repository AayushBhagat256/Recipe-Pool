import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Homepage from './Homepage';
import './Token.css'

function Tokens() {
    let username=localStorage.getItem("name");
    let accesstoken=localStorage.getItem("accessToken")
    let refreshtoken=localStorage.getItem("refreshToken")
    const [show,setShow]=useState([])
    const [home,setHome]=useState(false)
    const [load,setLoad]=useState(false)
    //API call 
    //API store
    //console.log(localStorage)
    useEffect(
      ()=>{
        refreshAPI();
      },[]
    )
    const refreshAPI=()=>{
    //  var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  'refresh': refreshtoken 
});
var config = {
  method: 'post',
  url: 'https://therecipepool.pythonanywhere.com/account/token-refresh/',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  alert(username+" you are logged in successfully")
  setShow(response.data)
  localStorage.setItem("AccessRefreshAPI",response.data.access)
  console.log("the local storage is ..  ")
  console.log(localStorage)
  setLoad(true)
  setHome(true)
})
// .then((showdata)=>{
//   console.log("this is initial data")
//   console.log(show)
//   console.log("this is showdata")
//   console.log(showdata)
//   setShow(showdata)
// })
.catch(function (error) {
  console.log(error);
  //alert("The error is "+error)
});

    }
    //window.addEventListener("onClick",refreshAPI())
    console.log(show)
    
  return (
    <div id='loader'>
      
      {home?(<Homepage/>):(
      
        <div className="message">
          <img src="https://media.tenor.com/2yQv-RptjeQAAAAC/fastfood.gif" width={500} height={500} />
          Please wait
        </div>
      )}
      
    </div>
  )
}

export default Tokens
