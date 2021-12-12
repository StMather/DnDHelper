import React, { Component } from "react"
const {Provider, Consumer} = React.createContext();

class PlayerInfoProvider extends Component{
    state ={
        //Add varible here
        Name: "Morgromahr",
        Class: "Cleric",
        SpellData: [],
        

        
    };


render() {
    return(
        <Provider//put variable in line below
        value={{Name: this.state.Name, Class: this.state.Class, SpellData: this.state.SpellData}}
        >
            {this.props.children}
        </Provider>
    )
}
}

export {PlayerInfoProvider, Consumer as PlayerInfoConsumer};


