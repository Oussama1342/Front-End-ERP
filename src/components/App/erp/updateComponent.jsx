import React, { Component } from 'react'
import CompteDataService from '../erp/services/CompteService'

class updateComponent extends Component {


    constructor(props) {
        super(props)

        this.state = {
            id_Compte: this.props.match.params.id,
            login: '',
            password: '',
            bureau:''
        }
        this.changeLoginHandler = this.changeLoginHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeBureauHandler = this.changeBureauHandler.bind(this);
    }


    componentDidMount(){
        CompteDataService.getCompteByid(this.state.id_Compte).then( (res) =>{
            let compte = res.data;
            this.setState({login: compte.login,
                           password: compte.password,
                           bureau: compte.bureau
            });
        });
    }

    updateCompte = (e) => {
        e.preventDefault();
        let compte = {login: this.state.login, password: this.state.password };
        console.log('compte => ' + JSON.stringify(compte));
        console.log('id => ' + JSON.stringify(this.state.id_Compte));
        CompteDataService.updateCompte( compte, this.state.id_Compte).then( res => {
            this.props.history.push('/listcompte');
        });
    }

    changeLoginHandler = (event) => {
        this.setState({login: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    changeBureauHandler = (event) => {
        this.setState({bureau: event.target.value});
    }
    cancel(){
        this.props.history.push('/compteupdate');
    }
    render() {
    return(
        <div>
        <br></br>
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Employee</h3>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group">
                                    <label> Login: </label>
                                    <input placeholder="Login" name="firstName" className="form-control" 
                                        value={this.state.login} onChange={this.changeLoginHandler}/>
                                </div>bureau
                                <div className = "form-group">
                                    <label> Password : </label>
                                    <input placeholder="Last Name" name="lastName" className="form-control" 
                                        value={this.state.password} onChange={this.changePasswordHandler}/>
                                </div>
                                <div className = "form-group">
                                    <label> Bureau: </label>
                                    <input placeholder="Bureau" name="emailId" className="form-control" 
                                        value={this.state.bureau} onChange={this.changeBureauHandler}/>
                                </div>

                                <button className="btn btn-success" onClick={this.updateCompte}>Save</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

           </div>
    </div>
    );
    }
}