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
        if(!error){
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
        return(
        <section className="grid">
            {this.renderSpell(this.props.spellData,this.props.error)}
        </section>
        )
    }

}
export default SpellGrid;
