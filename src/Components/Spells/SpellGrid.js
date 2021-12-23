import React, { Component } from "react";
import Spell from './Spell';
import SpellError from './SpellError';

import './SpellGrid.css';

class SpellGrid extends Component{
    constructor(props){
        super(props);
        this.state ={
            spells:[],
            error: true,
        }
    }

    

    renderSpell(spellData, error){
       //console.log(spellData)
        //console.log(this.props.error)
        if(!error){
            console.log("inside if")
            
            return spellData.map((item) =>(
                <Spell
                key = {item.index}
                spell = {item}
                />
            ));
            }
        else{
            return <SpellError />
        }
    }

    render(props){
        //console.log(`Rendering spell ${this.props.error}`) {this.upgradeSpell(item.url)}
        //console.log("here");
        //console.log(this.props.spells);
        return(
        <section className="grid">
            {this.renderSpell(this.props.spellData,this.props.error)}
        </section>
        )
    }

}
export default SpellGrid;
