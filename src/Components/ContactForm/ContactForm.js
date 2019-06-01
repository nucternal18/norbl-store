import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
        return (
                <div className="ContactForm" >
                <div className="wrapper" >
                    <div className="contact-form" >
                        <h2>Contact Us</h2>
                        <div className="contactInputFields" >
                            <input type="text" className="Input" placeholder="Name" />
                            <input type="text" className="Input" placeholder="Email" />
                            <input type="text" className="Input" placeholder="Subject" />   
                        </div>
                        <div className="contact-msg" >
                            <textarea placeholder="Message"></textarea>
                            <div className="contact-btn">Send</div>
                        </div>
                    </div>
                </div>
                </div>
                
        )
}

export default ContactForm;
