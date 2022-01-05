import React, {Component} from "react";
import MonsterCard from "./MonsterCard";
import MonsterSelection from "./MonsterSelection";


class MonsterTable extends Component{
    constructor(props){
        super(props);
        this.state ={
            Monsters:[],
            ChallangeRating:"0",
            TempMonsterAPI: "-1",
            Results: [],
            MonsterSelectionError: true,
        }

        this.changeChallangeRating = this.changeChallangeRating.bind(this);
        this.changeTempMonsterAPI = this.changeTempMonsterAPI.bind(this);
        this.CallAPIMonster = this.CallAPIMonster.bind(this);
        this.BuildMonsterAPI = this.BuildMonsterAPI.bind(this);
    }


    CallAPIMonster(props){//change to use for individual monster call
    //console.log(props);
        //let lowered = props.toLowerCase();
        const testurl= `https://www.dnd5eapi.co/api/monsters?challenge_rating=${props}`
        //const testurl = `https://www.dnd5eapi.co/api/spells/acid-arrow`
        fetch(testurl)
        .then(response => response.json()) // Parsing the data into a JavaScript object
        .then((data) => {
            this.setState({Monsters: data.results});
        }) // Displaying the data in an alert popup  

       
        .catch((error) => {
            console.log(error);
        });
    }
    
    changeTempMonsterAPI(e){
        this.setState({TempMonsterAPI: e.target.value});
    }

    changeChallangeRating(e){
        this.setState({ChallangeRating: e.target.value});
    }

    BuildMonsterAPI(props){
        if(props !== "-1")
        {
            console.log(this.state.Monsters);
                //let lowered = props.toLowerCase();
                const testurl= `https://www.dnd5eapi.co${props}`
                //const testurl = `https://www.dnd5eapi.co/api/spells/acid-arrow`
                fetch(testurl)
                .then(response => response.json()) // Parsing the data into a JavaScript object
                .then((data) => {
                    let monster = new MonsterCard(data.name, data.hit_points, data.hit_points,data.armor_class,this.state.Monsters.length);
                    //console.log(monster);
                    let newMonsters =this.state.Monsters;
                    newMonsters.push(monster)
                    console.log(`New ${newMonsters}`);
                        
                    this.setState({Monsters: newMonsters});
                }) // Displaying the data in an alert popup  
        
                .catch((error) => {
                    console.log(error);
                });
            }
        }

        renderMonster()
        {
            if(this.state.Monsters.length >0)
            {
                console.log(this.state.Monsters)
                return (
                this.state.Monsters.map((item) =>(
                    <item.render/>
                ))
                )
            }
        }

        monsterSelectionDrop(props)
        {
            if(props !== "-1")
            {
                const url= `https://www.dnd5eapi.co/api/monsters?challenge_rating=${props}`

                fetch(url)
                .then(response => response.json()) // Parsing the data into a JavaScript object
                    .then((data) => {
                        this.setState({Results: data.results});
                        this.setState({MonsterSelectionError: false})
                }   )
            }
        }


    render (){
        return(
            <div className = "MonsterBlock" >
                <div className="monsterPicker">
                    <label htmlFor="levelDrop" className="CRtitle">ChallangeRating: {this.state.ChallangeRating} </label>
                        <div className="dropDown" >
                            <select id="crDrop" onChange={this.changeChallangeRating}>
                                <option className="options" value="0">Challange Rating</option>
                                <option className="options" value="0">0</option>
                                <option className="options" value=".125">.125</option>
                                <option className="options" value=".25">.25</option>
                                <option className="options" value=".5">.5</option>
                                <option className="options" value="1">1</option>
                                <option className="options" value="2">2</option>
                                <option className="options" value="3">3</option>
                                <option className="options" value="4">4</option>
                                <option className="options" value="5">5</option>
                                <option className="options" value="6">6</option>
                                <option className="options" value="7">7</option>
                                <option className="options" value="8">8</option>
                                <option className="options" value="9">9</option>
                                <option className="options" value="10">10</option>
                                <option className="options" value="11">11</option>
                                <option className="options" value="12">12</option>
                                <option className="options" value="13">13</option>
                                <option className="options" value="14">14</option>
                                <option className="options" value="15">15</option>
                                <option className="options" value="16">16</option>
                                <option className="options" value="17">17</option>
                                <option className="options" value="19">19</option>
                                <option className="options" value="20">20</option>
                                <option className="options" value="21">21</option>
                                <option className="options" value="22">22</option>
                                <option className="options" value="23">23</option>
                                <option className="options" value="24">24</option>
                                <option className="options" value="30">30</option>
                            </select>
                        </div>
                        <button className="button" onClick={() => this.monsterSelectionDrop(this.state.ChallangeRating)}>Query</button>

                        <br/>
                        <label htmlFor="classDrop"> Monsters</label>
                        <div className="dropDown" >
                            <select id="monsterDrop" onChange={this.changeTempMonsterAPI}>
                            <option className="options" value="-1">None</option>
                                <MonsterSelection results={this.state.Results} error={this.state.MonsterSeclectionError}/>
                            </select>
                        </div>
                        <button className="button" onClick={() => this.BuildMonsterAPI(this.state.TempMonsterAPI)}>Monster Selection: {this.state.TempMonsterAPI}</button>
                    </div>
                    {this.renderMonster()}

                
            </div>
        )
    }
}

export default MonsterTable;

/*
<dog.render/>
                <cat.render/>
                <turtle.render/>
                <dragon.render/>
                <tiger.render/>
                <human.render/>
                <hippo.render/>*/
