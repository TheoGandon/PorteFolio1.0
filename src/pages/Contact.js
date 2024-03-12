import React from 'react';
import TitleContact from '../components/TitleContact';
import '../css/Contact.css';


const Contact = () => {
  return (
    <div>
   <TitleContact />
  <div class="container-contact">
  <div class="brand-logo"></div>
  <div class="inputs">
    <label>Email</label>
    <input type="email" placeholder="example@me.com" />
    <label>Name</label>
    <input type="text" placeholder="Votre nom" />
    <label>Message</label>
    <input className='message' type="text" placeholder='Votre message' />
    <button className='button' type="submit">Envoyer</button>
  </div>
</div>
    </div>
  );
};

export default Contact;
