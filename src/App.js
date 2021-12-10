import React, { useRef } from 'react';
import './style.css';
import emailjs, { init } from 'emailjs-com';
const userID = 'user_qIHkTgzdkmN73MicZK5vq';
const accessToken = 'a2c14575b92437f362c070d50161354e';
const serviceID = 'service_ppi6pz4';
const templateID = 'template_4jccb2p';
init(userID);

export default function App() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceID, templateID, form.current, userID)
      .then((res, err) => {
        console.log(err ? err.text : res.text);
      });
  };
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {' '}
      <h1>EmailJS Test</h1>
      <form
        id="emailjs-form"
        ref={form}
        onSubmit={sendEmail}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '.5rem',
          width: '15rem',
        }}
      >
        <input placeholder="first name" type="text" name="firstName" />
        <input placeholder="last name" type="text" name="lastName" />
        <textarea placeholder="message" name="message" />
        <input type="submit" value="Send Email" />
      </form>
    </div>
  );
}
