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
    const reponse = await axios.get(API_URL+"dispo/",{
        headers : header
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

}