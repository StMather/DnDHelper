import React, {useEffect} from "react";
import {useLocation} from 'react-router-dom';

let results =[];
let error = true;


function DamageorHeal(){
    if(results.damage){
        if(results.damage.damage_at_character_level){
        
            const damage = Object.entries(results.damage.damage_at_character_level).map((item) =>(
                            <span className="section">{item[0]}: {item[1]} </span>
                        )
                )
        return(
            <h2>
            <span>Attack type: {results.attack_type}</span>
            <span>Damage type: {results.damage.damage_type.name}</span>
            <span>Damage at Character Level: {damage}</span>
            </h2>
        )
        }
        if(results.damage.damage_at_slot_level){
            const damage = Object.entries(results.damage.damage_at_slot_level).map((item) =>(
                <span className="section">{item[0]}: {item[1]} </span>
            )
    )

        return(
            <h2>
            <span>Attack type: {results.attack_type}</span>
            <span>Damage type: {results.damage.damage_type.name}</span>
            <span>Damage at slot level: {damage}</span>
            </h2>
        )
        }
    }
    else{
        return(
            <h2>Error</h2>
        )
    }

}
/*
"damage": {
        "damage_type": {
            "index": "radiant",
            "name": "Radiant",
            "url": "/api/damage-types/radiant"
        },
        "damage_at_character_level": {
*/
function Materials(){
    console.log(results.damage);
    if(results.materials){
        return(
            <h2>Materials: {results.material}</h2>
        )
    }
    else{
        return(
            <h2>Materials: None</h2>
        )
    }
}

function RenderSpellInfo(){
    if(!error){
        return(
            <div>
                <h1>{results.name}</h1>
                <h2> {results.desc}</h2>
                <h2>Range: {results.range}</h2>
                <h2>Components: {results.components}</h2>
                <Materials/>
                <DamageorHeal/>
                <h2>ritual?</h2>
                <h2>Duration: {results.duration}</h2>
                <h2>Concentatation?</h2>
                <h2>Casting Time: {results.casting_time}</h2>
                <h2>Level: {results.level}</h2>
                <h2>School: {results.school.name}</h2>
            </div>
        )
    }
    /*
   
    "ritual": false,
    "concentration": true,
    *"casting_time": 
    *"level": 0,
    
    "attack_type": "ranged",
   ** "damage": {
        "damage_type": {
            "index": "radiant",
            "name": "Radiant",
            "url": "/api/damage-types/radiant"
        },
        "damage_at_character_level": {
            "1": "1d8",
            "5": "2d8",
            "11": "3d8",
            "17": "4d8"
        }
    },
    "dc": {
        "dc_type": {
            "index": "dex",
            "name": "DEX",
            "url": "/api/ability-scores/dex"
        },
        "dc_success": "none"
    },
    "school": {
        "index": "evocation",
        "name": "Evocation",
    */
    else{
        return(
            <div>
                <h2> failed to load</h2>
            </div>
        )
    }
}

function SpellInfoRender(props){
    const location = useLocation()
    //const {spellIn} = this.props.location.state;
    console.log(location);
    const url = location.search.substring(1);
    console.log(url);

    useEffect(() =>{
        fetch(`https://www.dnd5eapi.co${url}`)
        .then(response => response.json()) // Parsing the data into a JavaScript object
        .then((data) => {
            results = data;
            console.log(data);
            error = false;
            
        })
    
    }, [])
        
    
        return(
        
            <RenderSpellInfo/>
        )

}

export default SpellInfoRender;