import React from "react";
import {BrowserRouter , Routes , Route} from "react-router-dom";

import './App.css';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import AddUser from './Users/AddUser';
import EditUser from "./Users/EditUser";

function App() {
  return (
    <div className="App">
         <BrowserRouter>
         <Navbar/>
              <Routes>
                   <Route path='/' element={<Home/>}/>
                   <Route path='/addusers' element={<AddUser/>}/>
                   <Route path='/edituser/:id' element={<EditUser/>}/>
              </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
