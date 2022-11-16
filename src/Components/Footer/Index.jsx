import React from "react";
import './styles.scss'
import {Link} from 'react-router-dom'
import logo1 from '../../images/NEGRO.png'

function Footer(){
    return(
        
        <div className="Footer">
            <div className="div-1">
                <div className="apt1">
                    <Link to="/" className="enlace1 enlace">
                        <div className="contenedor-enlace">
                            <img src={logo1} alt="" className="logo" />
                            <div className="container-logo">
                                <h1>JS Dominican</h1><p>BARBER SHOP</p>
                            </div>
                        </div>
                </Link>

                </div>
                <div className="apt2">
                    <h2>Contact</h2>
                    <div className="apt2-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="30" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="11" r="3" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>

                    <p>101 W Walnut Ave Ste. 37, Dalton, GA 30720, United States</p>

                    </div>
                    <div className="apt2-2">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="30" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                        <p>(706) 529-8476</p>

                    </div>
                    <div className="apt2-3">

                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="30" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                     </svg>
                        <p>jsdominicanbarber@gmail.com</p>
                    </div>
                    
                </div>
                

            </div>

            <div className="div-2">
                <p>&copy;Js Dominican Barber Shop 2022</p>


                <div className="iconos">
                    
                <svg xmlns="http://www.w3.org/2000/svg" class=" icon-tabler icon-tabler-brand-whatsapp" width="40" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                </svg>



                <a href="https://www.instagram.com/js_dominican_barbershop/" target="_blank" rel="noopener noreferrer" >
                <svg xmlns="http://www.w3.org/2000/svg" class=" icon-tabler icon-tabler-brand-instagram " width="40" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="4" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                </a>

            

                </div>

                </div>
          

        </div>
    )
}

export default Footer