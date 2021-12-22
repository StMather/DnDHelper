import React  from 'react';
import Monster from './Monster';

let results =[];
let error = true;

function RenderMonster(){
        if(!error){
            //console.log("Renderclass:");
            //console.log(results);
            return results.map((item) =>(
                <Monster
                key ={item.index}
                monster ={item}
                />
    
        ));
        }
        else{
            
            return <option className="options" value="-1">Choose Challange Rating</option>
            
        }
}

function MonsterSelection (props) {
    results = props.results;
    error = props.error;

    return(
            
        
        <RenderMonster/>
        
    )

}


export default MonsterSelection;