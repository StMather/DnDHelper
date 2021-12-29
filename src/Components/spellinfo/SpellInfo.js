import React, { Component} from "react";
import NavBar from "../NavBar";
import SpellInfoRender from "./SpellInfoRender";
import "./SpellInfo.css"


//() =>context.saveLCWA(this.state)
//<SpellInfoRender Url={url}/>

class SpellInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            spellError: true,
            spellData: [],
        }

    }

    setSpellErrorFalse()
    {
        this.setState({spellError: false});
    }

    render(){
        
        if(this.state.spellError)
        {
            
            return(
                <div className="spell">
                    <NavBar active="none"/>
                    <button className = "spellbutton" onClick={() =>this.setSpellErrorFalse()}>Show Spell</button>
                    <SpellInfoRender/>
                </div>

            )
        }
        else{
            return(
                <div className="spell">
                    <NavBar active="none"/>
                    <SpellInfoRender/>
                </div>
            )
        }
    }

}
export default SpellInfo;