import React, { useEffect, useState } from 'react'
import './Homepage.css'
//import Cards from './Card'
//import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {  grey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
//import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
//import photo from './21547.jpg'
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Homepage() {
  useEffect(
    ()=>{
      Aos.init({duration:2000});
    },[]
  )
  let username = localStorage.getItem("name");
  let access = localStorage.getItem("accessToken")
  //console.log(username)
  const [expanded, setExpanded] = React.useState(false);
  const [like,setLike]=useState(-1)
  //var i 

    const likefun=(i)=>{
      setLike(like===i?-1:i)
      console.log("you have clicked "+i+" th button")
      let btn = document.getElementsByClassName("king1")[i].style.color="red"
      let var1 =  document.getElementsByClassName("king1")[i]
      console.log(var1)
    }
    const unlike=(i)=>{
      let var1 =  document.getElementsByClassName("king1")[i]
      if(var1.style.color==="red"){
        document.getElementsByClassName("king1")[i].style.color="white"
      }
    }

  const handleExpandClick = (i) => {
    setExpandedID(expandedID===i?-1:i)
    setExpanded(!expanded);
  };

  const settingfun = () => {
    console.log("setting clicked")


  }
  const [entry,setEntry]=useState([])
  const [type,setType]=useState("dinner")
  const [expandedID,setExpandedID]=React.useState(-1)
  // useEffect(() => {
  //     getData();
  //   }, [])
    let linkurl = "https://therecipepool.pythonanywhere.com/"
  const getData=()=>{
    //var axios = require('axios');
var data = JSON.stringify({
  "meal": [
    type
  ]
});

var config = {
  method: 'post',
  url: 'https://therecipepool.pythonanywhere.com/api/filter-meal/',
  headers: { 
    'Authorization': 'Bearer '+access, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  console.log(response.data[0])
  console.log(response.data[0].id)
  setEntry(response.data)
  // let k = response.data.length()
  // console.log(k);
})
//.then((objdata)=>{setEntry(objdata.data)})
.catch(function (error) {
  console.log(error);
});

  }
  useEffect(
    ()=>{
      getData();
    },[type]
  )
  //let type="";
  const getClick=()=>{
    // let t = document.getElementById('breakfast').value
    setType("breakfast")
    
    console.log(type)
  }
  const getClick1=()=>{
    // let t = document.getElementById('lunch').value
    setType("lunch")
    console.log(type)
  }
  const getClick2=()=>{
    // let t = document.getElementById('dinner').value
    setType("dinner")
    console.log(type)
  }
  // const likefun=()=>{
  //   document.getElementsByClassName("likee")[0].style.color="red"
  // }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='mainbody'>
      <div className="welcome">Welcome , {username}</div>
      <div className="searchbar">
        {/* <h2>here will be search bar</h2> */}
        {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      </div>
      <div className="select">
        
        <Button variant="contained" onClick={getClick} value= 'breakfast' id='breakfast' className='mx-1'>BreakFast</Button>
        <Button variant="contained" onClick={getClick1} value= 'lunch' id='lunch'className='mx-1'>lunch</Button>
        <Button variant="contained" onClick={getClick2} value = 'dinner' id='dinner'className='mx-1'>dinner</Button>
        
      </div>
      {/* lets make a grid here */}
      {/* <Box sx={{ flexGrow: 1 }}> */}
        <Grid container spacing={3} >
          {
            entry.map((map,i)=>
              
              <Grid data-aos="fade-up" item xs={12} md={3} >
              <Item >
                <div className="card mx-1">
                  <Card sx={{ border:"transparent" , bgcolor: grey[900] }}>
                    <CardHeader sx={{ color: 'white' }}
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings" sx={{ color: 'white' }} onClick={settingfun}>
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title={map.cuisine.cuisine_name}
                      subheaderTypographyProps={{ color: 'white' }}
                      subheader={map.label}
  
                    />
  
                    <CardMedia
                      component="img"
                      height="194"
                      //image={photo}
                      image={linkurl+map.image}
                      alt="Paella dish"
                    />
                    
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites" sx={{ color: 'white' }} className='like' id='likeBtn' onClick={()=>likefun(i)} onDoubleClick={()=>unlike(i)}>
                        <FavoriteIcon className='king1'  />
                        {/* <span className='likee'onClick={likefun} id='likebutton'><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"></path></svg></span> */}
                      </IconButton>
                      <IconButton aria-label="share" sx={{ color: 'white' }} className='share' 
                      id="demo-positioned-button"
                      aria-controls={open ? 'demo-positioned-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      >
                        <ShareIcon />
                      </IconButton>
                      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}><WhatsAppIcon/></MenuItem>
        <MenuItem onClick={handleClose}><InstagramIcon/></MenuItem>
        <MenuItem onClick={handleClose}><TwitterIcon/></MenuItem>
      </Menu>
                      <ExpandMore
                        expand={expanded}
                        // onClick={handleExpandClick}
                        // aria-expanded={expanded}
                        onClick={()=>handleExpandClick(i)}
                        aria-expanded={expandedID===i}
                        aria-label="show more"
                        sx={{ color: 'white' }}
                        className='showmore'
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
                    <Collapse in={expandedID===i} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography paragraph sx={{ color: 'white' }}>Method:</Typography>
                        <Typography sx={{ color: 'white' }}>
                          {
                             map.steps_list.map(
                              map2=>
                              // <p>{map2.id}</p>
                              <p>{map2.steps}</p>
                             )
                         }
                        </Typography>
                        
                      <Typography variant="body2" color="text.secondary" className='des' sx={{ color: 'white' }}>
                        <span className='des'>Ingridients:</span>
                        {
                          map.ingredient_list.map(
                            map3=>
                            <div className="ingri">
                            <p className='des'>{map3.name}</p>
                            <p className='des'>Quantity : {map3.quantity}</p>
                            </div>
                            
                          )
                        }
                      </Typography>
                      <Typography variant="body2" color="text.secondary" className='des' paragraph sx={{ color: 'white' }}>
                        <span className='des'>Why its healthy ??</span>
                        <p className='des'>{map.healthLabels}</p>
                      </Typography>
                    
                        <Typography paragraph sx={{ color: 'white' }}>
                          Health label :
                          
                        {/* <p>{map.ingredient_list.name}</p> */}
                         {/* <p>{getIngridents()}</p>  */}
                        </Typography>
                        <Typography paragraph sx={{ color: 'white' }}>
                          Total Nutrients:
                          <p>{map.totalNutrients}</p>
                        </Typography>
                        <Typography sx={{ color: 'white' }}>
                          {/* Set aside off of the heat to let rest for 10 minutes, and then serve. */}
                          {/* {i=map.id} */}
                        </Typography>
                      </CardContent>
                      <CardContent>
                      
                    </CardContent>
                    </Collapse>
                  </Card>
                </div>
              </Item>
            </Grid>  
            )
          }
          {/* <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid> */}
          
          {/* #one more */}
          </Grid>
      {/* </Box> */}

    </div>
  )
}

export default Homepage
