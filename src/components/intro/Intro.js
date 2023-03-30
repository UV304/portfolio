import React from 'react'
import './intro.css'
import Me from './introImg.png'



function Intro() {
    return (
        <>
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className='i-intro'>Hello, My name is</h2>
                        <h2 className='i-name' >Uttkarsh Vedang</h2>
                        <h2 className="i-title">Fresher</h2>
                        <p className='i-desc' >Welcome to my portfolio website! I am excited to have you here and showcase my work and skills. This website is designed to give you an overview of my experience, accomplishments, and abilities in various fields.<br /><br />
                            Whether you are a potential employer, client, or just curious about my work, I hope that this website will provide you with a comprehensive understanding of who I am and what I can offer.<br /><br />
                            Please feel free to browse through my projects, resume, and other information available on the site. If you have any questions or would like to discuss a potential collaboration, please do not hesitate to contact me.<br /><br />
                            Thank you for visiting, and I look forward to hearing from you!</p>
                    </div>
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    <img className='i-img' src={Me} alt="" />
                </div>
            </div>
        </>
    )
}

export default Intro
