import React from 'react';


const mapper = function(availability) {

    const availabilityDate = new Date(availability.date);

    return (
        <>
            <td className="col-md-2">{availability.mecanicien_fk}</td>
            <td className="col-md-4">{availabilityDate.toLocaleDateString("fr-BE", {hour: 'numeric',minute:'numeric'})}</td>
            <td className="col-md-4">{availability.isbooked ? "Reservé" : "libre"}</td>
        </>
    );
};

export default mapper;

