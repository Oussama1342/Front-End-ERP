import {Field, useDataHook} from "model-react";
import React from "react";


class Compte {
    constructor(username, password,bureau){

        this.username = new Field(username);
        this.password = new Field(password);
        this.bureau = new Field(bureau);
    }
   
   
    setUsername(username){
    this.username.set(username);
    }

    getUsername(usern){

        return this.username.get(usern);

    }

    setPassword(password){
        this.password.set(password);
        }
    
        getPassword(pass){
    
            return this.password.get(pass);
    
        }

        setUsername(bureau){
            this.bureau.set(bureau);
            }
        
            getUsername(bureau){
        
                return this.bureau.get(bureau);
        
            }

}