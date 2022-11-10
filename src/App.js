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

function App() {
  return (
    <Router>
    <div>
      <Appmenubar/>
      {/* <br /> */}
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
    </Router>
  )
}

export default App
