import { Component } from "react";
import Header from './Header';
import Menu from './Menu';
import ReseptionDash from '././ReceptionDeshboard'


class reception extends Component{

    render(){
        return(
            <div class="wrapper">
            <Header /> 
            <Menu />
            <ReseptionDash />
            </div>
        );
    }
}

export default reception  