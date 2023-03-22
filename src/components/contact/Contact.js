import React, { useRef } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

function Contact() {

    const formRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            'service_pmox4br',
            'template_qeznw9m',
            formRef.current,
            'VBKq32A6cpGJDxQ4M'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <div className="c">
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Contact Me</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src="../../../image/icon1.png" alt="" className="c-icon" />
                                <p className='c-icon-text' >+91 9693968327</p>
                            </div>
                            <div className="c-info-item">
                                <img src="../../../image/icon2.png" alt="" className="c-icon" />
                                <p className='c-icon-text' >uttkarshaaa003@gmail.com</p>
                            </div>
                            <div className="c-info-item">
                                <img src="../../../image/icon3.png" alt="" className="c-icon" />
                                <p className='c-icon-text' >H. no.-204, Rd. no.-2,Singhmore, Kalyanpur, Hatia, Ranchi, Jharkhand </p>
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <div className="c-desc"><b>What do you think?</b><br />Share you views, ideas and start a discussion about anything worth mentioning.</div>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input id='name' type="text" placeholder='Name' name='user_name' />
                            <input id='subject' type="text" placeholder='Subject' name='user_subject' />
                            <input id='email' type="email" placeholder='Email' name='user_email' />
                            <textarea name="message" rows="10" placeholder='Message'></textarea>
                            <button  >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
