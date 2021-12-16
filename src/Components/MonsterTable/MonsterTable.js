import React, {Component} from "react";
import MonsterCard from "./MonsterCard";


class MonsterTable extends Component{
    constructor(props){
        super(props);
        this.state ={
            Monsters:[],
        }
    }

    render (){
        let dog = new MonsterCard("dog", 23, 23, 12);
        let cat = new MonsterCard("cat", 23, 20 , 12);
        let turtle = new MonsterCard("turtle", 23, 15 , 12);
        let dragon = new MonsterCard("dragon", 23, 11 , 12);
        let tiger = new MonsterCard("tiger", 23, 10 , 12);
        let human = new MonsterCard("human", 23, 5 , 12);
        let hippo = new MonsterCard("hippo", 23, 1 , 12);
        console.log(dog);
        return(
            <div className = "MonsterBlock" >
                <dog.render/>
                <cat.render/>
                <turtle.render/>
                <dragon.render/>
                <tiger.render/>
                <human.render/>
                <hippo.render/>
            </div>
        )
    }
}

export default MonsterTable;
