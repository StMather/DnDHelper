import React from "react";

const Weapon = ({weapon}) =>(

    <option className="options" value={weapon.url}>{weapon.name}</option>
)

export default Weapon;