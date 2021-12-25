const api = require('./API');

const login = async(adresseMail,password)=>{
    if(adresseMail!==undefined && password!==undefined){
        return await api.login(adresseMail,password);
    }else
        throw new Error("Identfiants manquants");
}
const getAllGarage = async ()=>{
    return await api.getAllGarage();
}
const deleteGarage = async (idGarage)=>{
    if(idGarage!==undefined){
        return await api.deleteGarage(idGarage);
    }else{
        throw new Error("Identifiant du garage incorrect");
    }
}
const postGarage = async(garage)=>{
    console.log(garage);
    if(garage !== undefined){
        return await api.postGarage(garage.name,garage.address,garage.phoneNumber,garage.image);
    }else{
        throw new Error("Erreur composant le garage manquant");
    }
}
const updateGarage = async(id,nom,adresse,numTel)=>{
    console.log(id+nom+adresse+numTel);
    if(id!==undefined && nom !== undefined && adresse !== undefined && numTel!== undefined){
        return await api.updateGarage(id,nom,adresse,numTel);
    }{
        throw new Error("Les informations à envoyer à l'pi ne sont pas bonnes");
    }
}
const getAllMecanicien = async()=>{
    return await api.getAllMecanicien();
}
const deleteMecanicien = async (idMecano)=>{
    if(idMecano!==undefined){
        return await api.deleteGarage(idMecano);
    }else{
        throw new Error("Identifiant du mécanicien incorrect");
    }
}
const updateMecanicien = async(id,nom,prenom,password)=>{
    if(id!==undefined && nom !== undefined && prenom !== undefined && password!== undefined){
        return await api.updateMecanicien(id,nom,prenom,password);
    }{
        throw new Error("Les informations à envoyer à l'pi ne sont pas bonnes");
    }
}
const postMecano = async(mecano)=>{
    if(mecano !== undefined){
        return await api.postMecanicien(mecano.nom,mecano.prenom,mecano.password,mecano.adresseMail,mecano.garage_fk);
    }else{
        throw new Error("Erreur composant le garage manquant");
    }
}
const postDispo = async(dispo)=>{
    if(dispo !== undefined){
        return await api.postDispo(dispo.date,dispo.isBooked,dispo.idMecano,dispo.idReparation);
    }else{
        throw new Error("Erreur composant le garage manquant");
    }
}
const getAllDispo = async()=>{
    return await api.getAllDispo();
}
const upDateDispo = async(id,date,isbooked,idMecanicien,idReparation)=>{
    if(id!== undefined && date!== undefined && isbooked !== undefined && idMecanicien !== undefined && idReparation !== undefined){
        return await api.updateDispo(id,date,isbooked,idMecanicien,idReparation);
    }else{
        throw new Error("Erreur lors de l'ajout du composant");
    }

}
const deleteDispo = async(id,idMecano)=>{
    if(id!== undefined && idMecano!== undefined){
        return await api.deleteDispo(id,idMecano);
    }else{
        throw new Error("Erreur lors de l'effacement du composant");
    }
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
    postMecano,
    postDispo,
    getAllDispo,
    upDateDispo,
    deleteDispo
}