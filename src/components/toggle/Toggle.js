import React, { useContext } from 'react'
import './toggle.css'
import Sun from './modeImg1.png'
import Moon from './modeImg2.png'
import { ThemeContext } from '../../context'

function Toggle() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleMode = () => {
        theme.dispatch({ type: 'TOGGLE' })
    }
    return (
        <div className='t'>
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <button className='t-button' onClick={handleMode} style={{ left: darkMode ? '25px' : '0px' }} ></button>
        </div>
    )
}

export default Toggle
