import React, { Component } from "react";
import Spell from './Spell';
import SpellError from './SpellError';

import styles from './SpellGrid.css';

class SpellGrid extends Component{
    constructor(props){
        super(props);
        this.state ={
            spells:[],
            error: true,
        }
    }

    renderSpell(props){
        //console.log(props.spellData)
        if(!this.props.error){
        return this.props.spellData.map((item) =>(
            <Spell
            key ={item.index}
            spell ={item}
            />
        ));
        }
        else{
            return <SpellError />
        }
    }

    render(props){
        //console.log(`Rendering spell ${this.props.error}`)
        return(
        <section className="grid">
            {this.renderSpell(this.props)}
        </section>
        )
    }

}
export default SpellGrid;
