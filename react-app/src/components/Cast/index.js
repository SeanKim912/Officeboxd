import React from "react";

function Cast({ cast }) {
    return (
        <ul>
            {cast && cast.map((member) => <li>{member.name}</li>)}
        </ul>
    )
}

export default Cast;
