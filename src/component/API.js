import axios from "axios";

const API_URL = "http://192.168.1.30:3001";
let header;
const login = async(adresseMail,password)=>{
    const reponse = await axios.post(API_URL+"user/loginAdmin",{
        adresseMail,
        password
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
        'Authorization': 'Bearer ' + reponse.data
    }
    const jwt = Buffer.from(reponse.data,"base64").toString("utf-8");

    return JSON.parse(jwt);


}