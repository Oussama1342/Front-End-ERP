import { Component } from "react";

import Listcoulis from "./Listcoulis"
import Header from "./Header"
import Menu from "./Menu";
import ColisListRender from "./ColisListRender";
import searchcolis from './searchcolis'
export class DashCoulis extends Component {

    render(){
        return(
            <div className="wrapper">  
            <Header />
            <Menu />
            
            

           </div>
        )
    }
}

export default DashCoulis