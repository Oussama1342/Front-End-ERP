import axios from 'axios';
class LivraisonService {

url = "http://localhost:8080/livraison" ;

addLivraison(livraison){

    return axios.post(this.url +"/addlivraison", livraison) ;
}


addlivraisoncolis(livraison, refcls){

  return axios.post("http://localhost:8080/auth/addlivraison" + "/" + refcls , livraison)
}


getLivraisonbyref(ref){

  return axios.get("http://localhost:8080/auth/findlivraison" + "/" + ref) ;
}
}
export default new LivraisonService 