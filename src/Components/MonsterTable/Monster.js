import React from "react";

const Monster = ({monster}) =>(

    <option className="options" value={monster.url}>{monster.name}</option>
)

export default Monster;