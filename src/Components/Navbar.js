import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div><Link to="/">Circle</Link></div>
                <div><Link to="/triangle">Triangle</Link></div>
                <div><Link to="/right_angled_triangle">Right-angled triangle</Link></div>
                <div><Link to="/square">Square</Link></div>
                <div><Link to="/rectangle">Rectangle</Link></div>
                <div><Link to="/rhombus">Rhombus</Link></div>
                <div><Link to="/parallelogram">Parallelogram</Link></div>
                <div><Link to="/trapezoid">Trapezoid</Link></div>
                <div><Link to="/pentagon">Pentagon</Link></div>
                <div><Link to="/hexagon">Hexagon</Link></div>
                <div><Link to="/polygon">Polygon</Link></div>
            </div>
        )
    }
}

export default Navbar;