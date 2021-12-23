import { Component } from "react";
import NavBar from "./NavBar";
import MonsterTable from "./MonsterTable/MonsterTable";
import "./DungeonMaster.css";


class DungeonMaster extends Component{

render(){
    return(
        <div className ="DungeonMaster">
        <NavBar active="DM"/>
        <MonsterTable/>
        </div>
    )
    }
}

export default DungeonMaster;
