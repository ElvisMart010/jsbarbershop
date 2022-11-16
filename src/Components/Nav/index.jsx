import React from "react";
import './styles.scss'
import {Link} from 'react-router-dom'
import logo1 from '../../images/NEGRO.png'

function Nav(){


      
    function muestraAlerta(evento) {
      document.getElementById('ul-id').classList.toggle('ul-select');
      let check = document.getElementById('check')
      check.checked = false;
    }

    return(
        //-------------BARRA DE NAVEGACIÓN RESPONSIVA*/
        
        <div className="Nav-Bar">
          <nav className="nav">
                <input type="checkbox" id="check"/>
                <label for="check" className="checkbtn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="fa-solid fa-bars" width="42" height="72" viewBox="0 0 24 24" stroke-width="2.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </label>

                <div className="headercontain">
                      <Link to="/" className="enlace">
                    <div className="contenedor-enlace">
                        <img src={logo1} alt="" className="logo" />
                        <div className="container-logo">
                            <h1>JS Dominican<span><p>BARBER SHOP</p> </span></h1>
                        </div>
                    </div>
             </Link>
                </div>

              
          
                 <ul className="container-ul" id="ul-id">
            
                 
                        <li><Link to="/"className="activo" id="foo" onClick={muestraAlerta}>Home</Link></li>
                        <li><Link to="/About" className="aboutl btn" onClick={muestraAlerta}>About Us</Link></li>
                        <li><Link to="/Contact" className="contactl btn" onClick={muestraAlerta}>Contact</Link></li>
                        <li><Link to="/Services"  className="servicesl btn" onClick={muestraAlerta}>Services</Link></li>
                        <li><Link to="/Quote"className="link-quote btn" onClick={muestraAlerta}>Quote</Link></li>
                   
                 </ul>  
            
        </nav>



        </div>
    )
}

export default Nav