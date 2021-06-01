import axios from 'axios';

class Rception {

    url = "http://localhost:8080/reception/"

GetReception(){
  
    return axios.get(url+"alllreception") ; 
}

AddReception(reception){

    return axios.post(this.url+"addReaception", reception) ; 
}

UpdateReception(reception,idReception){
  
    return axios.put(this.url,idReception,reception) ;
}

DeleteReception(){
    return axios.delete(this.url,idReception)
}

findReception(){
    
}
}