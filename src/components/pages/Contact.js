import React, { useState } from 'react';

export default function Contact() {
    const [ formData, setFormData] = useState({name: "", email: "", message: ""})
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email) => {
        const re = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
        return re.test(String(email).toLowerCase());
      }

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
      };

      const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
    
        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(formData.email)) {
          setErrorMessage('Email is invalid');
          // We want to exit out of this code block if something is wrong so that the user can correct it
          return;
          // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        setErrorMessage("")
        setFormData({name: "", email: "", message: ""})
        };
  return (
    <div>
       <form onSubmit={handleFormSubmit}>
      <div>
        <input type="text" placeholder="Your name" name="name" value={formData.name} onChange={handleInputChange} required />
      </div>
      <div>
        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} required />
      </div>
      <div>
        <textarea placeholder="Your message" name="message" value={formData.message} onChange={handleInputChange} required />
      </div>
      <div>
        <button type="submit"> Send a message </button>
      </div>
    </form>
    {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}