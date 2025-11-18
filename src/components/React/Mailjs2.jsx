import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import './Slider.css';
import {Contactos} from "../../Data/lib.js";
export const MailJs2 = ({ index, item }) => {
  
  const [valueName, setVname] = useState("");

  const [formState, setFormState] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const [errors, setErrors] = useState({
    user_name: false,
    user_email: false,
    user_message: false,
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    validateField(name, value);


    if (name === 'user_name') {
      setVname(value[0]);
    }
  };

  const validateField = (name, value) => {
    let isValid = true;


    if (name === 'user_email' && !value.includes('@')) {
      isValid = false;
    }

    if (name === 'user_message' && value.trim() === '') {
      isValid = false;
    }

    setErrors({
      ...errors,
      [name]: !isValid,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    
    // vamos a mostrar por consola los values
    console.log(e.target.user_name);


    // const emailPromise = emailjs.sendForm('service_vcnvjck', 'template_4c65twn', e.target, '7y45ptOrxD6g3l6XZ');

    toast.promise(
      emailPromise,
      {
        loading: 'Enviando correo...',
        success: 'correo enviado!',
        error: 'Error al enviar correo',
      },
      { position: 'bottom-center' }
    );

    emailPromise.catch(error => console.log(error));
  };

  return (
    <div className="form-container">
      <Toaster />
      <form className="form-data" onSubmit={sendEmail}>
        <div>{index}</div>
        <div>
          <picture className='pictureStyle'>
            {valueName ? <p>{valueName}</p> : <img src={item.img} alt="" />}
          </picture>
       
        </div>
      
        <div>{item.duration}</div>
      </form>
    </div>
  );
};

export default MailJs2;
