import React from "react"
import "./SpellGrid.css"

function DamageOrHeal(props)
{
    //console.log(props.spellIn);;
    if(props.spellIn.damage)
    {
        if(props.spellIn.damage.damage_at_character_level){

        console.log(props.spellIn.index)
        console.log(props.spellIn.damage.damage_at_character_level);
        
        const damage = Object.entries(props.spellIn.damage.damage_at_character_level).map((item) =>(
        //console.log(damageArray);
                    <span>{item[0]}: {item[1]} </span>
                )
        )
        return damage
         

           // return spellData.map((item) =>(
               // <Spell
              //  key = {item.index}
               // spell = {item}
               // />
           // ));
        //"damage_at_character_level": {
         //   "1": "1d8",
           // "5": "2d8",
            //"11": "3d8",
            //"17": "4d8"
        }//}
        if(props.spellIn.damage.damage_at_slot_level){
            return(
                <div>
                    <h2> slot</h2>
                </div>
            )
        }
    }
    /*
    else if(spellIn.damage)
    {
        console.log(spellIn.index)
        console.log(spellIn.damage.damage_at_slot_level);
        const damageArray = Object.entries(spellIn.damage.damage_at_slot_level);
        console.log(damageArray);
        damageArray.map((item) => {
            console.log(item)
        });

        return(
            <h2>I</h2>
        )
    
    }
    else if(spellIn.heal_at_slot_level)
    {
        return(
            <h2>"heal"</h2>
        )
    }*/
    else{
        return(
        <h2>See effects</h2>
        )
    }
}

const Spell = ({spell}) =>(
    <div className  = "SpellCard">
    <h1>{spell.index} <DamageOrHeal spellIn={spell}/> </h1>
    <h2>{spell.range}</h2>
    </div>

    
)
//


export default Spell;