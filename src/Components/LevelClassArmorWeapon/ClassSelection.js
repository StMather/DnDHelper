import React, {useEffect} from 'react';
import PClass from './PClass';

let results =[];
let error = true;

function RenderClasses(){
        if(!error){
            //console.log("Renderclass:");
            //console.log(results);
            return results.map((item) =>(
                <PClass
                key ={item.index}
                pclass ={item}
                />
    
        ));
        }
        else{
            
            return <option className="options" value="-1">Level First</option>
            
        }
}

function ClassSelection () {
    const url= `https://www.dnd5eapi.co/api/classes`

    useEffect(() =>{
        fetch(url)
        .then(response => response.json()) // Parsing the data into a JavaScript object
        .then((data) => {
            results = data.results;
            error = false;
            
        })
    
    }, [])
    return(
            
        <RenderClasses/>
        
    )

}


export default ClassSelection;

