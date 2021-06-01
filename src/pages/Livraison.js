
import {  
    Route, Switch, Redirect  
} from 'react-router-dom';  
import React, { Component } from 'react';
import livraisonService from '../services/LivraisonService'
import couliService from '../services/CouliService'
import { Link } from "react-router-dom";

export class Livraison extends Component {  


  constructor(props) {
    super(props)

    this.state = {
      coulis : [] ,
      coulisse : null ,
      chefval : '',
      matval :'' ,
      refval :'',
      refCoulis : '',
      nonEmeteur :'',
      addressEmeteur:'',
      numtelEmeteur:0,
      nonRecepteur:'',
      addressRecepteur:'',
      numtelRecepteur: 0,
      numReçu :0 ,
      
     
      remboursemant: false ,
      modepayement:  ' ',
      message : null,
      


      //Livraison/////
      refLivraison : '',
      nonChauffeur:'',
      matrCamion:'',
      bureau : '',
      referencecolis :''

    }
    this.saveCoulis = this.saveCoulis.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

}

onSubmit(e){
    e.preventDefault();

  console.log(this.state.chefval);
   console.log(this.state.matval);
  console.log(this.state.refval);
  

}

getCoulis(){


  couliService.getCoulisByReference(this.state.refval).then((res)=>{
     this.state.coulis.push(res.data)
     console.log(this.state.coulis)
  });
}

saveCoulis =(e) =>{
  e.preventDefault();
  let coulis  = {refCoulis : this.state.refLivraison, nonEmeteur : this.state.nonEmeteur , addressEmeteur : this.state.addressEmeteur, numtelEmeteur : this.state.numtelEmeteur , nonRecepteur : this.state.nonRecepteur , 
    addressRecepteur : this.state.addressRecepteur , numtelRecepteur : this.state.numtelRecepteur
    } ; 
    couliService.addCoulis(coulis).then(res => {
      this.setState({message : "coulis added with Seccesful"});
      console.log(this.message + "is Trueeee");
    })

   
  }


  saveLivraison =(e) =>{
  e.preventDefault();
  let livraison  = {refLivraison : this.state.refLivraison, nonChauffeur : this.state.nonChauffeur, bureau : this.state.bureau  ,matCamion : this.state.matCamion  }

  ; 
    livraisonService.addlivraisoncolis(livraison, this.state.referencecolis).then(res => {
      this.setState({message : "Livraison added with Seccesful"});
      console.log(res.data);
    })

   
  }

  onChange = (e) =>
  this.setState({ [e.target.name]: e.target.value });

cancel(){
  this.props.history.push('/listcompte');

}
test(){
  console.log(this.state.referencecolis)
}
    render() {  
        return (  
       <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Dashboard Livraison</h1>
        </div>{/* /.col */}
      
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
    
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section >
          {/* Custom tabs (Charts with tabs)*/}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <i className="fas fa-chart-pie mr-1" />
                Ajouter Livraison
              </h3>
              <div className="card-tools">
                <ul className="nav nav-pills ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active" href="#revenue-chart" data-toggle="tab">Area</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={this.cancel} href="#sales-chart"  data-toggle="tab">Donut</a>
                  </li>
                </ul>
              </div>
            </div>{/* /.card-header */}
            <div className="card-body">
       <form>
  {/* Email input */}
  
  <div className="form-row mb-4">
  <div className="col">
  <label className="form-label" htmlFor="form1Example1">Reference</label>
    <input type="text" id="form1Example1" className="form-control" value={this.state.refLivraison} name="refLivraison" onChange={e => this.setState({refLivraison: e.target.value}) } />
  </div>
  <div className="col">
  <label className="form-label" htmlFor="form1Example1">Non Chauffeur</label>
    <input type="text" id="form1Example1" className="form-control" value={this.state.nonChauffeur} name="nonChauffeur" onChange={e => this.setState({nonChauffeur: e.target.value}) } />
  </div>
  </div>

  <div className="form-row mb-4">
  <div className="col">
  <label className="form-label" htmlFor="form1Example2">Bureau</label>
    <input type="text" id="form1Example2" className="form-control"  name="bureau" value={this.state.bureau} onChange={e => this.setState({bureau: e.target.value}) }/>
  </div>

  <div className="col">
  <label className="form-label" htmlFor="form1Example1">Matricule Camion</label>

    <input type="text" id="form1Example1" value={this.state.matCamion} className="form-control" id="ref" name="matCamion" onChange={e => this.setState({matCamion: e.target.value}) } />
    </div>
    </div>
    <div className="form-row mb-4">
  <label className="form-label" htmlFor="form1Example1">Reference Colis</label>

    <input type="text" id="form1Example1" value={this.state.referencecolis} className="form-control" id="ref" name="referencecolis" onChange={e => this.setState({referencecolis: e.target.value}) } />
    </div>
  {/* Password input */}

  {/* 2 column grid layout for inline styling */}





  



  {/* Submit button */}
  <div > 
  <button type="submit" className="btn btn-outline-primary" style={{ marginLeft: '10em' } } onClick={this.saveLivraison} >Ajouter</button>
 
  <Link to={`/findlivraison/${this.state.refLivraison}`}>
  <button type="submit" className="btn btn-outline-primary" style={{ marginLeft: '20em'} }>Afficher</button>
  </Link>

</div>
</form>




            </div>{/* /.card-body */}
          </div>
        
          {/*/.direct-chat */}
          {/* TO DO List */}
         
          {/* /.card */}
        </section>
        {/* /.Left col */}
        {/* right col (We are only adding the ID to make the widgets sortable)*/}
   
        {/* right col */}
      </div>
      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}







  <div className="content-header">

  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
    
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section className="col-lg-7 connectedSortable">
          {/* Custom tabs (Charts with tabs)*/}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
             
                Bourdoreau de Livraison
              </h3>
           
            </div>{/* /.card-header */}
            <div className="card-body">
       <form>
  {/* Email input */}
  
  <div className="form-row mb-4">
  <div className="col">
  <label className="form-label" htmlFor="form1Example1">Non Chaufeur :{this.state.chefval}</label>
  </div>
  <div className="col">
  <label className="form-label" htmlFor="form1Example1">Date Livraison: {this.state.datelivraison}</label>
  </div>
  </div>
  
  <div className="form-row mb-4">
  <div className="col">
  <label className="form-label" htmlFor="form1Example1">Matricule Camion :{this.state.matrCamion}</label>
  </div>
  <div className="col">
  </div>
  </div>

  <div className="card-body">
                      <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                            <tr >
                             
                                    <th> Réference</th>
                      
                                    <th> Recepteur</th>
                                    <th> Reception</th>
                                    <th> Livraison</th>
                                    <th> Remboursement</th>
                                    <th>  </th><th>  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.coulis.map(
                                        coli => 
                                        <tr key = {coli.idCoulis}>

                               <td>{coli.refCoulis} </td>  
                       
                               <td>{coli.nonRecepteur} </td> 

                               <td>{coli.statuReception} </td>    




                               {coli.modePayement === "Facture" ? (
    <td>  <button className="btn btn-success"  >
</button> Confirmé  </td>  
  ) : (
    <td> <button className="btn btn-danger"  >
    </button> En attente </td>  
  )}                 
     <td>{coli.statuRembourcement} </td>    
  
                              
                           
                                             
                                     
                                          
                                         
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                
                      </div>
  {/* Password input */}

  {/* 2 column grid layout for inline styling */}





  



  {/* Submit button */}
  <button type="submit" className="btn btn-outline-primary" style={{ marginLeft: '40%'}} onClick={this.test()}>imprimer</button>

</form>




            </div>{/* /.card-body */}
          </div>
        
          {/*/.direct-chat */}
          {/* TO DO List */}
         
          {/* /.card */}
        </section>
        {/* /.Left col */}
        {/* right col (We are only adding the ID to make the widgets sortable)*/}
   
        {/* right col */}
      </div>
      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
  {/* /.content */}
</div>
















         );
        
        }
    }
    export default Livraison