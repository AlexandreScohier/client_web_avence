const api = require('./API');

const login = async(adresseMail,password)=>{
    if(adresseMail!==undefined && password!==undefined){
        return await api.login(adresseMail,password);
    }else
        throw new Error("Identfiants manquants");
}
const getAllGarage = async ()=>{
    const reponse = await api.getAllGarage();
    console.log(reponse);
    return await api.getAllGarage();
}
export {
    login,
    getAllGarage
}