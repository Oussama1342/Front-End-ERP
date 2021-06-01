import { Component } from "react"

import Header from './Header'

import Dashboard2 from './Dashboard2'
import Menu from './Menu'
import Coliseditdash from './Coliseditdash'
export class colisEdit extends Component{

    render(){

        return(
  
            <div className="wrapper">
          < Header />,
    <Menu /> ,
          < Coliseditdash />
          </div>
        )
    }

}

export default colisEdit 