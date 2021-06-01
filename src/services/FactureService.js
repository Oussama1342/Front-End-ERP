import axios from 'axios';

class FactureService{
    url = "http://localhost:8080/facture" ;

    AllFacture(){

        return axios.get(this.url + "/allfacture")
    
    }

}