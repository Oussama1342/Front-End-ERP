import { Component } from 'react';
import {  
    Route, Switch, Redirect, Link  
} from 'react-router-dom';  
export class Menu extends Component {  
    render() {  
        return (  
         <div>  
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img src="dist/img/transport.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">Express Transport</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/avatar5.png" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block"> Admin</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
            <i class="fas fa-truck"></i>              <p>
                Colis
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
         
        
              <li className="nav-item">
                <a href="./index3.html" className="nav-link ">
                  <i className="far fa-circle nav-icon" />
                 <Link to="/acceuil"><p>Ajouter Couli
                   </p></Link> 
                </a>
              </li>
           
              <li className="nav-item">
                <a href="./index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <Link to="/colislist"><p>Liste de Couli</p></Link> 
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
            <i class="fas fa-truck"></i>              <p>
                Livraison

                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
         
        
              <li className="nav-item">
                <a href="./index3.html" className="nav-link ">
                  <i className="far fa-circle nav-icon" />
                 <Link to="/livraison"><p>Ajouter Livraison</p></Link> 
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link ">
                  <i className="far fa-circle nav-icon" />
                 <Link to="/livraison"><p>Chercher Livraison</p></Link> 
                </a>
              </li>
              <li className="nav-item">
                <a href="./index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <Link to="/listcolier"><p>Liste de Livraison</p></Link> 
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
            <i class="fas fa-truck"></i>              <p>
                Reception

                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
         
        
              <li className="nav-item">
                <a href="./index3.html" className="nav-link ">
                  <i className="far fa-circle nav-icon" />
                 <Link to=""><p>Ajouter Reception</p></Link> 
                </a>
              </li>
              <li className="nav-item">
                <a href="./index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <Link to="/listrecep"><p>Chercher Reception</p></Link> 
                </a>
              </li>
              <li className="nav-item">
                <a href="./index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <Link to="/listrecep"><p>Liste de Reception</p></Link> 
                </a>
              </li>
            </ul>
          </li>

          
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
            <i class="fas fa-cash-register"></i>              <p>
                Caisse

                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
         
        
              <li className="nav-item">
                <a href="./index3.html" className="nav-link ">
                  <i className="far fa-circle nav-icon" />
                 <Link to=""><p>Historique de caisse</p></Link> 
                </a>
              </li>
           
             
            </ul>
          </li>

          
          
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
            <i class="fas fa-money-bill"></i>            <p>
                Facture

                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
         
        
              <li className="nav-item">
                <a href="./index3.html" className="nav-link ">
                  <i className="far fa-circle nav-icon" />
                 <Link to=""><p>Liste de Factures</p></Link> 
                </a>
              </li>
           
             
            </ul>
          </li>
          
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )  
    }  
}  
  
export default Menu  