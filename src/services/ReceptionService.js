import axios from 'axios';
class ResptionService {
url = "http://localhost:8080/reception" ;


AllReception(){

    return axios.get("http://localhost:8080/auth/alllreception")

}

DeleteRecep(idRep){
    return axios.delete(this.url + "/remove/"+idRep)
}

UpdateRecep(id, Reception){

    return axios.put(this.url+"/edit"+id, Reception)

}

editstatus(id){

    return axios.put("http://localhost:8080/auth/edirrecep" + "/" +id)
}
    
}

export default new ResptionService 