import React, {useEffect} from 'react';
import Weapon from './Weapon';

let results =[];
let error = true;

function RenderWeapons(){
    if(!error){
        return results.map((item) =>(
            <Weapon
            key ={item.index}
            weapon ={item}
            />

    ));
    }
    else{
        return <option className="options" value="-1">Level First</option>    
    }
}

function WeaponSelection () {
    const url= `https://www.dnd5eapi.co/api/equipment-categories/weapon`

    useEffect(() =>{
        fetch(url)
        .then(response => response.json()) // Parsing the data into a JavaScript object
        .then((data) => {
            results = data.equipment;
            error = false;
            
        })
    }, [url])
    
    return(
            
        <RenderWeapons/>
        
    )
}

export default WeaponSelection;
