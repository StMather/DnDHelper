import React, {Component} from "react";

class StatBlock extends Component{
    constructor(props){
        super(props);
        this.state = {
            str: 10,
            dex: 10,
        }

        this.strPlus = this.strPlus.bind(this);
    }

    strPlus(e){
       this.setState({str: this.state.str +1})
    }


    render(){
        return(
            <div className="stats">
                <h3>Ability scores</h3>
                <h4>Str: {this.state.str} <button onClick={this.strPlus}>+</button> Mod: Code</h4>
                <h4>Dex: {this.state.dex} Mod: Code</h4>
                <h4>Con: CODE Mod: Code</h4>
                <h4>Int: CODE Mod: Code</h4>
                <h4>Wis: CODE Mod: Code</h4>
                <h4>Chr: CODE Mod: Code</h4>
            </div>
        )
    }
}

export default StatBlock;


