import { Component } from "react";
import Card from "./card.component";
import Card_MCP from "./card_MCP.component";
import Card_vehicle from "./card_vehicle.component";
<link rel="stylesheet" href="./card_list.component.css" />
class CardList extends Component{

    render()
    {
        const monsters = this.props.monsters;
        return(
            <div className={this.props.className}>
                <div className = "header">
                    <h2>Full name</h2>
                    <h2>ID</h2>
                    <h2>STATE</h2>
                </div>
                {monsters.map((monster)=>{
                    return(
                        <Card monster = {monster}></Card>
                    )
                })}
            </div>
        )
    }
};


class CardList_MCP extends Component{
    render()
    {
        const monsters = this.props.monsters;
        return(
            <div className={this.props.className}>
                <div className = "header">
                    <h2>ID</h2>
                    <h2>Address</h2>
                    <h2>State</h2>
                </div>
                {monsters.map((monster)=>{
                    return(
                        <Card_MCP monster = {monster}></Card_MCP>
                    )
                })}
            </div>
        )
    }
};

class CardList_vehicle extends Component{
    render()
    {
        const monsters = this.props.monsters;
        return(
            <div className={this.props.className}>
                <div className = "header">
                    <h2>ID</h2>
                    <h2>Weight (Tons)</h2>
                    <h2>Capacity (Tons)</h2>
                    <h2>Fuel Consumption (Liters)</h2>
                    <h2>State</h2>
                </div>
                {monsters.map((monster)=>{
                    return(
                        <Card_vehicle monster = {monster}></Card_vehicle>
                    )
                })}
            </div>
        )
    }
};
export  {CardList};
export {CardList_MCP, CardList_vehicle} ; 