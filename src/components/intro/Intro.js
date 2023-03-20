import React from 'react'
import '../intro/intro.css'



function Intro() {
    return (
        <>
            <div className="i">
                <div className="i-left">
                    <div className="i-left-wrapper">
                        <h2 className='i-intro'>Hello, My name is</h2>
                        <h1 className='i-name' >Uttkarsh Vedang</h1>
                        <h2 className='i-title' >Fresher</h2>
                        <p className='i-desc' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus provident sunt ipsum officiis alias ducimus voluptatum magni consectetur expedita at pariatur velit placeat in architecto iste, aperiam dicta minima?</p>
                    </div>
                </div>
                <div className="i-right">
                    <div className="i-bg"></div>
                    <img className='i-img' src='' alt="" />
                </div>
            </div>
        </>
    )
}

export default Intro
