import React from "react";
import "./styles.scss";
import {Link} from "react-router-dom";

import fondo from "../../images/MAIN.png"

import video1 from "../../images/corte1.gif"
import video2 from "../../images/corte2.gif"
import video3 from "../../images/corte3.gif"




function Service(){
   return(
    <div className='Service'>
        <div className="title-service" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + fondo})`}}>
            <h2>Our cuts</h2>
        </div>
        <div className="cortes">
            <div className="video">
                <img src={video1} alt="" />
                <li><Link to="/Quote" className=" quote-home">Quote</Link></li>    

            </div>
            <div className="video">
                <img src={video2} alt="" />
                <li><Link to="/Quote" className=" quote-home">Quote</Link></li>    


            </div>
            <div className="video">
                <img src={video3} alt="" />
                <li><Link to="/Quote" className=" quote-home">Quote</Link></li>    


            </div>
      
        </div>
    </div>
 )      
}

export default Service