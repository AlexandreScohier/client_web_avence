import axios from "axios";

const API_URL = "http://localhost:3001/";
let header = {'Access-Control-Allow-Origin' : "*"}
const login = async(adresseMail,password)=>{
    const reponse = await axios.post(API_URL+"user/loginAdmin",{
        adresseMail,
        password
    },{
        headers : header
    }).catch(error=>{

        if(error.response.status === 400){
            throw new Error("Les identifiants n'existe pas dans la base de données");
        }else if(error.response.status ===404){
            throw new Error("Utilisateur inconnu");
        }else if(error.response.status === 500){
            throw new Error("Erreur de connexion");
        }

    });
    header = {
        'Authorization': 'Bearer ' + reponse.data,
        'Access-Control-Allow-Origin' : "*"
    }
    const jwt = Buffer.from(reponse.data,"base64").toString("utf-8");

    return JSON.parse(jwt);


}
const getAllGarage = async ()=>{
    const reponse = await axios.get(API_URL+"client/1",{
    headers : header
    }).catch(error=>{
        if(error.response.status === 404)
            throw new Error("Garage inconnu");
        else if(error.response.status === 500)
            throw new Error("Erreur de connexion");
    });
    console.log(reponse);
    return reponse.data;
}
export {
    login,
    getAllGarage
}