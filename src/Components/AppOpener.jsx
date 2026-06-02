import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppContext';
import './AppOpener.css'

export const AppOpener = () => {

    const { state, dispatch } = useContext(AppContext);

    return (
        <header className="fixed-header">
            <div className="header-container">
                <div className='left-header'>
                    Open Soakify App For Better Experience.
                </div>
                <div className='right-header'>
                    <a href="#" className="open-app-button">Open</a>
                    <a className="close-button" onClick={()=>dispatch({ type: "SET_APP_OPENER", payload: 0 })}>×</a>
                </div>
            </div>
        </header>
    )
}
