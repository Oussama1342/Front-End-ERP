import axios from 'axios';

class CouliService {

    url = "http://localhost:8080/coulis/" ;


    getcoulisByRef(idCouls){
    return axios.get(this.url +`getcouls/${idCouls}`) ;
    }

    addCoulis(coulis){
    return axios.post("http://localhost:8080/auth/addcoulis", coulis)
    }

    allcolis(bureau)
    {
        return axios.get("http://localhost:8080/auth/findoulis" +"/" + bureau)
    }

    deletecolis(idcolis)
    {
        return axios.delete("http://localhost:8080/auth/deletcolis" + "/" + idcolis);
    }


    updatecolis(idcolis){

        return  axios.put("http://localhost:8080/auth/updatecolis" + "/" + idcolis , {
            headers: {
                'Content-Type': 'application/json',
            }
        }
     )
    }


    getCoulisByReference(refcoulis){

        return axios.get("http://localhost:8080/auth/getcouls" + "/" + refcoulis)
    }
}

export default new CouliService