import { Component } from "react";
import CompteDataService from './services/CompteService'

class AddCompte extends Component{

    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id_Compte,
            login: '',
            password: '',
            bureau: '' ,
            message: null
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    saveCompte =(e)=> {
        e.preventDefault();
        let compte = {login: this.state.login, password: this.state.password, bureau: this.state.bureau};
        console.log('compte => ' + JSON.stringify(compte));
        CompteDataService.saveCompte(compte)  .then(res => {
            this.setState({message : 'Compte added successfully.'});

        }); ;
    }

    changeLoginHandler= (event) => {
        this.setState({login: event.target.value});
    }
    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }
    changeBureauHandler= (event) => {
        this.setState({bureau: event.target.value});
    }
    cancel(){
        this.props.history.push('/listcompte');
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h2>Add Compte</h2>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Login: </label>
                                            <input placeholder="Login" name="firstName" className="form-control" 
                                                value={this.state.login} onChange={this.changeLoginHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="lastName" type="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Bureau: </label>
                                            <input placeholder="Bureau" name="emailId" className="form-control" 
                                                value={this.state.bureau} onChange={this.changeBureauHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveCompte}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
export default AddCompte 