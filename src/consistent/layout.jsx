import React from 'react';
import Searchbox from '../Search/Searchbox'
import Topbar from '../TopBar/topBar'
import './layout.css'

var uName;
var pWord;
const switcher = ()=>{
    if(document.getElementById("switch").textContent === "Switch to Login")
    {
        document.getElementById("switch").textContent = "Switch to Signup";
        document.getElementById("send").textContent = "Login";
    }
    else if(document.getElementById("switch").textContent === "Switch to Signup")
    {
        document.getElementById("switch").textContent = "Switch to Login";
        document.getElementById("send").textContent = "Signup";
    }
}

const attemptLogin = () =>{
    fetch('/users?uname='+uName+'&pwd='+pWord)
    .then(res => res.json())
    .then((result) => {
        localStorage.setItem('currentUser', result[0].username);
    });
}

const layout = (props) =>{
    return(
        <div>
            <Topbar></Topbar>
            <div id = 'login' className = "Login">
                <input id = 'username' className = "userName" placeholder = "Username" onChange={(evt)=>{uName = evt.target.value}}></input>
                <input id = 'pass' type = "password" className = "Pass" placeholder = "Password" onChange = {(evt)=>{pWord = evt.target.value}}></input>
                <button id = 'send' className = "loginButton" onClick = {attemptLogin}> Login </button>
                <button id = 'switch' className = "Switcher" onClick = {switcher}>Switch to Signup</button>
            </div>
            <header className="App-header">
                <Searchbox></Searchbox>
            </header>
        </div>
    )
}

export default layout;