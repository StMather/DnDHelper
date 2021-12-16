import React from "react";

const Spell = ({spell}) =>(
    <div>
    <h1>{spell.index}</h1>
    <h2>{spell.url}</h2>
    </div>
)

export default Spell;