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
export {
    login,
    getAllGarage,
    deleteGarage
}