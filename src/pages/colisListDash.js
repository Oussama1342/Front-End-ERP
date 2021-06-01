import { Component } from "react";
import Header from './Header'
import Menu from './Menu'
import ColisListRender from './ColisListRender'
export class colisListDash extends Component {

    render(){
        return(
<div class="wrapper">
            <Header/> ,
            <Menu/>, 
            <ColisListRender />
            </div>
        )
    }
}

export default colisListDash