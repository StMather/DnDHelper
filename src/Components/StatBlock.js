import React, {Component} from "react";
import {PlayerInfoConsumer} from './PlayerInfo';

class StatBlock extends Component{
    constructor(props){
        super(props);
        this.state = {
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            chr: 10,
        }

        this.strPlus = this.strPlus.bind(this);
        this.dexPlus = this.dexPlus.bind(this);
        this.conPlus = this.conPlus.bind(this);
        this.intPlus = this.intPlus.bind(this);
        this.wisPlus = this.wisPlus.bind(this);
        this.chrPlus = this.chrPlus.bind(this);

        this.strMinus = this.strMinus.bind(this);
        this.dexMinus = this.dexMinus.bind(this);
        this.conMinus = this.conMinus.bind(this);
        this.intMinus = this.intMinus.bind(this);
        this.wisMinus = this.wisMinus.bind(this);
        this.chrMinus = this.chrMinus.bind(this);
    }

    strPlus(e){
       this.setState({str: this.state.str +1})
    }

    dexPlus(e){
        this.setState({dex: this.state.dex +1})
     }

     conPlus(e){
        this.setState({con: this.state.con +1})
     }

     intPlus(e){
        this.setState({int: this.state.int +1})
     }

     wisPlus(e){
        this.setState({wis: this.state.wis +1})
     }

     chrPlus(e){
        this.setState({chr: this.state.chr +1})
     }

     strMinus(e){
        this.setState({str: this.state.str -1})
     }
 
     dexMinus(e){
         this.setState({dex: this.state.dex -1})
      }
 
      conMinus(e){
         this.setState({con: this.state.con -1})
      }
 
      intMinus(e){
         this.setState({int: this.state.int -1})
      }
 
      wisMinus(e){
         this.setState({wis: this.state.wis -1})
      }
 
      chrMinus(e){
         this.setState({chr: this.state.chr -1})
      }

    render(){
        return(
            <PlayerInfoConsumer> 
            {context => (
            <div className="stats">
                <h3>Ability scores</h3>
                <h4>Str: {this.state.str} <button className="button" onClick={this.strMinus}>-</button> <button className="button" onClick={this.strPlus}>+</button> Mod: {Math.floor((context.str - 10) /2)}</h4>
                <h4>Dex: {this.state.dex} <button className="button" onClick={this.dexMinus}>-</button> <button className="button" onClick={this.dexPlus}>+</button> Mod: {Math.floor((context.dex - 10) /2)}</h4>
                <h4>Con: {this.state.con} <button className="button" onClick={this.conMinus}>-</button> <button className="button" onClick={this.conPlus}>+</button> Mod: {Math.floor((context.con - 10) /2)}</h4>
                <h4>Int: {this.state.int} <button className="button" onClick={this.intMinus}>-</button> <button className="button" onClick={this.intPlus}>+</button> Mod: {Math.floor((context.int - 10) /2)}</h4>
                <h4>Wis: {this.state.wis} <button className="button" onClick={this.wisMinus}>-</button> <button className="button" onClick={this.wisPlus}>+</button> Mod: {Math.floor((context.wis - 10) /2)}</h4>
                <h4>Chr: {this.state.chr} <button className="button" onClick={this.chrMinus}>-</button> <button className="button" onClick={this.chrPlus}>+</button> Mod: {Math.floor((context.chr - 10) /2)}</h4>
                <button className="button" onClick={() => context.saveStats(this.state)}>Save</button>
            </div>
            )}
            </PlayerInfoConsumer>
        )
    }
}

export default StatBlock;
