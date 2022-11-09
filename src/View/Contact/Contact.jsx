import React from "react";
import "./styles.scss";
import gif from "../../images/contact1.mp4"
import fondo from "../../images/contact.png"
import {Link} from 'react-router-dom'
import Form from "../../Components/Form/Form"


function Contact(){

  
   return(
    <div className='Contact'style={{ backgroundImage: `url(${process.env.PUBLIC_URL + fondo})`}}>
        <div className="container-contact"  >
            <div className="container-contact2">
                <video src={gif} autoPlay loop></video>
                <Link to="/Quote" className="p-contact" >Schedule</Link>
            </div>
            <div className="form">
                  <Form></Form>
            </div>
          
        </div> 
    </div>
 )      
}

export default Contact