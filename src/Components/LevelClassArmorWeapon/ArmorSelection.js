import React, {useEffect} from 'react';
import Armor from './Armor';

let results =[];
let error = true;

function RenderArmor(){
        if(!error){
            //console.log("Renderclass:");
            //console.log(results);
            return results.map((item) =>(
                <Armor
                key ={item.index}
                armor ={item}
                />
    
        ));
        }
        else{
            
            return <option className="options" value="-1">Level First</option>
            
        }
}

function WeaponSelection () {
    const url= `https://www.dnd5eapi.co/api/equipment-categories/armor`

    useEffect(() =>{
        fetch(url)
        .then(response => response.json()) // Parsing the data into a JavaScript object
        .then((data) => {
            results = data.equipment;
            error = false;
            
        })
    
    }, [])
    return(
            
        <RenderArmor/>
        
    )

}


export default WeaponSelection;





//https://www.dnd5eapi.co/api/equipment-categories/weapon