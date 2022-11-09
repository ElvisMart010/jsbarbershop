import React from "react";
import "./styles.scss";
import quote from '../../images/quote.mp4'



function Appointment(){
   return(
    <div className='Appointment'>
        <video src={quote} autoPlay loop></video>
    </div>
 )      
}

export default Appointment