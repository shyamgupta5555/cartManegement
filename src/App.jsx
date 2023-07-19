import { useState } from "react";
import "./App.css";
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from "@mui/material";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import LoginPage from "./pages/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element ={<LoginPage/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;