import axios from "axios";

const API_URL = "http://localhost:3004/";
let header = {'Access-Control-Allow-Origin' : "*"}
const login = async(adresseMail,password)=>{

    const reponse = await axios.post(API_URL+"user/admin",{
        adresseMail,
        password
    },{
        headers : header
    }).catch(error=>{

        if(error.response.status === 400){
            throw new Error("Les identifiants n'existent pas dans la base de données");
        }else if(error.response.status === 404){
            throw new Error("Utilisateur inconnu pour cet administrateur");
        }else if(error.response.status === 500){
            throw new Error("Erreur de connexion");
        }

    });
    header = {
        'Authorization': 'Bearer ' + reponse.data,
        'Access-Control-Allow-Origin' : "*"
    }
    console.log(reponse.data);


    return reponse.data;


}
const getAllGarage = async ()=>{
    const reponse = await axios.get(API_URL+"garage/",{
    headers : header
    }).catch(error=>{
        if(error.response.status === 404)
            throw new Error("Garage inconnu");
        else if(error.response.status === 500)
            throw new Error("Erreur de connexion");
    });
    console.log(JSON.stringify(reponse.data));
    return reponse.data;
}
export {
    login,
    getAllGarage
}