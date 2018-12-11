import React,{Component} from 'react'
import '../TopBar/topBar.css'
import './loginModal.css'
import FacebookLogin from 'react-facebook-login';
import {Route, Switch} from 'react-router-dom';
const ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;


export default class loginModal extends Component{

    state = {
        showModal: false,
        login:true
    }

    constructor(props)
    {
        super(props);
        this.getInitialState = this.getInitialState.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

    }
  getInitialState() {
    return { showModal: false };
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  checkLogin()
  {

  }

  checkSignup()
  {

  }

  responseFacebook = (response) => {
    console.log(response);
    this.storeUser(response.email);
  }

  storeUser = (user) => {
    localStorage.setItem("user",user);
    var a = document.getElementById("loginButton");
    a.textContent = user;
    a.disabled = true;
    a.backgroundColor = "white";
  }

  componentClicked = () => {

  }

  render() {
    
    return (
      <div>

        <Button id = "loginButton" className = "loginButtonStyle"
          onClick={this.open}
        >
          Join
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title className = "titleGrid">
                <button id = "lgn" className="login" onClick = {()=>
                  {
                    this.setState({login:true})
                    document.getElementById("lgn").style.backgroundColor="PaleTurquoise"
                    document.getElementById("sup").style.backgroundColor="white"
                  }}>Login</button>
                <button id = "sup" className="login" onClick = {()=>
                  {this.setState({login:false})
                    document.getElementById("lgn").style.backgroundColor="white"
                    document.getElementById("sup").style.backgroundColor="PaleTurquoise"
                  }}>Signup</button>
                  
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div id = "modalBody" className = "mBody">
                {this.state.login?
                  <Switch>
                  <Route path = "/login" />
                    <div className = "mBody">
                        <p>Username: </p>
                        <input id = "uname"></input>
                        <p></p>
                        <p>Password: </p>
                        <input id = "pword" type="password"></input>
                        <p></p>
                        <button onClick={this.checkLogin}>Login</button>
                        <p></p>
                        
                        <FacebookLogin
                          appId="403591943437124"
                          // autoLoad={true} : this will login automatically on button press
                          fields="name,email,picture, friends"
                          scope="public_profile,email,user_friends"
                          onClick={this.componentClicked}
                          callback={this.responseFacebook} />
                    </div>
                    </Switch> 
                    :
                    <div className = "mBody">
                        <p>Username: </p>
                        <input></input>
                        <p></p>
                        <p>Password: </p>
                        <input type="password"></input>
                        <p></p>
                        <p>Re-Enter Password: </p>
                        <input type="password"></input>
                        <p></p>
                        <input
                            id="isBusiness"
                            type="checkbox"/>
                        {"  Business User"}
                        <br />
                        <button onClick={this.checkSignup}>Signup</button>
                    </div>
                   
                }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <p>(c) TripAdvisor</p>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};