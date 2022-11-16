import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './View/Home/Home'
import About from './View/About/About'
import Contact from './View/Contact/Contact'
import Service from './View/Service/Service'
import NotFound from './View/NotFound/Notfound'
import Nav from './Components/Nav/index'
import Footer from './Components/Footer/Index'

import Quote from './View/Appointment/Appo'





    
function App() {
      return (
        
        <BrowserRouter>
       <Nav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/Services" element={<Service/>}/>
            <Route path="/Quote" element={<Quote/>}/>
            <Route path="/*" element={<NotFound/>}/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
          </Routes>
      <Footer/>
        </BrowserRouter>
        
      );
    }
    
    
    
    
    
    


 
export default App;
