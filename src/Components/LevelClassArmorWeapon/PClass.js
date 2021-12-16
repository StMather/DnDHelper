import React from "react";

const PClass = ({pclass}) =>(

    <option className="options" value={pclass.index}>{pclass.name}</option>
)

export default PClass;