import React from "react";
import "./styles.scss";
import quote from '../../images/quote.gif'



function Appointment(){
   return(
    <div className='Appointment'>
        <img src={quote} alt="" />
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" class=" icon-tabler icon-tabler-brand-whatsapp" width="70" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                        <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                    </svg>
    
    
    
                    <a href="https://www.instagram.com/js_dominican_barbershop/" target="_blank" rel="noopener noreferrer" >
                    <svg xmlns="http://www.w3.org/2000/svg" class=" icon-tabler icon-tabler-brand-instagram " width="70" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="4" y="4" width="16" height="16" rx="4" />
                        <circle cx="12" cy="12" r="3" />
                        <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                    </svg>
                    </a>
                    </div>
    </div>
 )      
}

export default Appointment