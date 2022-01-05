import React from "react"
import "./SpellGrid.css"
import {Link} from 'react-router-dom';

function DamageOrHeal(props)
{
    //console.log(props.spellIn);;
    if(props.spellIn.damage)
    {
        if(props.spellIn.damage.damage_at_character_level){       
            const damage = Object.entries(props.spellIn.damage.damage_at_character_level).map((item) =>(
                <span className="section">{item[0]}: {item[1]} </span>
            )
        )
        return (
            <span className="effects">Damage at character level- {damage}</span>
        )
        }

        if(props.spellIn.damage.damage_at_slot_level){
            const damage = Object.entries(props.spellIn.damage.damage_at_slot_level).map((item) =>(
                <span className="section">{item[0]}: {item[1]} </span>
            ))
            return (
                <span className="effects">Damage at slot level- {damage}</span>
                
            )
        }
    }
    
    else if(props.spellIn.heal_at_slot_level)
    {
        const damage = Object.entries(props.spellIn.heal_at_slot_level).map((item) =>(
            <span className="section">{item[0]}: {item[1]} </span>
        ))
        return (
            <span className="effects">Healing at slot level- {damage}</span>
        )
    }
    else{
        return(
            <span className="effects">See effects</span>
        )
    }
}

const Spell = ({spell}) =>(
    <div className  = "SpellCard">
    <h1><Link to={
        { pathname: '/spellinfo', search:spell.url }}
        target="_blank">{spell.name}: 
        </Link>
        <span className="sectionLarge">Range: {spell.range} </span>
        <span className="sectionLarge">Casting time: {spell.casting_time}</span> 
    </h1>
    <h2><DamageOrHeal spellIn={spell}/></h2>
    </div>
)

export default Spell;
