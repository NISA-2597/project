import React,{useEffect,useState} from 'react';
import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home1 from './components/Home1';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Services';
import Testimonals from './components/Testimonals';
import Carrers from './components/Carrers';
import Cont from './components/Cont';
import { Card } from 'react-bootstrap';
import { icons } from 'react-icons';
import Favicon from 'react-favicon';
import HelmetExport from 'react-helmet';



function App() {
  

  return (
    <div >

     <BrowserRouter>
      
      <Header/>
      <Routes>
          <Route path='/Home' element={<Home1/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Services'element={<Service/>}/>
          <Route path='/Carrers' element={<Carrers/>}/>
          <Route path='/Tesimonals' element={<Testimonals/>}/>
          <Route path='/Cont' element={<Cont/>}/>

          
        
      </Routes>
          
     </BrowserRouter>

    </div>
  );
}

export default App;
