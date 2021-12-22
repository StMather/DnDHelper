import React from "react";
import NavBar from "./NavBar";
import {PlayerInfoConsumer} from './PlayerInfo';



function Home(){
    
    return(
        <PlayerInfoConsumer> 
               {context => (

            <div className ="home">
            <NavBar active="Home"/>
            <h1> {context.Name}</h1>
            
            <label for="Name"> New Name:</label><br/>
            <input type="text" id="Name" name="Name" /><br/>
            <button onClick= {() => context.saveName(document.getElementById("Name").value)}> Submit</button>
            
            </div>

        )}
        </PlayerInfoConsumer>
    )

}

export default Home;