import React from "react";
import './Cast.css'

function Cast({ cast }) {
    return (
        <ul className="cast-list">
            {cast && cast.map((member) => <li className="actor">{member.name}</li>)}
        </ul>
    )
}

export default Cast;
