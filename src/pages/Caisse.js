import { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";

export class Caisse extends Component{

    render(){
        return(
            <div className="wrapper">

            <Header />
            <Menu />
            </div>
        )
    }
}
export default Caisse