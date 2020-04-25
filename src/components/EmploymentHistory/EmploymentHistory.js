import React from 'react';
import Employment from "./Employment/Employment";

const employmentHistory = (props) => {

    console.log("employers=", props.employers);
    return (
        props.employers
            .map(employer => {
                return <Employment
                    name={employer.name}
                    title={employer.title}
                    // address={employer.address}
                    fromDate={employer.fromDate}
                    toDate={employer.toDate}/>;
            })
    );
};

export default employmentHistory;