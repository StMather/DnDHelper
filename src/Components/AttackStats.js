import React from 'react';
import {PlayerInfoConsumer} from './PlayerInfo';

let armorClass=0;

function ArmorClass(props){
    const url= `https://www.dnd5eapi.co${props.armorIn}`
    const dexMod= (Math.floor((props.dexIn - 10) /2));

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
        <span></span>
    )

}

function AttackStats(){
    return(
        <PlayerInfoConsumer> 
            {context => (
            <div className="attackdamage">
                <ArmorClass armorIn={context.armor} dexIn={context.dex}/>
                <h4><button className = "button" onClick={() =>context.saveArmorClass(armorClass) }>Update AC</button> AC: {context.armorClass}</h4>
                <h4>Attack Mod - Str: {Math.floor((context.str - 10) /2)} Dex: {Math.floor((context.dex - 10) /2)}</h4>
                <button className="button" onClick={() => context.rollAttack("dex")}>Attack: dex!</button>
                <button className="button" onClick={() => context.rollAttack("str")}>Attack: str!</button>
                    <span className="h4txt" >Roll: {context.attackRoll}</span>
                <br/>
                <button className="button" onClick={() => context.rollDamage("str")}>Damage: {context.damageDie}</button>
                    <span className="h4txt">Roll: {context.damageRoll}</span>
            </div>

        )}
        </PlayerInfoConsumer>
        
    )
}

/*
Add attack and damage buttons back in when they are built
                
                    
*/

export default AttackStats 