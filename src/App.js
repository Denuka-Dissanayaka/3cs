import {BrowserRouter, Switch, Route, Link, Routes } from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/user/:id" element={<Profile/>}></Route>
          
          
        </Routes>
      </BrowserRouter>  
    </>
  );
}

export default App;
