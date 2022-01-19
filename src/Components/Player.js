import React,{Component} from 'react';
import NavBar from "./NavBar";
import {PlayerInfoConsumer} from './PlayerInfo';
import SpellGrid from './Spell/SpellGrid';
import "./Player.css";
import StatBlock from './StatBlock';
import SpellCasting from './Spellcasting/Spellcasting';
import LevelClassArmorWeapon from './LevelClassArmorWeapon/LevelClassArmorWeapon';
import SpellSlots from './SpellSlots/SpellSlots';
import AttackStats from './AttackStats';
import axios from "axios";



class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            spellError: true,
            spellData: [],
            tempData: "",
            spellsLoaded: false,
        }

        this.CallAPISpells = this.CallAPISpells.bind(this);
        this.ArmorName = this.ArmorName.bind(this);
    }

async CallAPISpells(props){
        const testurl= `https://www.dnd5eapi.co/api/classes/${props}/spells`

        const response = await axios.get(testurl)

        this.setState({spellData:response.data.results});
        this.setState({spellError:false});

        for(var i = 0; i < this.state.spellData.length ; i++)
        {
            let tempData = this.state.spellData[i]
            this.UpgradeSpell(tempData.url, this.state.spellError, i);
            
        }
    }
    
    UpgradeSpell = async (url, error, index) =>{
        let tempSpellData = this.state.spellData;
        if(!error)
        {
            const tempurl= `https://www.dnd5eapi.co${url}`

            const response = await axios.get(tempurl)
                //.then(response => response.json()) // Parsing the data into a JavaScript object
                const data = await response.data;
                this.setState({spellsLoaded: true});

                if(!this.state.spellsLoaded)
                {
                    
                }
                else{
                    tempSpellData[index] = data;
                    this.setState({spellData: tempSpellData});
                }
                
        }   
    }

    ArmorName = (props) =>{
        let stringProp =  (props.props);
        if (typeof stringProp === 'string'){
            if(stringProp.includes("magic")){
                let toReturn = stringProp.substring(17)
                return(
                    <h4>Armor: {toReturn} </h4>
                )
            }
            if(stringProp.includes("equipment")){
                let toReturn = stringProp.substring(15)
                return(
                    <h4>Armor: {toReturn} </h4>
                )
            }
            else{
                return(
                    <h4>Armor: {stringProp} </h4>
                )
            }
        }
       
        else{
            return(
                <h4>Armor: {props.props}</h4>
            )
        }
    }

    WeaponName = (props) =>{
        let stringProp =  (props.props);
        if (typeof stringProp === 'string'){
            if(stringProp.includes("magic")){
                let toReturn = stringProp.substring(17)
                return(
                    <h4>Armor: {toReturn} </h4>
                )
            }
            if(stringProp.includes("equipment")){
                let toReturn = stringProp.substring(15)
                return(
                    <h4>Armor: {toReturn} </h4>
                )
            }
            else{
                return(
                    <h4>Armor: {stringProp} </h4>
                )
            }
        }
       
        else{
            return(
                <h4>Armor: {props.props}</h4>
            )
        }
    }

render(){
        return(
            <PlayerInfoConsumer> 
               {context => (
               <div className="Player">
                    <NavBar active="Player"/>
                    <div className="CharBlock">
                        <div className="name"> 
                            <h3>Name: {context.Name}</h3>
                            <h4>Class: {context.Class}</h4>
                            <h4>Level: {context.level}</h4>
                            <this.WeaponName props={context.weapon}/>
                            <this.ArmorName props={context.armor}/>
                        </div>
                        <LevelClassArmorWeapon/>
                        <AttackStats/>
                        <StatBlock/>
                        <SpellCasting/>
                        <div className="slottitle">
                            <h1 className="slottitle" ><button className = "button" onClick={() =>this.CallAPISpells(context.Class)}>Update Spells</button>  Spell Slots</h1>
                        </div>
                        <SpellSlots/>
                    </div>       
                    <SpellGrid spellData={this.state.spellData} error ={this.state.spellError}/>
                </div>
            )}
        </PlayerInfoConsumer>
        )
    }

}

export {Player};
