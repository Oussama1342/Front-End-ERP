import React, { Component } from "react";
import axios from 'axios';
import  { Link } from 'react-router-dom'
import Acceuil from './Acceuil'
export class AuthentifDash extends Component{

  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const endpoint = "http://localhost:8080/auth/signin";

    const enpoin1 = "localhost:8080/auth/bureau/" ;

    const user_object = {
      username: this.state.username,
      password: this.state.password
    };

    axios.post(endpoint, user_object).then(res => {

      
      localStorage.setItem("authorization", res.data.accessToken); 
      localStorage.setItem("User", res.data.username); 
      localStorage.setItem("bureau", axios.get(enpoin1+localStorage.getItem("User")))
      console.log("Success .....") ;
      
    }

    
    );
    
 
  };

  onChange = (e) =>
  this.setState({ [e.target.name]: e.target.value });


    render(){
        return(
<div classname="wrapper">
  <div className="container">
    <div className="d-flex justify-content-center h-100">
      <div className="card">
        <div className="card-headers">
          <h3>Sign In</h3>
      
        </div>
        <div className="card-body">
          <form onSubmit={this.handleFormSubmit} >
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-user" /></span>
              </div>
              <input type="text" className="form-control" placeholder="username" name="username"  value={this.state.username} onChange={e => this.setState({username: e.target.value}) }   />
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fas fa-key" /></span>
              </div>
              <input type="password" className="form-control" placeholder="password" name="password" value={this.state.password} onChange={e => this.setState({password: e.target.value}) } />
            </div>
            <div className="row align-items-center remember">
              <input type="checkbox" />Remember Me
            </div>
            <div className="form-group">
              <input type="submit" defaultValue="Login"  className="btn float-right login_btn"  />
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account?<a href="#">Sign Up</a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



        )
    }
}
export default AuthentifDash