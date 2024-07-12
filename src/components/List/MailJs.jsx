import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'react-hot-toast';
import '../List/Slider.css';

export const MailJs = () => {
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
      <form onSubmit={sendEmail} className="form-control-container">
        <div className="form__group field">
          <input
            id="user_name"
            name="user_name"
            placeholder="Nombre"
            aria-invalid={errors.user_name ? "true" : "false"}
            aria-errormessage="username-error-message"
            autoComplete="username"
            className={`input-style ${errors.user_name ? 'input-error' : ''}`}
            value={formState.user_name}
            onChange={handleChange}
            type="text"
          />
          <label className="form__label" htmlFor="user_name">
            Name
          </label>
        </div>
        <div className="form__group field">
          <input
            id="user_email"
            name="user_email"
            placeholder="nombre@dominio.com"
            aria-invalid={errors.user_email ? "true" : "false"}
            aria-errormessage="email-error-message"
            autoComplete="email"
            className={`input-style ${errors.user_email ? 'input-error' : ''}`}
            value={formState.user_email}
            onChange={handleChange}
            type="email"
          />
          <label className="form__label" htmlFor="user_email">
            Email
          </label>
        </div>
        <div className="form__group field">
          <textarea
            id="user_message"
            name="user_message"
            placeholder="Tu mensaje..."
            aria-invalid={errors.user_message ? "true" : "false"}
            aria-errormessage="message-error-message"
            autoComplete="message"
            className={`input-style ${errors.user_message ? 'input-error' : ''}`}
            value={formState.user_message}
            onChange={handleChange}
            cols="30"
            rows="10"
          ></textarea>
          <label className="form__label" htmlFor="user_message">
            Message
          </label>
        </div>
        <button className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default MailJs;
