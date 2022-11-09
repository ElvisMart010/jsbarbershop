import React from "react";
import "./styles.scss";
import {Link} from "react-router-dom";

import fondo from "../../images/MAIN.png"

import video1 from "../../images/corte1.mp4"
import video2 from "../../images/corte2.mp4"
import video3 from "../../images/corte3.mp4"




function Service(){
   return(
    <div className='Service'>
        <div className="title-service" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + fondo})`}}>
            <h2>Our cuts</h2>
        </div>
        <div className="cortes">
            <div className="video">
                <video src={video1} autoPlay loop></video>
                <li><Link to="/Quote" className=" quote-home">Quote</Link></li>    

            </div>
            <div className="video">
                <video src={video2} autoPlay loop></video>
                <li><Link to="/Quote" className=" quote-home">Quote</Link></li>    


            </div>
            <div className="video">
                <video src={video3} autoPlay loop></video>
                <li><Link to="/Quote" className=" quote-home">Quote</Link></li>    


            </div>
      
        </div>
    </div>
 )      
}

export default Service