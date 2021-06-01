import { Component } from "react";

export class searchcolis extends Component{

    render(){

        return(

            <div className="wrapper"> 
            <div className="form-row mb-4">
            <div className="col">
                         
            <form class="form-inline ml-3">
                  <div class="input-group input-group-sm">
                  <label >Reference </label>
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div class="input-group-append">
                      <button class="btn btn-navbar" type="submit">
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
            <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div class="input-group-append">
                      <button class="btn btn-navbar" type="submit">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
                </div>
              
             </div>
             </div>
        )
    }
}

export default searchcolis