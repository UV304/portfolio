import React from 'react'
import './project.css'
import cardImg from '../../img/cardImg1.jpeg'

function Project() {
    return (
        <>
            <div className="p">
                <a target='_blank' rel='noreferrer' href="https://uv304.github.io/TheCodingBlog/">
                    <img src={cardImg} alt="..." />
                </a>
            </div>
        </>
    )
}

export default Project
