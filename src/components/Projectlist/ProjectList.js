import React from 'react'
import './projectList.css'
import Project from '../project/Project'

function ProjectList() {
    return (
        <>
            <div className="pl">
                <div className="pl-texts">
                    <h1 className="pl-title">My Projects</h1>
                    <p className="pl-desc">Here are my workes that I created while learning and developing my coading skills.</p>
                </div>
                <div className="pl-list">
                    <Project />
                    <Project />

                </div>
            </div>
        </>
    )
}

export default ProjectList
