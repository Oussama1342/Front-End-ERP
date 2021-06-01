import { Component } from "react";
import Dashboard2 from "./Dashboard2";
import Header from "./Header";
import Menu from "./Menu";

export class Facture extends Component{

    render(){
        return(
            <div className="content-wrapper">
            <Header />,
            
            <Menu />
      
            </div>
        );

    }
}

export default Facture