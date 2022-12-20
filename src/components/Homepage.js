import React, { useEffect } from 'react'
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
import { blue, grey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import photo from './21547.jpg'
import axios from 'axios';

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
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Homepage() {
  let username = localStorage.getItem("name");
  //console.log(username)
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const settingfun = () => {
    console.log("setting clicked")


  }
  const getData=()=>{
    //var axios = require('axios');
var data = JSON.stringify({
  "meal": [
    "dinner"
  ]
});

var config = {
  method: 'post',
  url: 'https://therecipepool.pythonanywhere.com/api/filter-meal/',
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxODA2MjIwLCJpYXQiOjE2NzE1NDcwMTgsImp0aSI6ImJiNDY3N2ExYmMzMjRiZWY4YWQ5OWEzZWM0MDkxMTdjIiwidXNlcl9pZCI6MTZ9.FF6RXQmB_nCUwn3FUA3fdf2AeHygoTp6e8npZsX4uDE', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  console.log(response.data[0])
  console.log(response.data[0].id)
  // let k = response.data.length()
  // console.log(k);
})
.catch(function (error) {
  console.log(error);
});

  }
  useEffect(
    ()=>{
      getData();
    },[]
  )
  return (
    <div className='mainbody'>
      <div className="welcome">Welcome , {username}</div>
      {/* lets make a grid here */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3} >
          <Grid item xs={6} md={3} >
            <Item >
              <div className="card mx-1">
                <Card sx={{ maxWidth: 345, bgcolor: grey[900] }}>
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
                    title="Title here"
                    subheaderTypographyProps={{ color: 'white' }}
                    subheader="Time Stamp here"

                  />

                  <CardMedia
                    component="img"
                    height="194"
                    image={photo}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary" className='des' sx={{ color: 'white' }}>
                      <span className='des'>Description here:</span>
                      <p className='des'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto enim atque excepturi veniam voluptatibus maiores cumque, deserunt obcaecati vero reiciendis quia recusandae impedit repellat officia? Iusto assumenda nulla voluptatum ipsum iste tenetur optio dolorum?</p>
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" sx={{ color: 'white' }} className='like'>
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" sx={{ color: 'white' }} className='share'>
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                      sx={{ color: 'white' }}
                      className='showmore'
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph sx={{ color: 'white' }}>Method:</Typography>
                      {/* <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography> */}
                      <Typography paragraph sx={{ color: 'white' }}>
                        Health label :
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quo recusandae, labore tenetur quae sint.</p>
                      </Typography>
                      <Typography paragraph sx={{ color: 'white' }}>
                        Total Nutrients:
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, nam odio quia, vel consectetur enim debitis quos explicabo inventore ratione necessitatibus in ea!</p>
                      </Typography>
                      <Typography sx={{ color: 'white' }}>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
            </Item>
          </Grid>
          {/* <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid> */}
          <Grid item xs={6} md={3}>
            <Item>
              <div className="card mx-1">
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Title here"
                    subheader="Time Stamp here"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={photo}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Description here:
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto enim atque excepturi veniam voluptatibus maiores cumque, deserunt obcaecati vero reiciendis quia recusandae impedit repellat officia? Iusto assumenda nulla voluptatum ipsum iste tenetur optio dolorum?</p>
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      {/* <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography> */}
                      <Typography paragraph>
                        Health label :
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quo recusandae, labore tenetur quae sint.</p>
                      </Typography>
                      <Typography paragraph>
                        Total Nutrients:
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, nam odio quia, vel consectetur enim debitis quos explicabo inventore ratione necessitatibus in ea!</p>
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
            </Item>
          </Grid>
          {/* #one more */}
          <Grid item xs={6} md={3}>
            <Item>
              <div className="card mx-1">
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Title here"
                    subheader="Time Stamp here"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={photo}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Description here:
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto enim atque excepturi veniam voluptatibus maiores cumque, deserunt obcaecati vero reiciendis quia recusandae impedit repellat officia? Iusto assumenda nulla voluptatum ipsum iste tenetur optio dolorum?</p>
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography paragraph>Method:</Typography>
                      {/* <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography> */}
                      <Typography paragraph>
                        Health label :
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quo recusandae, labore tenetur quae sint.</p>
                      </Typography>
                      <Typography paragraph>
                        Total Nutrients:
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, nam odio quia, vel consectetur enim debitis quos explicabo inventore ratione necessitatibus in ea!</p>
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>
            </Item>
          </Grid>
        </Grid>
      </Box>

    </div>
  )
}

export default Homepage
