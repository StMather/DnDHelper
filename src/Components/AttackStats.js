import React, {useEffect} from 'react';
import {PlayerInfoConsumer} from './PlayerInfo';

let armorClass=0;

function ArmorClass(props){
    console.log(props)
    
    
        const url= `https://www.dnd5eapi.co${props.armorIn}`
        const dexMod= (Math.floor((props.dexIn - 10) /2));

        //useEffect(() =>{
            if(props.armorIn !== "none" && props.armorIn !== 'None' && props.armorIn !== '-1' && !props.armorIn.includes("magic")){
                fetch(url)
                .then(response => response.json()) // Parsing the data into a JavaScript object
                .then((data) => {
                    console.log(data)
                    armorClass = data.armor_class.base;
                    console.log()
                    if(data.armor_class.dex_bonus){
                        if(data.armor_class.max_bonus != null){
                            if(dexMod >= data.armor_class.max_bonus){
                                armorClass += data.armor_class.max_bonus;
                            }
                        }
                        else{
                            armorClass += dexMod;
                        }
                    }
                    //return(
            
                        //<h4>AC: <span>{armorClass}</span></h4>
                    //)
                })
            }
            else{
                //return(
            
                   // <h4>AC: {dexMod}</h4>
                //) 
            }
        //}, [])
        console.log(armorClass);
        return(
            <span></span>
            //<h4>AC: <span>{armorClass}</span></h4>
        )
}

function AttackStats(){
    console.log(`armorClass: ${armorClass}`)
    return(
        <PlayerInfoConsumer> 
               {context => (
                <div className="attackdamage">
                    <button className="button" type="button">Attack!</button>
                    <span className="h4txt" >Code numbers!</span>
                <br/>
                    <button className="button" type="button">Damage!</button>
                    <span className="h4txt">Code numbers!</span>
                    
                    <ArmorClass armorIn={context.armor} dexIn={context.dex}/>
                    <h4><button className = "button" onClick={() =>context.saveArmorClass(armorClass) }>Update AC </button> AC: {context.armorClass}</h4>
                    <h4>Attack Mod - Str: {Math.floor((context.str - 10) /2)} Dex: {Math.floor((context.dex - 10) /2)}</h4>
                </div>

        )}
        </PlayerInfoConsumer>
        
    )
}

export default AttackStats 