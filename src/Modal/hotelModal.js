import React,{Component} from 'react'
import '../TopBar/topBar.css'
import './hotelModal.css'
import {Route, Switch} from 'react-router-dom';
const ReactBootstrap = require('react-bootstrap');

var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;


export default class loginModal extends Component{

    state = {
        comments: {},
        rating: {},
        
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
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
};