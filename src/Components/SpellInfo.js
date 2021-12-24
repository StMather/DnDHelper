import React, { Component } from "react";
import NavBar from "./NavBar";
import {useLocation} from 'react-router-dom'


function SpellInfo(props){
    const location = useLocation()
    //const {spellIn} = this.props.location.state;
    console.log(location);
    const url = location.search.substring(1);
    console.log(url);
        return(

            <div className="spell">
                <NavBar active="none"/>
                <h1>Work in progress</h1>
                <h2>{url}</h2>
            </div>
        )

}

export default SpellInfo;