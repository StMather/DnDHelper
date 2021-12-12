import React from "react";

const Weapon = ({weapon}) =>(

    <option className="options" value={weapon.index}>{weapon.name}</option>
)

export default Weapon;