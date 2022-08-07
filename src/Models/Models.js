import GarageTable from "../component/Garage/GarageTable";
import MechanicTable from "../component/Mechanic/MechanicTable";
import AvailabilityTable from "../component/Availability/AvailabilityTable";
import RepairTable from "../component/Repair/RepairTable";



const Modeles = {
    garage : {label: "garage", titleList: "Liste des garages", determinative:"un", apiRoute: "garage/", route: "Garage",object: [], tableBody: GarageTable,
    titles: ["", "Nom", "Adresse", "Numéro de téléphone"],  
    },

    mechanic : {label: "mécanicien", titleList: "Liste des mécaniciens", determinative:"un", apiRoute: "mecano/", route: "Mechanic", object: [], tableBody: MechanicTable,
    titles: ["Nom", "Prénom", "Adresse e-mail", "#garage"],  
    },

    availability : {label: "disponibilité", titleList: "Liste des disponibilités", determinative:"une", apiRoute: "dispo/All", route: "Availability", object: [], tableBody: AvailabilityTable,
    titles: ["N° mécanicien", "Date", "status"],  
    },

    repair : {label: "réparation", titleList: "Liste des réparations", determinative:"une", apiRoute: "entretien/",object: [], route: "Repair", tableBody: RepairTable,
    titles: ["", "Libellé", "Description", "Durée"],  
    }
}


export default Modeles;