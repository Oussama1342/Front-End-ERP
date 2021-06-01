import { Component } from "react";
import ReceptionService from "../services/ReceptionService";
import recepService from '../services/ReceptionService'

class updateRecep extends Component{
    constructor(props) {
        super(props)

        this.state = {
        currentreception : {  
            nonEmeteur: '',
            nonRecepteur : '',
            addressEmeteur : '',
            addressRecepteur : '',
            nonChauffeur : ''
        },
        message : ''
        
        }
    }


    deleteRecep(id, recep){
    
        recepService.DeleteRecep(id, recep)
    }

    updateRecep(){

      
        recepService.UpdateRecep(this.state.currentreception.id, this.state.currentreception).
        then(response => {
            console.log(response.data) ; 
            this.setState({
                message :" Upload with successful"
            })
        })
    }


    render() {
          return(
            <div className="content-header">
            
         </div>
          )
    }
}

export default updateRecep ;