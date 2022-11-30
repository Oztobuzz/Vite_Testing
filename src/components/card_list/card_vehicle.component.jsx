import { Component } from "react";

class Card_vehicle extends Component{

    render()
    {
        const monster = this.props.monster;
        // console.log(monster["ID"]);
        return (
            <div key = {monster.ID} className = "card">
                <p>{monster["ID"]}</p>
                <p>{monster["Weight (Tons)"]}</p>
                <p>{monster["Capacity (Tons)"]}</p>
                <p>{monster["Fuel Consumption (Liters)"]}</p>
                <p>{monster.State}</p>
            </div>
        );
    }
};



export default Card_vehicle;