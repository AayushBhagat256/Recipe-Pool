import React from 'react'
import Appmenubar from './components/Appmenubar'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  //Switch,
  Route,
  Routes,
  //Link
} from "react-router-dom";
import Register from './components/Register';
import Tokens from './components/Tokens';

function App() {
  return (
    <Router>
    <div>
      <Appmenubar/>
      {/* <h1>hello</h1> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Routes>
        <Route path='/token' element={<Tokens/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
