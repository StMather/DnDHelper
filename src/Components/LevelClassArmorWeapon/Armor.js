import React from "react";

const Armor = ({armor}) =>(

    <option className="options" value={armor.url}  >{armor.name}</option>
)

export default Armor;