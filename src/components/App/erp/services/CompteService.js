import axios from 'axios';

class CompteDataService{

    AllCompte(){
        return axios.get("http://localhost:8080/compte/allcompte");
    }

    createCompt(compte){
     return axios.post("http://localhost:8080/compte/sigup", compte);
    }

    updateCompte(compte, compteId){
        return axios.put("http://localhost:8080/compte/modif"+"/"+compteId,compte);
    }

    deleteCompte(compteId){
        return axios.delete("http://localhost:8080/compte/deletecmpt" + '/' + compteId);
    }

    getCompteByid(compteId){
   
        return axios.get("http://localhost:8080/compte/getCompt"+"/" + compteId);
    }
    createCompte(compte){
        return axios.post("http://localhost:8080/compte/signup")
    }
}

export default new CompteDataService