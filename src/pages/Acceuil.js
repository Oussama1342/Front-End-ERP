import React, { Component, Suspense } from 'react';  
 

import {  
    Route, Switch, Redirect  
} from 'react-router-dom';  
import Dashboard from './Dashboard';
import Header from './Header';
import Menu from './Menu' ;
import Footer from './Footer';
import Dashboard2 from './Dashboard2';

export class Acceuil extends Component {  
    render() {  
        return (  
            <div class="wrapper">  
                   <Header />
                   <Menu />
               < Dashboard2 />
         < Footer />
            </div>  
        )  
    }  
}  
  
export default Acceuil  