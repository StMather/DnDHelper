import { Component } from "react";
import NavBar from "./NavBar";


class DungeonMaster extends Component{

render(){
    return(
        <div className ="DungeonMaster">
        <NavBar active="DM"/>
        <h1>DungeonMaster</h1>
        </div>
    )
    }
}

export default DungeonMaster;