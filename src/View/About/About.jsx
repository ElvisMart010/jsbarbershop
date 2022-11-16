
import React from "react";
import "./styles.scss";
import  { useEffect } from "react"
import about from '../../images/about.png'
import Map from '../../Components/Map/map'




function About() {

    let services = [
        {
            "Day": "Monday",
            "Input": "9:00 a.m.",
            "Output": "8:00 p.m."
        },
        {
            "Day": "Tuesday",
            "Input": "9:00 a.m.",
            "Output": "8:00 p.m."
        },
        {
            "Day": "Wednesday",
            "Input": "9:00 a.m.",
            "Output": "8:00 p.m."
        },
        {
            "Day": "Thursday",
            "Input": "9:00 a.m.",
            "Output": "8:00 p.m."
        },
        {
            "Day": "Friday",
            "Input": "8:00 a.m.",
            "Output": "8:00 p.m."
        },
        {
            "Day": "Saturday",
            "Input": "8:00 a.m.",
            "Output": "8:00 p.m."
        }, 
        {
            "Day": "Sunday",
            "Input": "8:00 a.m.",
            "Output": "8:00 p.m."
        }
    ]


    useEffect(() => {
        let data = "";
        services.forEach(item => {
            data += `

            <div>
                <h3>${item.Day}</h2>
                <p>${item.Input} to ${item.Output}</p>
            </div>    
            `;
        })
        let t_body = document.querySelector("#Horario");
        if (t_body !== null) t_body.innerHTML = data;

    })


   return(
    <div className='About'>

        <div className="title" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + about})`}}>
            <h2 className="h">About us</h2>
        </div>

        <div className="container">

            <div className="info">
             

                <div className="text">
                
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-2" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="18" y1="6" x2="18" y2="6.01" />
                    <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
                    <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
                    <line x1="9" y1="4" x2="9" y2="17" />
                    <line x1="15" y1="15" x2="15" y2="20" />
                </svg>
                    <h3>Know our business</h3>
                    <p>Js Dominican, your best option</p>
                    <p className="text-2">Js Dominican Barbershop is an exclusive place for gentlemen which has a team of experts in the art of haircuts and beard grooming.</p>
               
                </div>
            </div>

            <section className="location">
                <h2>Location</h2>
                <Map/>
                <p className="location-p">101 W Walnut Ave Ste. 37, Dalton, GA 30720, United States</p>
            </section>

            <h2 className="horario-h2">Schedule</h2>


            <div id="Horario" className="Horario">
            </div>
        </div>
    </div>
 )      
}

export default About