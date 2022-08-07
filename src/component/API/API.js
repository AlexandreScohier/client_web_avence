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


    return reponse.data;


}

const getAsync = async (route) => {
    return (await axios.get(API_URL + route, {headers: {Authorization:"Bearer " + localStorage.getItem("Token")}})).data;
}

const getByIdAsync  = async (route, id) => {
    return (await axios.get(API_URL + route + id, {headers: {Authorization:"Bearer " + localStorage.getItem("Token")}})).data;
}

const deleteAsync  = async (route, id) => {
    (await axios.delete(API_URL + route, {headers: {Authorization:"Bearer " + localStorage.getItem("Token")}, data:{id : id}}));
}

const updateAsync  = async(route, element) => {
    (await axios.patch(API_URL + route,element, {headers: {Authorization:"Bearer " + localStorage.getItem("Token")}}));
}

const postAsync = async(route, element) => {
    await axios.post(API_URL + route, element, {headers: {Authorization:"Bearer " + localStorage.getItem("Token")}});
}


const getGarageById = async (idGarage) => {
    const response = await axios.get(API_URL+"garage/"+idGarage,{
        headers : {
            Authorization:"Bearer " + localStorage.getItem("Token")
        }
    }).catch(error=>{
        if(error.response.status === 404)
            throw new Error("Garage inconnu");
        else if(error.response.status === 500)
            throw new Error("Erreur de connexion");
    });
    return response.data;
}
const getAllGarage = async ()=>{
    const reponse = await axios.get(API_URL+"garage/",{
        headers : {
            Authorization:"Bearer " + localStorage.getItem("Token")
        }
    }).catch(error=>{
        if(error.response.status === 404)
            throw new Error("Aucun garage renseigné");
        else if(error.response.status === 500)
            throw new Error("Erreur de connexion");
    });
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
    console.log(nom,adresse,numTel,image);
    const reponse = await axios.post(API_URL+"garage/", {
        nom:nom,
        adresse:adresse,
        numTel:numTel,
        image:image
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
    console.log(nom);
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
const getAllMecanicien = async()=>{
    const reponse = await axios.get(API_URL+"mecano/",{
        headers : header
    }).catch(error=>{
        if(error.response.status === 404)
            throw new Error("Pas de mécanicien dans la base de dinnées");
        else if(error.response.status === 500)
            throw new Error("Erreur de connexion");
    })
    return reponse.data;
}
const deleteMecanicien =  async(idMecanicien)=>{
    const reponse = await axios.delete(API_URL+"mecano/",{
        headers:header,
        data:{
            id : idMecanicien
        }
    }).catch(error=>{
        if(error.response.status === 404)
            throw new Error("Mecano inconnu");
    });
    return reponse.status;
}
const updateMecanicien= async(id,nom,prenom,password)=>{
    const reponse = await axios.patch(API_URL+"mecano/",{
        headers:header,
        data : {
            id : id,
            nom:nom,
            prenom: prenom,
            password : password
        }
    }).catch(error=>{
        if(error.response.status === 500){
            throw new Error("Ressource manquante");
        }
    });
    return reponse.data;
}
const postMecanicien = async(nom,prenom,password,adresseMail,garage_fk)=>{
    console.log(nom,prenom,password,adresseMail,garage_fk);
    const reponse = await axios.post(API_URL+"mecano/", {
        nom:nom,
        prenom:prenom,
        password:password,
        adresseMail:adresseMail,
        garage_fk : garage_fk
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
const getAllDispo = async()=>{
    console.log(localStorage.getItem("Token"));
    const reponse = await axios.get(API_URL+"disponibilite/",{
        headers : {
            Authorization:"Bearer " + localStorage.getItem("Token")
        }
    }).catch(error=>{
        if(error.response.status === 404)
            throw new Error("Pas de mécanicien dans la base de dinnées");
        else if(error.response.status === 500)
            throw new Error("Erreur de connexion");
    })
    return reponse.data;
}
const deleteDispo =  async(id,mecanicien_fk)=>{
    const reponse = await axios.delete(API_URL+"dispo/",{
        headers:header,
        data:{
            id : id,
            mecanicien_fk : mecanicien_fk
        }
    }).catch(error=>{
        if(error.response.status === 404)
            throw new Error("Mecano inconnu");
    });
    return reponse.status;
}
const updateDispo= async(id,date,isbooked,idMecano,idReparation)=>{
    const reponse = await axios.patch(API_URL+"dispo/",{
        headers:header,
        data : {
            id : id,
            date:date,
            isBooked: isbooked,
            idMecano : idMecano,
            idReparation : idReparation
        }
    }).catch(error=>{
        if(error.response.status === 500){
            throw new Error("Ressource manquante");
        }
    });
    return reponse.data;
}
const postDispo = async(date,isBooked,idMecanicien,idReparation)=>{
    const reponse = await axios.post(API_URL+"dispo/", {
        date:date,
        isBooked:isBooked,
        idMecanicien:idMecanicien,
        idReparation:idReparation,
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

export {
    login,
    getAsync,
    getByIdAsync,
    deleteAsync,
    updateAsync,
    postAsync,
    getAllGarage,
    deleteGarage,
    postGarage,
    updateGarage,
    getAllMecanicien,
    deleteMecanicien,
    updateMecanicien,
    postMecanicien,
    getAllDispo,
    deleteDispo,
    updateDispo,
    postDispo,
    getGarageById,

}