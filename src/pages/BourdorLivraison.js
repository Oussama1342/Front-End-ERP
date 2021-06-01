import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import  { useRef } from "react";

const BourdorLivraison =()=>{

    let history = useHistory();
    const { refLivraison } = useParams();




  
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
                 Livraison 
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
  
  
<div className="form-row mb-4">
<div className="col">
   <font    size={2} ><font ><b>N :</b> </font></font><br></br>
   <font   size={2} ><font ><b>Date :</b> </font></font>
</div>

   <div className="col"  id="arrondi" >
   <font   size={2} ><font ><b>Chauffeur :</b> </font></font><br></br>
   <font   size={2} ><font ><b>Matricule :</b> </font></font><br></br>
   <font   size={2} ><font ><b>Bureau :</b> </font></font>

   </div>
   </div>














 
   
    <hr />
    <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                            <tr >
                             
                                    <th>  <font   size={2} ><font ><b>Réference </b> </font></font><br></br> </th>
                                    <th>  <font   size={2} ><font ><b>Destination </b> </font></font><br></br> </th>
                                    <th>  <font   size={2} ><font ><b>Statut reception </b> </font></font><br></br> </th>
                                    <th>  <font   size={2} ><font ><b>Statut Livraison </b> </font></font><br></br> </th>
                                    <th>  <font   size={2} ><font ><b>Statut Remboursement </b> </font></font><br></br> </th>

                            
                                 
                                </tr>
                            </thead>
                            <tbody>
                                
                                   
                                  
                                        <tr>

                               <td> </td> 

                                   <td> </td>
                                   <td> </td>   
                                         
                                     <td> </td>
                                 <td> </td>

                           
                                             
                                            
                                           
                                         
                                        </tr>
                                    
                                
                            </tbody>
                        </table>

                 </div>
  {/* Password input */}

  {/* 2 column grid layout for inline styling */}





  



  {/* Submit button */}
  <div > 
 
  <button type="submit" className="btn btn-outline-primary" style={{ marginLeft: '30em'} }>imprimer</button>

</div>
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
    )


    
}

export default BourdorLivraison;