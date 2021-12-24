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
    if(id!==undefined && nom !== undefined && adresse !== undefined && numTel!== undefined){
        return await api.updateGarage(id,nom,adresse,numTel);
    }{
        throw new Error("Les informations à envoyer à l'pi ne sont pas bonnes");
    }
}
export {
    login,
    getAllGarage,
    deleteGarage,
    postGarage,
    updateGarage
}