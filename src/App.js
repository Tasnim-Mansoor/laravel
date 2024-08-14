import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './component/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './component/Login';
import Register from './component/Register';
import Addproduct from './component/Addproduct';
import Updateproduct from './component/Updateproduct';

function App() {
  return (
    <Router>
      <MyNavbar />
      
      <Routes>
        
        
        <Route path='/Login' element={<Login />}></Route>
        <Route path="/Register" element={<Register />} />
        <Route path='/Addproduct' element={<Addproduct/>}></Route>
        <Route path='/Updateproduct' element={<Updateproduct />}></Route>
        

      </Routes>
       
        
    
    </Router>
  );
}

export default App;