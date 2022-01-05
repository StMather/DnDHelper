import React, {useEffect} from "react";
import {useLocation} from 'react-router-dom';

let results =[];
let error = true;

function Components(){

    let components = ""
    if(results.components.includes("V")){
            components += " Verbal"
    }
    if(results.components.includes("S")){
            components += " Somatic"
    }
    if(results.components.includes("M")){
            components += " Material"
    }
    else{
        <h2>This has failed</h2>
    }
    return(
        <h2>
            <span className="red">Components:</span><span>{components}</span>
        </h2>
    )

}

function HigherLevel(){

    if(results.higher_level){
        return(
            <h2>
                <span className="red">At Higher Level: </span><span>{results.higher_level}</span>
            </h2>
        )
    }
    else{
        return(
        <span></span>
        )
    }
}

function Concentration(){

    if(results.concentration){
        return(
            <h2>
                <span className="red">Concentration: </span><span>True</span>
            </h2>
        )
    }
    else{
        return(
            <h2>
                <span className="red">Concentration: </span><span>False</span>
            </h2>
        )
    }
}

function Ritual(){

    if(results.ritual){
        return(
            <h2>
                <span className="red">Ritual: </span><span>True</span>
            </h2>
        )
    }
    else{
        return(
            <h2>
                <span className="red">Ritual: </span><span>False</span>
            </h2>
        )
    }
}

function SpellSave(){

    if(results.dc){

        return(
            <h2>
            <span className="red">Save DC: </span><span>{results.dc.dc_type.name}</span>
            <br/>
            <span className="red">On Success: </span><span>{results.dc.dc_success}</span>
            </h2>
        )
    }
    else{

        return(
            <h2>
                <span className="red">Save DC: </span><span>None</span>
            </h2>
        )
    }
}

function DamageorHeal(){

    if(results.damage){
        if(results.damage.damage_at_character_level){
            const damage = Object.entries(results.damage.damage_at_character_level).map((item) =>(
                    <span className="section">{item[0]}: {item[1]} </span>
            ))
        return(
            <h2>
            <span className="red">Attack type: </span><span>{results.attack_type}</span>
            <br/>
            <span className="red">Damage type: </span><span>{results.damage.damage_type.name}</span>
            <br/>
            <span className="red">Damage at Character Level: </span><span>{damage}</span>
            </h2>
        )
        }
        if(results.damage.damage_at_slot_level){
            const damage = Object.entries(results.damage.damage_at_slot_level).map((item) =>(
                <span className="section">{item[0]}: {item[1]} </span>
            ))
        return(
            <h2>
            <span className="red">Attack type: </span><span>{results.attack_type}</span>
            <br/>
            <span className="red">Damage type: </span><span>{results.damage.damage_type.name}</span>
            <br/>
            <span className="red">Damage at slot level: </span><span>{damage}</span>
            </h2>
        )
        }
    }
    if(results.heal_at_slot_level){
        const heal = Object.entries(results.heal_at_slot_level).map((item) =>(
            <span className="section">{item[0]}: {item[1]} </span>
        ))
        return(
            <h2>
            <span className="red">Healing at slot level: </span><span>{heal}</span>
            </h2>
        )
    }
    else{
        return(
            <h2>See discription for effects</h2>
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
    if(results.materials){
        return(
            <h2><span className="red">Materials: </span>{results.material}</h2>
        )
    }
    else{
        return(
            <h2><span className="red">Materials: </span>None</h2>
        )
    }
}

function RenderSpellInfo(){
    if(!error){
        return(
            <div>
                <h1 className="red">{results.name}</h1>
                <h2> {results.desc}</h2>
                <h2><span className="red">Range: </span>{results.range}</h2>
                <h2><span className="red">Components: </span>{results.components}</h2>
                <Components/>
                <Materials/>
                <HigherLevel/>
                <DamageorHeal/>
                <SpellSave/>
                <Ritual/>
                <h2><span className="red">Duration: </span>{results.duration}</h2>
                <Concentration/>
                <h2><span className="red">Casting Time: </span>{results.casting_time}</h2>
                <h2><span className="red">Level: </span>{results.level}</h2>
                <h2><span className="red">School: </span>{results.school.name}</h2>
            </div>
        )
    }

    else{
        return(
            <div>
                <h2>Refresh if button does not appear </h2>
            </div>
        )
    }
}

function SpellInfoRender(props){
    const location = useLocation()
    //const {spellIn} = this.props.location.state;
    const url = location.search.substring(1);

    useEffect(() =>{
        fetch(`https://www.dnd5eapi.co${url}`)
        .then(response => response.json()) // Parsing the data into a JavaScript object
        .then((data) => {
            results = data;
            error = false;
            
        })
    
    }, [url])
        
    
        return(
        
            <RenderSpellInfo/>
        )

}

export default SpellInfoRender;