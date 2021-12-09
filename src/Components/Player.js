import React from 'react';
import NavBar from "./NavBar";
import {PlayerInfoConsumer} from './PlayerInfo';
import SpellGrid from './SpellGrid';
import {styles} from "./Player.css"

function callAPI(){
        const testurl = `https://www.dnd5eapi.co/api/spells/acid-arrow`

        fetch(testurl)
        .then(data => data.json()) // Parsing the data into a JavaScript object
        .then(json => alert(JSON.stringify(json))) // Displaying the stringified data in an alert popup  
/*
        .catch((error) => {
            console.log(error);
            this.setState({error:true})
        });
        console.log(data)*/
}

function Player (){


        return(
            <PlayerInfoConsumer> 
               {context => (
               <div className="Player">
                <NavBar active="Player"/>
                <div className="CharBlock">
                    <div className="name">Player Name: {context.Name}</div>
                    
                    <div className ="classlevel">
                    <label for="classDrop"> Class</label>
                        <div className="dropDown" >
                        <select id="classDrop">
                            <option className="options" value="0">Select Class</option>
                            <option className="options" value="Cleric">Cleric</option>
                        </select>
                        </div>
                        <br/>
                        <label for="level">Level: </label>
                        <div className="dropDown" >
                            <select id="level">
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
                    </div>

                    <div className="button">
                        <button onClick={callAPI}>Update</button>
                    </div>

                    <div className ="weaponarmor">
                        <label className="h4txt"for="weapon">Weapon: </label>
                        <div className="dropDown" >
                        <select className="dropdown" id="weapon">
                        <option className="options" value="Sword">Sword</option>
                        </select>
                        </div>
                        <br/>
                        <label className="h4txt" for="armor">Armor: </label>
                        <div className="dropDown" >
                        <select className="armorDrop" id="armor">
                        <option className="options" value="Plate">Plate</option>
                        </select>
                        </div>
                    </div>

                    <div className="attackdamage">
                        <button className="button" type="button">Attack!</button>
                        <span className="h4txt" >Code numbers!</span>
                    <br/>
                        <button className="button" type="button">Damage!</button>
                        <span className="h4txt">Code numbers!</span>
                        <h4>AC: CODE </h4>
                        <h4>Attack Mod:CODE</h4>
                    </div>

                    <div className="stats">
                        <h3>Ability scores</h3>
                    <h4>Str: CODE Mod: Code</h4>
                    <h4>Dex: CODE Mod: Code</h4>
                    <h4>Con: CODE Mod: Code</h4>
                    <h4>Int: CODE Mod: Code</h4>
                    <h4>Wis: CODE Mod: Code</h4>
                    <h4>Chr: CODE Mod: Code</h4>
                    </div>

                    <div className="spellcasting">
                        <h3>Spell casting </h3>
                        <h4>Spell save: CODE</h4>
                        <h4> Spell attack bonus: CODE</h4>
                        <h4>Spellcasting Ability: CODE</h4>
                    </div>

                    <div className="slottitle">
                        <h1 className="slottitle" >Spell Slots</h1>
                    </div>

                    <div className="spellslot">
                        <span> 1st:</span>
                        <span> 2nd:</span>
                        <span> 3rd:</span>
                        <span> 4th:</span>
                        <span> 5th:</span>
                        <span> 6th:</span>
                        <span> 7th:</span>
                        <span> 8th:</span>
                        <span> 9th:</span>
                    </div>
                </div>              
                <SpellGrid/>

            </div>
            )}
            </PlayerInfoConsumer>
        )
}

export default Player;