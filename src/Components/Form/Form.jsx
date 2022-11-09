import React from "react";
import "./style.scss"
import emailjs from '@emailjs/browser'



function Form(){


    const sendEmail = (event)=>{
        emailjs.sendForm('service_01mjvam','template_50kg1rf',event.target,'XmfEusCuBroOvNEt-')
        .then(response => console.log(response))
        .cath(error => console.log(error)) 
        
        event.preventDefault(); 
        document.getElementById("input").value = "";
        document.getElementById("input1").value = "";
        document.getElementById("input2").value = "";
    }



    return(
        <div className="Form-continer">
            <form action="" className="form  form-mail" onSubmit={sendEmail}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail" width="64" height="64" viewBox="0 0 24 24" stroke-width="2" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                    </svg>
                <div className="form-Nombre div-form">
                    <label htmlFor="">
                        Name:
                    </label>
                    <input type="text" name="user_name" id="input" placeholder="Name" />
                </div>
                <div className="form-correo div-form">
                <label htmlFor="">
                        Gmail:
                    </label>
                    <input type="email" name="user_email" id="input1" placeholder="Gmail"/>

                </div>
                <div className="form-comentario div-form" >
                <label htmlFor="">
                        Comment:
                    </label>
                    <textarea  id="input2" cols="23" rows="5" name="user_message" placeholder="Message"></textarea>

                </div>

      
                <button className="form-buttom">Send</button>
            </form>
        </div>
    )

}

export default Form