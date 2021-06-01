import { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import CouliService from '../services/CouliService'
import { Link } from "react-router-dom";

export class ColisListRender extends Component{

    constructor(props) {
        super(props)

        this.state = {
                colis: [],
                searchTitle: "",
                message : null ,
        
                refCoulis : '',
                nonEmeteur :'',
                addressEmeteur:'',
                numtelEmeteur:0,
                nonRecepteur:'',
                addressRecepteur:'',
                numtelRecepteur: 0,
                bureau : '',
                montant : 0 ,
                searchTitle: "" ,
                colislist: [],
                searchref : ''

           
        
        }

        this.deleteColis = this.deleteColis.bind(this)
    }

     bureau = "tunis"

    componentDidMount(){
        CouliService.allcolis(this.bureau).then((res) => {
            this.setState({ colis: res.data});
        });
    }
onChangeSearchTitle(e) {
    const searchTitle = e.target.value; 
    this.setState({
      searchTitle: searchTitle
    });
  }


  searchTitle() {
    CouliService.getCoulisByReference(this.state.searchTitle)
      .then(response => {
        this.setState({
          colislist: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }



  

    refrechColis(){
        CouliService.allcolis().then((res)=>{
            this.setState({colis : res.data}) ;
        })
    }

    deleteColis(idcolis){
        CouliService.deletecolis(idcolis).then( res => {
            this.setState({colis: this.state.colis.filter(coli => coli.idcolis !== idcolis)});
            this.refrechColis() ;
        });

 
        
    }
   
    onChangeSearchTitle(e) {
      const searchTitle = e.target.value;
  
      this.setState({
        searchTitle: searchTitle
      });
    }
    onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });

  
    test(){
      console.log(this.state.searchref)
    }


    editColis(idColis){

      return CouliService.updatecolis(idColis).then(res=>{
 
        console.log(res.data) ;
         this.setState({
          refCoulis : res.data.refCoulis ,
          nonEmeteur : res.data.nonEmeteur ,
       //   addressEmeteur : res.data.addressEmeteur ,
      //    numtelEmeteur : res.data.numtelEmeteur ,
          nonRecepteur: res.data.nonRecepteur ,
          montant : res.data.montant
       //   addressRecepteur : res.data.addressRecepteur ,
       //   numtelRecepteur : res.data.numtelRecepteur ,
        //  bureau : res.data.bureau 
         })
    

      })
    }

  


    findcolis(refcolis){
      CouliService.getCoulisByReference(refcolis).then(res=>{

        this.setState({ colis: res.data});
      })
      }
    
    render(){
      const { searchTitle, colislist, currentTutorial, currentIndex } = this.state;
        return(
          
            <div className="content-wrapper">
            {/* Content Header (Page header) */}

<br></br>
            <div className="form-row mb-4">
<div className="col">
             
<form class="form-inline ml-3">
      <div class="input-group input-group-sm">
      <label >Reference </label>
<input className="form-control form-control-navbar" type="search"  name="searchref"
                placeholder="Search" aria-label="Search" onChange={this.onChange} onClick={this.findcolis(this.state.searchref)} />
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit" >
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
    </div>
    <div className="col">
    <form class="form-inline ml-3">
      <div class="input-group input-group-sm">
  
      <label >Date </label>
<input className="form-control form-control-navbar" type="date" placeholder="Search" name="searchdate"  aria-label="Search" />
        <div class="input-group-append">
          <button class="btn btn-navbar" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>
    </div>
  
 </div>
            <div className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Dashboard Colis</h1>
                  </div>{/* /.col */}
                
                </div>{/* /.row */}
              </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section style={{ width: '1800px'}}>
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
                          <i className="fas fa-chart-pie mr-1" />
                          Liste de Colis
                        </h3>
                        <div className="card-tools">
                         
                        </div>
                      </div>{/* /.card-header */}
                      <div className="card-body">
                      <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                            <tr >
                             
                                    <th> Réference</th>
                                
                                    <th> Statut reception</th>
                                    <th> Statut Livraison</th>
                                    <th> Statut Remboursement</th>
                                    <th>  </th><th>  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.colis.map(
                                        coli => 
                                        <tr key = {coli.idCoulis}>

                               <td>{coli.refCoulis} </td> 

                                            {coli.statuReception === "enattente" ? (
    <td>  <button className="btn btn-danger"  >
</button> En attante </td>  
  ) : (
    <td> <button className="btn btn-success"  >
    </button> Confirme</td>  
  )}  
                                            
                                         
                                            {coli.modePayement === "Facture" ? (
    <td>  <button className="btn btn-success"  >
</button> Confirmé  </td>  
  ) : (
    <td> <button className="btn btn-danger"  >
    </button> En attente </td>  
  )}
                              

                      {coli.statuRembourcement === "enattente" ? (
    <td>  <button className="btn btn-danger"  >
</button> En attente </td>  
  ) : (
    <td> <button className="btn btn-success"  >Confirmé
    </button>   </td>  
  )}               

                           
                                             
                                             <td>
                                             <Link to={`/colis/edit/${coli.idCoulis}`}>
                                       <button type="button" class="btn btn-outline-primary mr-2">
                                                    Update
                                </button>
                                           </Link>

                                             </td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}}   className="btn btn-danger" onClick={() => this.deleteColis(coli.idCoulis)}>Delete </button>
                                             </td>
                                         
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                
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
          
        )
    }
}

export default  ColisListRender