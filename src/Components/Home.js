import React from "react";
import NavBar from "./NavBar";
import {PlayerInfoConsumer} from './PlayerInfo';
import './Home.css'



function Home(){
    
    return(
        <PlayerInfoConsumer> 
               {context => (

            <div className ="home">
            <NavBar active="Home"/>
            <div className="welcome">
            <h1>Welcome</h1>
            <h2> Please enter your characters name! </h2>
            <h1 className="name"> {context.Name}</h1>
            
            <label for="Name"> New Name:</label><br/>
            <input className="newName" type="text" id="Name" name="Name" /><br/>
            <button className="button" onClick= {() => context.saveName(document.getElementById("Name").value)}> Submit</button>
            </div>
            </div>

        )}
        </PlayerInfoConsumer>
    )

}

export default Home;