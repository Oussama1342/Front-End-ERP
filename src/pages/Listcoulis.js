import { Component } from "react"
import couliService from '../services/CouliService'

export class Listcoulis extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
        
        coulis :null ,
        search:'' ,
        coliss : []
      

    }

    

}
    
      
    

onChange = (e) =>
this.setState({ [e.target.name]: e.target.value });


    getCoulis(id){

  
        couliService.getcoulisByRef(id).then((res)=>{
          
           //console.log(res.data)
           this.state.coliss.push(res.data)
          console.log(this.state.coliss)
        });
      }

    render(){
        return(

            <div className="content-wrapper">

<div className="form-row mb-4">
<div className="col">
             <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
      
      <label  >Reference</label>

        <input className="form-control form-control-navbar" type="search" name="search" placeholder="Search" aria-label="Search" onChange={this.onChange} />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit" onClick={this.getCoulis(this.state.search)}>
            <i className="fas fa-search" />
          </button>
        </div>

        </div>
    
    </form>
    </div>
    <div className="col">
             <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
      <label className="form-label" htmlFor="form1Example2">Date de Colis </label>

        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form>
    </div>
  
 </div>


 <div className="card-body">
                      <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                            <tr >
                                    <th> Reference</th>
                                    <th> Emeteur</th>
                                    <th>  Recepteur</th>
                                    <th> Montant</th>
                                  
                                    <th>  </th><th>  </th><th>  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.coliss.map(
                                        reception => 
                                        <tr key = {reception[0].idCoulis}>

                                            
                                            <td> { reception[0].refCoulis} </td>  
                                            <td> { reception[0].nonEmeteur} </td>
                                     

                                   
                                             <td>
                                             <button  className="btn btn-info">Update </button>
                                             </td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}}  className="btn btn-danger">Delete </button>
                                             </td>
                                             <td>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                
                      </div>
 
            </div>

        )
        
        ;
    }
}

export default Listcoulis