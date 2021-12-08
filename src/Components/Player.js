import React from 'react';
import NavBar from "./NavBar";
import {PlayerInfoConsumer} from './PlayerInfo';
import {styles} from "./Player.css"



function Player (){


        return(
            <PlayerInfoConsumer> 
               {context => (
               <div className="Player">
                <NavBar active="Player"/>
                <h1>    </h1>
                <div className="CharBlock">
                    <div className="name">Player Name: {context.Name}</div>
                    <div className="class">Player Class: {context.Class}</div>
                </div>
                </div>
            )}
            </PlayerInfoConsumer>
        )
}

export default Player;