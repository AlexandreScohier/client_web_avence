import axios from "axios";

const API_URL = "http://localhost:3001/";
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
        'Authorization': 'Bearer ' + reponse.data.token,
        'Accept-version' : "1.0.0",
        'Access-Control-Allow-Origin' : "*"
    }
    console.log(header);
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
const deleteGarage = async(idGarage)=>{
    const reponse = await axios.delete(API_URL+"garage/",{
        headers:header,
        data:{
            id : idGarage
        }
    }).catch(error=>{
        if(error.response.status === 404)
        throw new Error("Garage inconnu");
    });
    return reponse.status;
}
const postGarage = async(nom,adresse,numTel,image)=>{
    console.log(nom);
    const reponse = await axios.post(API_URL+"garage/", {
        nom,
        adresse,
        numTel,
        image
    },{
        headers : header

    }).catch(error=>{
        if(error.response.status===500){
            throw new Error("Erreur sdur le serveur")
        }else if(error.response.status === 400){
            throw new Error("Erreur sur les éléments de la requête");
        }
    });
    return reponse.data;
}
const updateGarage = async(id,nom,adresse,numTel)=>{
    const reponse = await axios.patch(API_URL+"garage/",{
        headers:header,
        data : {
            id : id,
            nom:nom,
            adresse: adresse,
            numTel : numTel
        }
    }).catch(error=>{
        if(error.response.status === 500){
            throw new Error("Ressource manquante");
        }
    });
    return reponse.data;
}
export {
    login,
    getAllGarage,
    deleteGarage,
    postGarage,
    updateGarage
}