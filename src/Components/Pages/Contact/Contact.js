import React from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { useState } from 'react';

const Result=()=>{
return(
    <p className='success-text'>Your Message sent successfully</p>
)
}

const Contact = () => {
    const [result, setResult]=useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_v45fby3', 'template_wqtxf4x', e.target, 'HnruD6Gh6CJOts7oc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
            setResult(true);
    };
    return (
        <div className='form-container'>
            <form onSubmit={sendEmail}>
                <h2 className='form-title'>GET IN TOUCH</h2>
                <input type="text" id="name" name='fullName' placeholder='Your Name' required />
                <input type="email" id="email" name='email' placeholder='Email Id' required />
                <input type="text" id="phone" name='phone' placeholder='Phone Number' required />
                <textarea id="message" row="8" name='message' placeholder='How can I help you?'></textarea>
                <button type="submit">SEND</button>
                <div>{result?<Result/>:null}</div>
            </form>
        </div>
    );
};

export default Contact;