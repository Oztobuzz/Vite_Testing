
import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="container">
            <ul>
                <li><a href="#"><i className="fa fa-tachometer"></i>DASHBOARD</a></li>
                <li><a href="worker"><i className="fa fa-male"></i>WORKER</a></li>
                <li><a href="vehicle"><i className="fa fa-truck"></i>VEHICLE</a></li>
                <li><a href="mcp"><i className="fa fa-trash"></i>MCP</a></li>
                <li><a href="#"><i className="fa fa-phone"></i>CONTACT</a></li>
                <li><a href="Login.html"><i className="fa fa-sign-out"></i>LOGOUT</a></li>
            </ul>
            <Outlet></Outlet>
        </div>
    )
}

export default Navbar;