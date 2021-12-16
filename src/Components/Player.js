import React,{Component} from 'react';
import NavBar from "./NavBar";
import {PlayerInfoConsumer} from './PlayerInfo';
import SpellGrid from './Spells/SpellGrid';
import {styles} from "./Player.css";
import StatBlock from './StatBlock';
import SpellCasting from './Spellcasting/Spellcasting';
import LevelClassArmorWeapon from './LevelClassArmorWeapon/LevelClassArmorWeapon';
import SpellSlots from './SpellSlots/SpellSlots';



class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            spellError: true,
            spellData: [],
        }

        this.callAPISpells = this.callAPISpells.bind(this);
    }


callAPISpells(props){
    console.log(props);
        //let lowered = props.toLowerCase();
        const testurl= `https://www.dnd5eapi.co/api/classes/${props}/spells`
        //const testurl = `https://www.dnd5eapi.co/api/spells/acid-arrow`
        fetch(testurl)
        .then(response => response.json()) // Parsing the data into a JavaScript object
        .then((data) => {
            this.setState({spellData:data.results});
            this.setState({spellError:false});
        }) // Displaying the data in an alert popup  

       
        .catch((error) => {
            console.log(error);
        });
}


render(){
        return(
            <PlayerInfoConsumer> 
               {context => (
               <div className="Player">
                <NavBar active="Player"/>
                <div className="CharBlock">
                    <div className="name">Player Name: {context.Name} {context.Class}</div>
                    
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