import React, { useContext, useRef, useState } from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

function Contact() {

    const formRef = useRef()
    const [state, setState] = useState({ name: '', subject: '', email: "", message: "" });
    function reset(e) {
        e.preventDefault();
        setState({ name: '', subject: '', email: "", message: "" });
    }

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode

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
                        <div className="c-desc"><span className='c-desc-head'>What do you think?</span><br />Share you views, ideas and start a discussion about anything worth mentioning.</div>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input style={{ backgroundColor: darkMode && 'black', color: darkMode && 'white' }} id='name' type="text" value={state.name} onChange={(e) => {
                                setState({ ...state, name: e.target.value });
                            }} placeholder='Name' name='user_name' />
                            <input style={{ backgroundColor: darkMode && 'black', color: darkMode && 'white' }} id='subject' value={state.subject} onChange={(e) => {
                                setState({ ...state, subject: e.target.value });
                            }} type="text" placeholder='Subject' name='user_subject' />
                            <input style={{ backgroundColor: darkMode && 'black', color: darkMode && 'white' }} id='email' value={state.email} onChange={(e) => {
                                setState({ ...state, email: e.target.value });
                            }} type="email" placeholder='Email' name='user_email' />
                            <textarea style={{ backgroundColor: darkMode && 'black', color: darkMode && 'white' }} id='message' value={state.message} onChange={(e) => {
                                setState({ ...state, message: e.target.value });
                            }} name="message" rows="10" placeholder='Message'></textarea>
                            <button className='c-button' onClick={reset}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
