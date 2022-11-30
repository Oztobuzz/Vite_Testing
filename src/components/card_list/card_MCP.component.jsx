import { Component } from "react";
import Card from "./card.component";

class Card_MCP extends Component{

    render()
    {
        const monster = this.props.monster;
        return ( 
            <div key = {monster.ID} className = "card">
                <p>{monster.ID}</p>
                <p>{monster["Address"]}</p>
                <p>{monster.State}</p>
            </div>
        );
    }
};



export default Card_MCP;