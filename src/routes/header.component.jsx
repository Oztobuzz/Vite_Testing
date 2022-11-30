
import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () =>{
    return(
        <div className="container">
            <ul>
                <li><a href="calendar.html"><i className="fa fa-tachometer"></i>DASHBOARD</a></li>
                <li><Link to = "/worker"><i className="fa fa-male"></i>WORKER</Link></li>
                <li><Link to = "/vehicle"><i className="fa fa-truck"></i>VEHICLE</Link></li>
                <li><Link to = "/mcp"><i className="fa fa-trash"></i>MCP</Link></li>
                <li><a href="#"><i className="fa fa-phone"></i>CONTACT</a></li>
                <li><a href="Login.html"><i className="fa fa-sign-out"></i>LOGOUT</a></li>
            </ul>
            <Outlet></Outlet>
        </div>
    )
}

export default Navbar;