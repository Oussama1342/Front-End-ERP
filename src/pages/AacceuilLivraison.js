import React, { Component, Suspense } from 'react';  
 

import {  
    Route, Switch, Redirect  
} from 'react-router-dom';  
import Dashboard from './Dashboard';
import Header from './Header';
import Menu from './Menu' ;
import Footer from './Footer';
import Dashboard2 from './Dashboard2';
import Livraison from './Livraison' ;

export class AacceuilLivraison extends Component {  
    render() {  
        return (  
            <div class="wrapper">  
                   <Header />
                   <Menu />
               < Livraison />
         < Footer />
            </div>  
        )  
    }  
}  
  
export default AacceuilLivraison  