import React from 'react';

const mapper = function(mechanic) {

    return (
        <>
            <td className="col-md-2">{mechanic.nom}</td>
            <td className="col-md-2">{mechanic.prenom}</td>
            <td className="col-md-4">{mechanic.adressemail}</td>
            <td className="col-md-1">{mechanic.garage_fk}</td>
        </>
    );
};

export default mapper;

