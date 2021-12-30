import React, {useEffect} from 'react';
import {PlayerInfoConsumer} from './PlayerInfo';

let armorClass=0;

function ArmorClass(props){
    
    
        const url= `https://www.dnd5eapi.co${props.armorIn}`
        const dexMod= (Math.floor((props.dexIn - 10) /2));

        //useEffect(() =>{
            if(props.armorIn !== "none" && props.armorIn !== 'None' && props.armorIn !== '-1' && !props.armorIn.includes("magic")){
                fetch(url)
                .then(response => response.json()) // Parsing the data into a JavaScript object
                .then((data) => {
                    armorClass = data.armor_class.base;
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
                })
            }
            else{
                armorClass = dexMod;
            }
            return(
                <span>{armorClass}</span>
            )

}

function AttackStats(){
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