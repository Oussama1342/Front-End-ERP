
import axios from "axios";

class AuthentifService {

    url = "http://localhost:8080/auth/"

    signin = 
    (username, password) =>{

            return axios.post("http://localhost:8080/auth/signin", {username, password})
            .then(response =>{
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    
                  }
                  return response.data;

            })

            .catch(err => {
                console.log(err);
                throw err;
              });
    }
    
    
    
     
}
export default new AuthentifService