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

    render(){

        return(
            <PlayerInfoConsumer> 
            {context => (
            <div className ="classlevel">
                        <label for="levelDrop">Level: </label>
                        <div className="dropDown" >
                            <select id="levelDrop" onChange={this.levelChange}>
                                <option className="options" value="1">1</option>
                                <option className="options" value="2">2</option>
                                <option className="options" value="3">3</option>
                                <option className="options" value="4">4</option>
                                <option className="options" value="5">5</option>
                                <option className="options" value="6">6</option>
                                <option className="options" value="7">7</option>
                                <option className="options" value="8">8</option>
                                <option className="options" value="9">9</option>
                                <option className="options" value="10">10</option>
                                <option className="options" value="11">11</option>
                                <option className="options" value="12">12</option>
                                <option className="options" value="13">13</option>
                                <option className="options" value="14">14</option>
                                <option className="options" value="15">15</option>
                                <option className="options" value="16">16</option>
                                <option className="options" value="17">17</option>
                                <option className="options" value="18">18</option>
                                <option className="options" value="19">19</option>
                                <option className="options"value="20">20</option>
                            </select>
                        </div>
                    
                        <br/>
                        <label for="classDrop"> Class:</label>
                        <div className="dropDown" >
                            <select id="classDrop" onChange={this.classChange}>
                                <ClassSelection/>
                            </select>
                        </div>
                
                        <label className="h4txt" for="weapon">Weapon: </label>
                            <div className="dropDown" >
                            <select id="weapon" onChange={this.weaponChange}>
                                <WeaponSelection/>
                            </select>
                            </div>
                        <br/>
                        <label className="h4txt" for="armor">Armor: </label>
                            <div className="dropDown" >
                            <select id="armor" onChange={this.armorChange}>
                                <ArmorSelection/>
                                <option className="options" value="None">None</option>
                            </select>
                        </div>

                        <button className = "button" onClick={() =>context.saveLCWA(this.state) }>Save changes </button>
                        
                    </div>
                     )}
                     </PlayerInfoConsumer>
        )
    }

}
//context.saveLCWA(this.state)  <button className = "button" onClick={context.saveLCWA(this.state) }>Save changes </button>
// <button className = "button" onClick={() =>console.log(this.state) }>Save changes </button>
export default LevelClassArmorWeapon;
