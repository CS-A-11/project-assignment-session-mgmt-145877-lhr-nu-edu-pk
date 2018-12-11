import React from 'react'
import './topBar.css'
import logo from './TA_logo_primary.svg'
import Login from '../Modal/LoginModal.js'
//import {facebookConfig, googleConfig} from "../Login/social-config.js"

const logoClick = () => {
    window.location.assign("/home");
}

const hotelsClick = () =>{
    window.location.assign("/hotels");
}

const vRentalClick = () =>{
    window.location.assign("/vRentals");
}


const topBar = () => {
    return(
        <div className="topBar">
            <input type="image" className="logo"  src={logo} onClick = {logoClick} alt = "Trip Advisor"/>
            <button className="buttonStyle" onClick = {hotelsClick}>Hotels</button>
            <button className="buttonStyle" onClick = {vRentalClick}>Vacation Rentals</button>
            <button className="buttonStyle">Flights</button>
            <button className="buttonStyle">Cafés</button>
            <button className="buttonStyle" disabled></button>
            <button className="buttonStyle">My Trips</button>
            <div className = "blah">
                <Login/>
            </div>
        </div>
    )
}
export default topBar