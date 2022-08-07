import React from 'react';

const mapper = function(garage) {

    return (
        <>
            <td className="col-md-1"><img alt="Illustration du garage" className="rounded col-md-12" src={garage.image} ></img></td>
            <td className="col-md-2">{garage.nom}</td>
            <td className="col-md-4">{garage.adresse}</td>
            <td className="col-md-2">{garage.numtel}</td>
        </>
    );
};

export default mapper;

