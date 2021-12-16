import React, {Component} from "react";
import styles from "../DungeonMaster.css"


class MonsterCard extends Component{
    constructor(name,maxhp, hp, ac){
        super(name, maxhp, hp, ac);
        this.state ={
            Mname: name,
            MMaxhp: maxhp,
            Mhp: hp,
            Mac: ac,
        }
    }
    
        SetMonster = (name, hp, ac) =>{

            this.setState({Mname: name})
            this.setState({Mhp: hp})
            this.setState({Mac: ac})
        }

        percentHp = (maxHp, hpIn) =>{
            //100 -50 best
            //49-25 fine
            //25-0 worst
            let percent = (hpIn/maxHp)*100;
            console.log(maxHp)
            console.log(hpIn)
            console.log(percent)
            if(percent >=50){
                return "best";
            }
            if(percent < 50 && percent >=25)
            {
                return "fine";
            }
            if(percent <25)
            {
                return "worst";
            }
        }
        
        monsterPop = (ac, hp) =>{
            return(`AC:${ac} HP:${hp}`)
            
        }

        render = () =>{
            console.log(this.state.Mname)
            return(
                <div className={this.percentHp(this.state.MMaxhp, this.state.Mhp)}>
                    <span >{this.state.Mname}</span>
                    <span className ="tooltiptext">{this.monsterPop(this.state.Mac, this.state.Mhp)}</span>
                </div>

        
            )
        }

}


export default MonsterCard;