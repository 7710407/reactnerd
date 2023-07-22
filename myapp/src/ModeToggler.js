import React, { useState } from 'react'
import Btn from './Btn';
import './ModeToggler.css';
import { ModeContext } from './ModeContext';

const ModeToggler = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    // let darkModeOn = true;

    const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    }

    return (
        <ModeContext.Provider value={{ isDarkMode, toggleMode }}>
            <div className={`mode-toggler ${isDarkMode ? 'dark' : 'light'}`}>

                <Btn />
            </div>
        </ModeContext.Provider>
    )
}

export default ModeToggler