import React, { Component, Suspense } from 'react';  
 

import {  
    Route, Switch, Redirect  
} from 'react-router-dom';  
import Dashboard from './Dashboard';
import Header from './Header';
import Menu from './Menu' ;
import Footer from './Footer';

export class Home extends Component {  
    render() {  
        return (  
            <div class="wrapper">  
                   <Header />
         <Menu />
         < Dashboard />
         < Footer />
            </div>  
        )  
    }  
}  
  
export default Home  