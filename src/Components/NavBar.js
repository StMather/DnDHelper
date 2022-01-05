import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';

function NavBar(props){
    let homeButton= '';
    let dmButton= '';
    let playerButton= '';

    switch (props.active) {
        case 'DM':
            dmButton ='NavActive';
            break;
        case 'Player':
            playerButton ='NavActive';
            break;
        case 'Home':
            homeButton = 'NavActive';
            break;
        default:
            break;
        }
        return (
            <ul className="NavBar">
                <div className="NavBarLeft">
                    <li className={homeButton}>
                        <NavLink to="/" >Home</NavLink>
                    </li>            
                </div>
                <div className="NavBarRight">
                    <li className={playerButton}>
                        <NavLink to="/player" >Player</NavLink>
                    </li>
                    <li className={dmButton}>
                        <NavLink to="/dungeonMaster" >Dungeon Master</NavLink>
                    </li>
                </div>
            </ul>
        )
    

}

/*
Add to nav bar later as they are built
                <li className={spellButton}>
                <NavLink to="/spells">Spells</NavLink>
                </li>
                <li className={ruleButton}>
                <NavLink to="/rules">Rules</NavLink>
                </li>
                <li className={conditionButton}>
                <NavLink to="/conditions">Conditions</NavLink>
                </li>
*/


export default NavBar;
