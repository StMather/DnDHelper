import React from "react";
import {PlayerInfoConsumer} from '../PlayerInfo';

const calculateCantrips = (classIn, levelIn) =>{

    if(classIn === "barbarian" || classIn === "monk" || classIn === "paladin" || classIn === "ranger")
   {
        return ("0")
    
   }
    if(classIn === "bard" || classIn === "druid" || classIn === "warlock")
   {
        if(levelIn < 4){
        
            return ("2")
        }
        if(levelIn >= 4 && levelIn < 10){

            return ("3")
        }
        if(levelIn >= 10){

            return ("4")
        }
    
   }
   if(classIn === "cleric" || classIn === "wizard")
   {
        if(levelIn < 4){
        
            return ("3")
        }
        if(levelIn >= 4 && levelIn < 10){

            return ("4")
        }
        if(levelIn >= 10){

            return ("5")
        }
    
   }
   if(classIn === "fighter")
   {
        if(levelIn < 10){
        
            return ("2")
        }
        if(levelIn >=  10){

            return ("3")
        }
    
   }
   if(classIn === "rogue")
   {
        if(levelIn < 10){
        
            return ("3")
        }
        if(levelIn >= 10){

            return ("4")
        }
    
   }
   if(classIn === "sorcerer")
   {
        if(levelIn < 4){
        
            return ("4")
        }
        if(levelIn >= 4 && levelIn < 10){

            return ("5")
        }
        if(levelIn >= 10){

            return ("6")
        }
    
   }
   return ("0")
}

const calculateSpellSave = (classIn, chr, int, wis, level) =>{
    //8 + spell mod + prof
    /*
        chr:bard,sorce, pally,warlock
        int:fighter,rouge
        wis:cleric,druid, ranger
        n/a: barb, monk
    */
   const base= 8;
   let mod= 0;
   let output = 0;
   let prof = 0;

   //calculate proficency
   if(level <= 4)
   {
       prof = 2;
   }
   else if( level > 4 && level <= 8)
   {
       prof = 3;
   }
   else if(level > 8 && level <= 12)
   {
       prof = 4;
   }
   else if(level > 12 && level <= 16)
   {
       prof = 5
   }
   else if(level > 16)
   {
       prof = 6;
   }
   //class
   if(classIn === "cleric" || classIn === "druid" || classIn === "ranger")
   {
        mod = Math.floor((wis - 10) /2)
        output = base + mod + prof
        return(
            output
        )
   }
   else if(classIn === "fighter" || classIn === "rogue" || classIn === "wizard")
   {
        mod = Math.floor((int - 10) /2)
        output = base + mod + prof
        return(
            output
        )
   }
   else if(classIn === "bard" || classIn === "sorcerer" || classIn === "paladin" || classIn ==="warlock")
   {
   mod = Math.floor((chr - 10) /2)
    output = base + mod + prof
    return(
        output
    )
   }
   else{
        return(
            "None"
        )
   }
  

}

const calculateSpellAttackBonus = (classIn, chr, int, wis, level) =>{

    //mod+prof
    let mod= 0;
    let output = 0;
    let prof = 0;
 
    //calculate proficency
    if(level <= 4)
    {
        prof = 2;
    }
    else if( level > 4 && level <= 8)
    {
        prof = 3;
    }
    else if(level > 8 && level <= 12)
    {
        prof = 4;
    }
    else if(level > 12 && level <= 16)
    {
        prof = 5
    }
    else if(level > 16)
    {
        prof = 6;
    }
    //class
    if(classIn === "cleric" || classIn === "druid" || classIn === "ranger")
    {
        mod = Math.floor((wis - 10) /2)
        output = mod + prof
        return(
            output
        )
    }
    else if(classIn === "fighter" || classIn === "rogue" || classIn === "wizard")
    {
        mod = Math.floor((int - 10) /2)
        output = mod + prof
        return(
            output
        )
    }
    else if(classIn === "bard" || classIn === "sorcerer" || classIn === "paladin" || classIn ==="warlock")
    {
        mod = Math.floor((chr - 10) /2)
        output = mod + prof
        return(
            output
        )
    }
    else{
        return(
            "None"
        )
    }
}

const spellcastingAbility = (classIn, chr, int, wis) =>{

let mod =0;


    if(classIn === "cleric" || classIn === "druid" || classIn === "ranger")
    {
        mod = Math.floor((wis - 10) /2)
        return(
            `Wis-${mod}`
        )
    }
    else if(classIn === "fighter" || classIn === "rogue" || classIn === "wizard")
    {
        mod = Math.floor((int - 10) /2)
        return(
            `Int-${mod}`
        )
    }
    else if(classIn === "bard" || classIn === "sorcerer" || classIn === "paladin" || classIn ==="warlock")
    {
        mod = Math.floor((chr - 10) /2)
        return(
            `Chr-${mod}`
        )
    }
    else{
        return(
            "None"
        )
    }
}

function SpellCasting () {
    return(
        <PlayerInfoConsumer> 
            {context => (
            <div className="spellcasting">
                <h3>Spell casting </h3>
                <h4>Spell save: {calculateSpellSave(context.Class, context.chr, context.int, context.wis, context.level) } </h4>
                <h4> Spell attack bonus: {calculateSpellAttackBonus(context.Class, context.chr, context.int, context.wis, context.level) }</h4>
                <h4>Spellcasting Ability: {spellcastingAbility(context.Class, context.chr, context.int, context.wis) }</h4>
                <h4>Cantrips Known: {calculateCantrips(context.Class, context.level)}</h4>
            </div>
        )}
        </PlayerInfoConsumer>
    )

}

export default SpellCasting;


                    