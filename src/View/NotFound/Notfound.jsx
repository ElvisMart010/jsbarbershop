import React from "react";
import "./styles.scss";
import notfound from "../../images/NOTFOUND.mp4"



function NotFound(){
   return(
    <div className='Not-Found'>
        <div className="container-notfound">
             <video autoPlay loop src={notfound}></video>
        </div>
       

    </div>
 )      
}

export default NotFound