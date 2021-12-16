import React from "react";

const Armor = ({armor}) =>(

    <option className="options" value={armor.index}>{armor.name}</option>
)

export default Armor;