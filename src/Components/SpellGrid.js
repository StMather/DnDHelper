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

    updateSpell(props){
        /*this.querySpell(this.props)*/
        console.log(`Clicked ${this.props}`);
    }

    querySpell(props){
        const testurl = `https://www.dnd5eapi.co/api/spells/acid-arrow`

        fetch(testurl)
        .then((responce) =>{
            return responce.json();
        })
        .then((data) => {
            this.setState({
                spells: data,
                error: false
            })
        })
        .catch((error) => {
            console.log(error);
            this.setState({error:true})
        });
        console.log(this.state.spells)
    }

    renderSpell(props){
        if(!this.state.error){
        return this.state.spells.map((item) =>(
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
        return(
        <section className="grid">
            {this.renderSpell(this.props)}
        </section>
        )
    }

}
export default SpellGrid;
