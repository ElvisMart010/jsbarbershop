import React from "react";
import "./styles.scss";
import notfound from "../../images/NOTFOUND.gif"



function NotFound(){
   return(
    <div className='Not-Found'>
        <div className="container-notfound">
            
             <img src={notfound} alt="" />

        </div>
       

    </div>
 )      
}

export default NotFound