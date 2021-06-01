import React, { Component } from "react";

import CompteDataService from '../erp/services/CompteService'

class listCompte extends Component{

    constructor(props) {
        super(props)

        this.state = {
                comptes: [],
        
        }
        this.addCompte = this.addCompte.bind(this);
    }


    componentDidMount(){
        CompteDataService.AllCompte().then((res) => {
            this.setState({ comptes: res.data});
        });
    }

    deleteCompte(id){
        CompteDataService.deleteCompte(id).then( res => {
            this.setState({comptes: this.state.comptes.filter(compte => compte.id !== id)});
        });
    }

    addCompte(compte){
        //window.localStorage.setItem("conpteId") ;
        CompteDataService.createCompt(compte).then( res => {
            this.setState({comptes : this.state.comptes.push(compte)})
        })

    }

   

    render() {
        return (

            <div>
                 <h2 className="text-center">Comptes List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCompte}> Add Employee</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                            <tr >
                             
                                    <th> Login</th>
                                    <th>  Password</th>
                                    <th> Bureau</th>
                                    <th>  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.comptes.map(
                                        compte => 
                                        <tr key = {compte.id_Compte}>

                                            
                                            <td> { compte.login} </td>  
                                             <td> { compte.password} </td>   
                                             <td> {compte.password}</td>
                                       
                                             <td>
                                                 <button  className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCompte(compte.id_Compte)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        );
    
    }
}
export default listCompte 