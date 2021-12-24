import React,{Component} from 'react';
import NavBar from "./NavBar";
import {PlayerInfoConsumer} from './PlayerInfo';
import SpellGrid from './Spells/SpellGrid';
import "./Player.css";
import StatBlock from './StatBlock';
import SpellCasting from './Spellcasting/Spellcasting';
import LevelClassArmorWeapon from './LevelClassArmorWeapon/LevelClassArmorWeapon';
import SpellSlots from './SpellSlots/SpellSlots';
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

        this.callAPISpells = this.callAPISpells.bind(this);
    }


async callAPISpells(props){
    console.log(props);
        const testurl= `https://www.dnd5eapi.co/api/classes/${props}/spells`

        const response = await axios.get(testurl)

        this.setState({spellData:response.data.results});
        this.setState({spellError:false});

            console.log(this.state.spellData.length)
            for(var i = 0; i < this.state.spellData.length ; i++)
            {
                let tempData = this.state.spellData[i]
                //console.log(tempData, i);
                //() => this.upgradeSpell(tempData))
                //console.log(this.upgradeSpell(tempData.url, this.state.spellError))
                this.UpgradeSpell(tempData.url, this.state.spellError, i);
                
                //tempSpellData[i] = this.UpgradeSpell(tempData.url, this.state.spellError)
                //console.log(tempSpellData[i]);
            }
    }
    
            


    UpgradeSpell = async (url, error, index) =>{
        let tempSpellData = this.state.spellData;
        //console.log(error);
        //console.log(url);
        if(!error)
        {
            //console.log(`https://www.dnd5eapi.co${url}`)
            const testurl= `https://www.dnd5eapi.co${url}`

            const response = await axios.get(testurl)
                //.then(response => response.json()) // Parsing the data into a JavaScript object
                //.then((data) => {\
                const data = await response.data;
                //console.log(data);
                this.setState({spellsLoaded: true});

                if(!this.state.spellsLoaded)
                {
                    
                }
                else{
                    tempSpellData[index] = data;
                    //console.log(tempSpellData[index]);
                    this.setState({spellData: tempSpellData});
                }
                
                //this.setState({spellData:data.results});
                //this.setState({spellError:false});
        } // Displaying the data in an alert popup  
    
        //.catch((error) => {
            //console.log(error);
        //});
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
                    <h4>Weapon: {context.weapon}</h4>
                    <h4>Armor:  {context.armor}</h4>

                    </div>
                    
                    <LevelClassArmorWeapon/>

                    <div className="attackdamage">
                        <button className="button" type="button">Attack!</button>
                        <span className="h4txt" >Code numbers!</span>
                    <br/>
                        <button className="button" type="button">Damage!</button>
                        <span className="h4txt">Code numbers!</span>
                        <h4>AC: CODE </h4>
                        <h4>Attack Mod:CODE</h4>
                    </div>

                    <StatBlock/>

                    <SpellCasting/>

                    <div className="slottitle">
                        <h1 className="slottitle" ><button className = "button" onClick={() =>this.callAPISpells(context.Class)}>Update Spells</button>Spell Slots</h1>
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

export default Player;