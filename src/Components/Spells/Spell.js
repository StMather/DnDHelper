import React from "react"

const Spell = ({spell}) =>(
    <div>
    <h1>{spell.index}</h1>
    <h2>{spell.desc}</h2>
    <h2>{spell.range}</h2>
    </div>

    
)


export default Spell;