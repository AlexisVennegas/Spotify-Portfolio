import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import './Slider.css';


export const MailJs2 = ({index, item}) => {
  
    const [valueName, setVname] = useState("")


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
  };

   
  const detectLetter = (e) => {
    const firstLetter = e.target.value[0]
    
    setVname(firstLetter)
  
  };


  const validateField = (name, value) => {
    let isValid = true;

    if (name === 'user_name' && value.trim() === '') {
      isValid = false;
    }

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

    const isFormValid = !Object.values(errors).some(error => error) &&
                        !Object.values(formState).some(field => field.trim() === '');

    if (!isFormValid) {
      toast.error("Please fill in all fields correctly", { position: "bottom-center" });
      return;
    }

    const emailPromise = emailjs.sendForm('service_vcnvjck', 'template_4c65twn', e.target, '7y45ptOrxD6g3l6XZ');

    toast.promise(
      emailPromise,
      {
        loading: 'Sending email...',
        success: 'Email sent successfully!',
        error: 'Failed to send email',
      },
      { position: 'bottom-center' }
    );

    emailPromise.catch(error => console.log(error));
  };

  return (
    <div className="form-container">
      <Toaster />
        <form action="" className="form-data">
         
            <div>{index}</div>
            <div>
              <picture className='pictureStyle'>
                {
                  valueName ? 
                  <p>{valueName}</p> : 
                  <img src={valueName ? "" : item.img} alt="" />

                }
              </picture>
          {
            item.type === "text" ? (
                <input
                  type="text"
                  name="user_name"
                  placeholder="Nombre..."
                  className={errors.user_name ? 'error' : 'inputStyle'}
                  onChangeCapture={detectLetter}
                />
              ) : item.type === "email" ? (
                <input
                  type="email"
                  name="user_email"
                  placeholder="Correo..."
                  value={formState.user_email}
                  onChange={handleChange}
                  className={errors.user_email ? 'error' : 'inputStyle'}
                />
              ) : item.type === "textarea" ? (
                <textarea
                  name="user_message"
                  placeholder="Mensaje..."
                  value={formState.user_message}
                  onChange={handleChange}
                  className={errors.user_message ? 'error' : 'textareaStyle'}
                />
              ) : item.type === "submit" ? (
                <button className='buttonStyle' type="submit" onClick={sendEmail}>{item.label}Enviar</button>
              ) :
              null
            
            
          }
            </div>
            <div></div>
            <div></div>
            <div>{item.duration}</div>
           
        </form>
    </div>
  );
};

export default MailJs2;
