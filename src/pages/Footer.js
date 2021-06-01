
import {  
    Route, Switch, Redirect  
} from 'react-router-dom';  
import { Component } from 'react';

export class Footer extends Component {  
    render() {  
        return (  
            <div >  
                 <footer class="main-footer">
    <strong>Copyright &copy; 2021 <a href="http://adminlte.io">Ile Info Services </a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.0.5
    </div>
  </footer>
            </div>  
        )  
    }  
}  
  
export default Footer  