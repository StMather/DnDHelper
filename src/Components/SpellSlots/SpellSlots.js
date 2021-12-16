import React from "react";
import {PlayerInfoConsumer} from '../PlayerInfo';


const fisrtLevel =(classIn, level) => {
    //bard, Cleric, druid, Sorcerer, and Wizard 
    //paladin ranger
    //fighter
    //warlok
    //barbarian, monk
    if(classIn === "bard" || classIn === "cleric" || classIn === "druid" || classIn === "sorcerer" || classIn === "wizard")
    {
        switch(level){
            case "1":
                return "2";

            case "2":
                return "3";

            default:
                return "4";
        }
    }
    if(classIn === "paladin" || classIn ==="ranger")
    {
        switch(level){
            case "1":
                return "-";

            case "2":
                return "2";

            case "3":
            case "4":
                return "3"

            default:
                return "4";
        }
    }
    if(classIn === "fighter")
    {
        switch(level){
            case "1":
            case "2":
                return "-"
            case "3":
                return "2";

            case "4":
            case "5":
            case "6":
                return "3";

            default:
                return "4";
        }
    }
    if(classIn === "warlock")
    {
        switch(level){
            case "1":
                return "1";
            case "2":
                return "2";
            default:
                return "-";

        }
    }
    else{
        return "-";
    }
}

const secondLevel =(classIn, level) => {
    //bard, Cleric, druid, Sorcerer, and Wizard 
    //paladin ranger
    //fighter
    //warlok
    //barbarian, monk
    if(classIn === "bard" || classIn === "cleric" || classIn === "druid" || classIn === "sorcerer" || classIn === "wizard")
    {
        if(level >= 3 && level < 4)
        {
            return "2";
        }
        if(level >= 4)
        {
            return "3"
        }
        else{
            return "-"
        }
    }
    if(classIn === "paladin" || classIn ==="ranger")
    {
        if(level >=5 && level < 7){
            return "2";
        }
        if(level >= 7){
            return "3";
        }
        else{
            return "-";
        }
    }
    if(classIn === "fighter")
    {
        if(level >=7 && level < 10)
        {
            return "2";
        }
        if(level >= 10){
            return "3";
        }
        else{
            return "-"
        }
    }
    if(classIn === "warlock")
    {
        switch(level){
            case "3":
            case "4":
                return "2";
            default:
                return "-";

        }
    }
    else{
        return "-";
    }
}

const thirdLevel =(classIn, level) => {
    //bard, Cleric, druid, Sorcerer, and Wizard 
    //paladin ranger
    //fighter
    //warlok
    //barbarian, monk
    if(classIn === "bard" || classIn === "cleric" || classIn === "druid" || classIn === "sorcerer" || classIn === "wizard")
    {
        if(level >= 5 && level < 6)
        {
            return "2";
        }
        if(level >= 6)
        {
            return "3"
        }
        else{
            return "-"
        }
    }
    if(classIn === "paladin" || classIn ==="ranger")
    {
        if(level >=9 && level < 11){
            return "2";
        }
        if(level >= 11){
            return "3";
        }
        else{
            return "-";
        }
    }
    if(classIn === "fighter")
    {
        if(level >=13 && level < 16)
        {
            return "2";
        }
        if(level >= 16){
            return "3";
        }
        else{
            return "-"
        }
    }
    if(classIn === "warlock")
    {
        switch(level){
            case "5":
            case "6":
                return "2";
            default:
                return "-";

        }
    }
    else{
        return "-";
    }
}

const fourthLevel =(classIn, level) => {
    //bard, Cleric, druid, Sorcerer, and Wizard 
    //paladin ranger
    //fighter
    //warlok
    //barbarian, monk
    if(classIn === "bard" || classIn === "cleric" || classIn === "druid" || classIn === "sorcerer" || classIn === "wizard")
    {
        if(level >= 7 && level < 8)
        {
            return "1";
        }
        if(level >= 8 && level < 9)
        {
            return "2"
        }
        if(level >= 9)
        {
            return "3"
        }
        else{
            return "-"
        }
    }
    if(classIn === "paladin" || classIn ==="ranger")
    {
        if(level >=13 && level < 15){
            return "1";
        }
        if(level >= 15 && level  < 17){
            return "1";
        }
        if(level >= 17){
            return "3";
        }
        else{
            return "-";
        }
    }
    if(classIn === "fighter")
    {
        if(level >=19)
        {
            return "1";
        }
        else{
            return "-"
        }
    }
    if(classIn === "warlock")
    {
        switch(level){
            case "7":
            case "8":
                return "2";
            default:
                return "-";

        }
    }
    else{
        return "-";
    }
}

const fithLevel =(classIn, level) => {
    //bard, Cleric, druid, Sorcerer, and Wizard 
    //paladin ranger
    //fighter
    //warlok
    //barbarian, monk
    if(classIn === "bard" || classIn === "cleric" || classIn === "druid" || classIn === "sorcerer" || classIn === "wizard")
    {
        if(level >= 9 && level < 10)
        {
            return "1";
        }
        if(level >= 10 && level < 17)
        {
            return "2"
        }
        if(level >= 7)
        {
            return "3"
        }
        else{
            return "-"
        }
    }
    if(classIn === "paladin" || classIn ==="ranger")
    {
        if(level >=17 && level < 19){
            return "1";
        }
        if(level >= 19){
            return "2";
        }
        else{
            return "-";
        }
    }
    if(classIn === "fighter")
    {
        return "-";
    }
    if(classIn === "warlock")
    {
        if(level >=9 && level < 11){
            return "2"
        }
        if(level >=11 && level < 17){
            return "3"
        }
        if(level >=17){
            return "4"
        }
        else{
            return "-";
        }
    }
    else{
        return "-";
    }
}

const sixthLevel =(classIn, level) => {
    //bard, Cleric, druid, Sorcerer, and Wizard 
    //paladin ranger
    //fighter
    //warlok
    //barbarian, monk
    if(classIn === "bard" || classIn === "cleric" || classIn === "druid" || classIn === "sorcerer" || classIn === "wizard")
    {
        if(level >= 11 && level < 19)
        {
            return "1";
        }
        if(level >= 19 )
        {
            return "2"
        }
        else{
            return "-"
        }
    }
    if(classIn === "paladin" || classIn ==="ranger")
    {
        if(level >=17 && level < 19){
            return "1";
        }
        if(level >= 19){
            return "2";
        }
        else{
            return "-";
        }
    }
    if(classIn === "fighter")
    {
        return "-";
    }
    if(classIn === "warlock")
    {
        return "-"
    }
    else{
        return "-";
    }
}

const seventhLevel =(classIn, level) => {
    //bard, Cleric, druid, Sorcerer, and Wizard 
    //paladin ranger
    //fighter
    //warlok
    //barbarian, monk
    if(classIn === "bard" || classIn === "cleric" || classIn === "druid" || classIn === "sorcerer" || classIn === "wizard")
    {
        if(level >= 13 && level < 20)
        {
            return "1";
        }
        if(level >= 20)
        {
            return "2"
        }
        else{
            return "-"
        }
    }
    else{
        return "-";
    }
}

const eighthLevel =(classIn, level) => {
    //bard, Cleric, druid, Sorcerer, and Wizard 
    //paladin ranger
    //fighter
    //warlok
    //barbarian, monk
    if(classIn === "bard" || classIn === "cleric" || classIn === "druid" || classIn === "sorcerer" || classIn === "wizard")
    {
        if(level >= 15)
        {
            return "1";
        }
        else{
            return "-"
        }
    }
    else{
        return "-";
    }
}

const ninethLevel =(classIn, level) => {
    //bard, Cleric, druid, Sorcerer, and Wizard 
    //paladin ranger
    //fighter
    //warlok
    //barbarian, monk
    if(classIn === "bard" || classIn === "cleric" || classIn === "druid" || classIn === "sorcerer" || classIn === "wizard")
    {
        if(level >= 17)
        {
            return "1";
        }
        else{
            return "-"
        }
    }
    else{
        return "-";
    }
}
function SpellSlots(){
    return(
        <PlayerInfoConsumer> 
            {context => (
            <div className="spellslot">
                <span> 1st: {fisrtLevel(context.Class, context.level)}</span>
                <span> 2nd: {secondLevel(context.Class, context.level)}</span>
                <span> 3rd: {thirdLevel(context.Class, context.level)}</span>
                <span> 4th: {fourthLevel(context.Class, context.level)}</span>
                <span> 5th: {fithLevel(context.Class, context.level)}</span>
                <span> 6th: {sixthLevel(context.Class, context.level)}</span>
                <span> 7th: {seventhLevel(context.Class, context.level)}</span>
                <span> 8th: {eighthLevel(context.Class, context.level)}</span>
                <span> 9th: {ninethLevel(context.Class, context.level)}</span>
            </div>
        )}
        </PlayerInfoConsumer>
    )
}

export default SpellSlots;

