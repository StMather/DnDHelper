import React, { Component } from "react"
const {Provider, Consumer} = React.createContext();

class PlayerInfoProvider extends Component{
    state ={
        //Add varible here
        Name: "Morgromahr",
        level: 0,
        Class: "cleric",
        weapon: "Unarmed",
        armor:  "none",
        armorClass: 0,
        SpellData: [],
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        chr: 10,
        attackRoll: 0,
        damageRoll: 0,
        damageDie: 1,

    };

getProf(){

    let prof = 0;
    if(this.state.level <= 4)
    {
        prof = 2;
    }
    else if( this.state.level > 4 && this.state.level <= 8)
    {
        prof = 3;
    }
    else if(this.state.level > 8 && this.state.level <= 12)
    {
        prof = 4;
    }
    else if(this.state.level > 12 && this.state.level <= 16)
    {
        prof = 5
    }
    else if(this.state.level > 16)
    {
        prof = 6;
    }
    return prof;
}

updateDamageDie(props){
    console.log(props)
    //+ability mod
    const url= `https://www.dnd5eapi.co${props}`

    if(props !== "unarmed" && props !== 'Unarmed' && props !== '-1' && !props.includes("magic")){
        fetch(url)
        .then(response => response.json()) // Parsing the data into a JavaScript object
        .then((data) => {
            console.log(data)
            this.setState({damageDie:data.damage.damage_dice});
            
        })
    }
    if(props === 'unarmed' || props === "Unarmed"){
        let damage = 1 + (Math.floor((this.state.str - 10) /2))
        this.setState({damageDie: damage});
        console.log(this.state.damageDie);
    }
    else{
        //unarmed
        console.log("here");
        this.setState({damageDie: "Magic"});
    }
}



render() {
    return(
        <Provider//put variable in line below
        value={{
            Name: this.state.Name, 
            Class: this.state.Class, 
            SpellData: this.state.SpellData,
            str: this.state.str,
            dex: this.state.dex,
            con: this.state.con,
            int: this.state.int,
            wis: this.state.wis,
            chr: this.state.chr,
            level: this.state.level,
            weapon: this.state.weapon,
            armor: this.state.armor,
            armorClass: this.state.armorClass,
            attackRoll: this.state.attackRoll,
            damageRoll: this.state.damageRoll,
            damageDie: this.state.damageDie,
            saveStats: props =>{
                this.setState({str: props.str}, () => this.updateDamageDie(this.state.weapon));
                if(this.state.str < 12)
                {
                    if(this.state.weapon === "warhammer")
                    {
                        this.setState({weapon: "Unarmed"});
                    }
                }                
                this.setState({dex: props.dex});
                this.setState({con: props.con});
                this.setState({int: props.int});
                this.setState({wis: props.wis});
                this.setState({chr: props.chr});
                
                
                
            },
            saveLCWA: props =>{
                this.setState({level: props.level});
                this.setState({Class: props.class});
                this.setState({weapon: props.weapon});
                this.setState({armor: props.armor});
                //here
                this.updateDamageDie(props.weapon);
                
            },
            saveName: props =>{
                this.setState({Name: props});
                
            },
            saveArmorClass: props=>{
                this.setState({armorClass: props});
            },
            rollAttack: props =>{
                
                let roll = Math.floor(Math.random() * 20) + 1
               
                if(props === "dex"){
                    roll += ((Math.floor(this.state.dex - 10) /2));
                }
                if(props === "str"){
                    roll += ((Math.floor(this.state.str - 10) /2));
                }
                roll += this.getProf();
                this.setState({attackRoll: roll})

            },
            rollDamage: props =>{
                //+ability mod
                //console.log(this.state.weapon);
                const url= `https://www.dnd5eapi.co${this.state.weapon}`
           
                if(this.state.weapon !== "unarmed" && this.state.weapon !== 'Unarmed' && this.state.weapon !== '-1' && !this.state.weapon.includes("magic")){
                    fetch(url)
                    .then(response => response.json()) // Parsing the data into a JavaScript object
                    .then((data) => {
                        //console.log(data)
                        let Mod = 0;
                        //ranged
                        if(data.weapon_range === "Ranged"){
                            Mod= (Math.floor((this.state.dex - 10) /2));
                        }
                        //end ranged
                        //finesse
                        else{
                            let done = false;
                            for(var i = 0; i<data.properties.length; i++){
                                if( data.properties[i].name === 'Finesse' && !done){
                                    if(this.state.str < this.state.dex){
                                        Mod= (Math.floor((this.state.dex - 10) /2));
                                    }
                                    else{
                                        Mod= (Math.floor((this.state.str - 10) /2));
                                    }
                                    i = 100;
                                }
                                else{
                                    Mod = (Math.floor((this.state.str - 10) /2));
                                }
                                
                            }
                        }
                        //end finesse
                        let amount = parseInt(this.state.damageDie.substring(0,1),10)
                        let die = parseInt(this.state.damageDie.substring(2),10)
                        let damageOut =0;
                        for(var o = 0; o<amount; o++){
                            damageOut +=  Math.floor(Math.random() * die) + 1
                        }
                        console.log(damageOut);
                        console.log(Mod);
                        damageOut += Mod;
                        console.log(damageOut);
                        this.setState({damageRoll: damageOut});
                        
                    })
                }
                if(this.state.weapon === 'unarmed' || this.state.weapon === 'Unarmed'){
                    this.setState({damageRoll: this.state.damageDie});
                }
           }
            }
        }
        >
            {this.props.children}
        </Provider>
    )
}
}

export {PlayerInfoProvider, Consumer as PlayerInfoConsumer};


