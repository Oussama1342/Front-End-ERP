import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import  listCompte from './components/App/erp/listCompte'
import  addCompte from './components/App/erp/addCompte'
import Home from './pages/Home'
import Header from './pages/Header'
import Dashboard from './pages/Dashboard'
import Menu from './pages/Menu'
import Reception from './pages/reception'
import Footer from './pages/Footer'
import Acceuil from './pages/Acceuil'
import update from './pages/updateRecep'
import updatdash from './pages/updateDash'
import accLivraison from './pages/AacceuilLivraison'
import DashCoulis from './pages/DashCoulis'
import home from './pages/Home'
import Facture from './pages/Facture'
import Caisse from './pages/Caisse'
import Authentif from './pages/Authentif'
import colisEdit from './pages/colisEdit'

import BourdorLivraison from './pages/BourdorLivraison'


import ColisListdash from './pages/colisListDash'
function App() {

 return (   <div>
      <Router>


<div className="wrapper">
    <Switch> 
          <Route path = "/listcompte" exact component = {listCompte}></Route>
          <Route path = "/creatcompte" exact component = {addCompte}></Route>
          <Route path = "/acceuil" exact component = {Acceuil}></Route>
          <Route path = "/creatcompte" exact component = {addCompte}></Route>
          <Route path = "/listrecep" exact component = {Reception}></Route>
          <Route path = "/updatedash" exact component = {updatdash}></Route>
          <Route path = "/livraison" exact component = {accLivraison}></Route>
         <Route path = "/searchcols" exact component = {DashCoulis}></Route>
         <Route path = "/factures" exact component = {Facture}></Route>
         <Route path = "/caisses" exact component = {Caisse}></Route>
         <Route path = "/colislist" exact component = {ColisListdash}></Route>
         <Route path = "/authentif" exact component = {Authentif}></Route>
         <Route path = "/colis/edit/:id" exact component = {colisEdit}></Route>
         <Route path = "/findlivraison" exact component = {BourdorLivraison}></Route>

          <Route path = "/" exact component = {home}></Route> 


          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
    </Switch>
</div>

</Router>
</div>)
}

export default App;
