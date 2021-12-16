import React, { Component } from "react"
const {Provider, Consumer} = React.createContext();

class PlayerInfoProvider extends Component{
    state ={
        //Add varible here
        Name: "Morgromahr",
        level: 0,
        Class: "Cleric",
        weapon: "Unarmed",
        armor:  "none",
        SpellData: [],
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        chr: 10,
        
    };


render() {
    return(
        <Provider//put variable in line below
        value={{
            Name: this.state.Name, 
            Class: this.state.Class, 
            SpellData: this.state.SpellData,
            str: this.state.str,
            dex: this.state.dex,
            con: this.state.con,
            int: this.state.int,
            wis: this.state.wis,
            chr: this.state.chr,
            level: this.state.level,
            weapon: this.state.level,
            armor: this.state.armor,
            saveStats: props =>{
                //console.log(props);
                this.setState({str: props.str})
                this.setState({dex: props.dex})
                this.setState({con: props.con})
                this.setState({int: props.int})
                this.setState({wis: props.wis})
                this.setState({chr: props.chr})
                
            },
            saveLCWA: props =>{
                //console.log(props);
                this.setState({level: props.level})
                this.setState({Class: props.class})
                this.setState({weapon: props.weapon})
                this.setState({armor: props.armor})
                
            }
            }
        }
        >
            {this.props.children}
        </Provider>
    )
}
}

export {PlayerInfoProvider, Consumer as PlayerInfoConsumer};


