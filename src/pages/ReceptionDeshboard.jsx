
import {  
    Route, Switch, Redirect  
} from 'react-router-dom';  
import { Component } from 'react';
import recepService from '../services/ReceptionService'

export class ReseptionDash extends Component {  

    constructor(props) {
        super(props)

        this.state = {
                receptions: [],
        
        }
    }
    componentDidMount(){
        recepService.AllReception().then((res) => {
            this.setState({ receptions: res.data});
            console.log(res.data)
        });
    }
    deleteRecep(id){
      
        recepService.DeleteRecep(id).then((res) => {
            this.setState({receptions : this.state.receptions.filter(reception => reception.id !== id)})
        })
    }




    editStatus(id){
          
       recepService.editstatus(id) ;

    }
    render() {  
        return (  


         <div >
             <section className="content">
    <div className="container-fluid">
      {/* Small boxes (Stat box) */}
    
      {/* /.row */}
      {/* Main row */}
      <div className="row">
        {/* Left col */}
        <section  style={{ marginLeft: '30%' } }>
          {/* Custom tabs (Charts with tabs)*/}
          <div className="card"  style= { { marginLeft: '5%' } , { width: '1000px' } }>
            <div className="card-header">
              <h3 className="card-title" >
                <i className="fas fa-chart-pie mr-1" />
                 Dashboard Reception 
              </h3>
             
            </div>{/* /.card-header */}
            <div className="card-body">
       <form>
  {/* Email input */}
  
  <div className="form-row mb-4">
  <div className="col">
  <img src="/dist/img/transport.png"   style={{ width: '100px' }, { height: '100px' }  }  />
  </div>
  <div className="col">
  <font size={2} style={{lineHeight: '1px'}}><font >Express Transport</font></font><br></br>
  {/*<font size={2} style={{lineHeight: '1px'}}><font face="Times New Roman">5000 Avenu de x</font></font><br></br>*/}
  <font size={2} style={{lineHeight: '1px'}}><font >5000 Avenu de x</font></font><br></br>
  <font size={2} style={{lineHeight: '1px'}}><font >751256487</font></font>

  </div>
  </div>

  <hr  />
  
  















 
   
     <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                            <tr >
                             
                                    <th> Code Reception</th>
                                        <th>  Reference Colis</th>
                                    <th>   Status</th>
                                   <th>  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.receptions.map(
                                        reception => 
                                        <tr key = {reception.codeReception}>

                                            
                                            <td> { reception.codeReception} </td>  
                                                <td> { reception.refColis} </td>   
                                         

                                             {reception.status === "nonconfirme" ? (
    <td>  <button className="btn btn-danger"  >
</button> En attante </td>  
  ) : (
    <td> <button className="btn btn-success"  >
    </button> Confirme</td>  
  )} 

                                       
                                             
                                             
                                             <td>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-info" onClick={() => this.editStatus(reception.codeReception)}>Confirme </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
  {/* Password input */}

  {/* 2 column grid layout for inline styling */}





  



  {/* Submit button */}
 
</form>




            </div>{/* /.card-body */}
          </div>
        
        
        </section>
 
        {/* right col */}
      </div>
      {/* /.row (main row) */}
    </div>{/* /.container-fluid */}
  </section>
        </div>




















            /////////////////////////
     
            
         
          
          
         
                  


         );
        
        }
    }
    export default ReseptionDash