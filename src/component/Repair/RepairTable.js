import React from 'react';

const mapper = function(repair) {

    return (
        <>
            <td className="col-md-1"><img src={repair.lienimage} alt="Illustration de la réparation" className="rounded col-md-12"></img></td>
            <td className="col-md-2">{repair.libelle}</td>
            <td className="col-md-4">{repair.description}</td>
            <td className="col-md-1">{repair.dureemoyenne} minutes</td>
        </>
    );
};

export default mapper;

