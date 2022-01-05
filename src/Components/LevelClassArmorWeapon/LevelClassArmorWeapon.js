import React, {Component} from "react";
import {PlayerInfoConsumer} from '../PlayerInfo';
import ClassSelection from "./ClassSelection";
import WeaponSelection from "./WeaponSelection";
import ArmorSelection from "./ArmorSelection";

class LevelClassArmorWeapon extends Component{
    constructor(props){
        super(props);
        this.state = {
            class: "none",
            level: "0",
            weapon: "Unarmed",
            armor: "None",
            armorurl: "None",
        }

        this.classChange = this.classChange.bind(this);
        this.levelChange = this.levelChange.bind(this);
        this.armorChange = this.armorChange.bind(this);
        this.weaponChange = this.weaponChange.bind(this);
      
    }
    classChange(e){
        this.setState({class: e.target.value});
    }

    levelChange(e){
        this.setState({level: e.target.value});
    }

    armorChange(e){
        this.setState({armor: e.target.value});
    }

    weaponChange(e){
        this.setState({weapon: e.target.value});
    }

    showLevels(){
        let out = [];
        for(let i=1; i<=20; i++)
        {
            out.push(i)
        }
        return out.map((item) =>(
            <option key = {item} className="options" value={item}>{item}</option>
        ))
    }

    render(){

        return(
            <PlayerInfoConsumer> 
            {context => (
            <div className ="classlevel">
                <h1>Change</h1>
                <label htmlFor="levelDrop">Level: </label>
                <div className="playerDropDown" >
                    <select id="levelDrop" onChange={this.levelChange}>
                    <option className="options" value={0}>{0}</option>
                        <this.showLevels/>
                        
                    </select>
                </div>

                <label htmlFor="classDrop"> Class:</label>
                <div className="playerDropDown" >
                    <select id="classDrop" onChange={this.classChange}>
                        <ClassSelection/>
                    </select>
                </div>
        
                <label className="h4txt" htmlFor="weapon">Weapon: </label>
                    <div className="playerDropDown" >
                    <select id="weapon" onChange={this.weaponChange}>
                        <option className="options" value="unarmed">Unarmed</option>
                        <WeaponSelection/>
                    </select>
                    </div>

                <label className="h4txt" htmlFor="armor">Armor: </label>
                    <div className="playerDropDown" >
                    <select id="armor" onChange={this.armorChange}>
                        <option className="options" value="None">None</option>
                        <ArmorSelection/>
                    </select>
                </div>

                <button className = "button" onClick={() =>context.saveLCWA(this.state) }>Save changes </button>
                
            </div>
            )}
            </PlayerInfoConsumer>
        )
    }

}

export default LevelClassArmorWeapon;
