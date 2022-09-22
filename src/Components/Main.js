import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./Navbar";
import Footer from "./Footer";
import Circle from './Shapes/Circle';
import Triangle from './Shapes/Triangle';
import RightAngledTriangle from './Shapes/RightAngledTriangle';
import Square from './Shapes/Square';
import Rectangle from './Shapes/Rectangle';
import Rhombus from './Shapes/Rhombus';
import Parallelogram from './Shapes/Parallelogram';
import Trapezoid from './Shapes/Trapezoid';
import Pentagon from './Shapes/Pentagon';
import Hexagon from './Shapes/Hexagon';
import Polygon from './Shapes/Polygon';

class Main extends React.Component {
    render() {
        return (
            <Router>
                <div className='App'>
                    <Navbar />
                    <div className='content'>
                        <Switch>
                            <Route exact path="/" component={Circle}></Route>
                            <Route path="/triangle" component={Triangle}></Route>
                            <Route path="/right_angled_triangle" component={RightAngledTriangle}></Route>
                            <Route path="/square" component={Square}></Route>
                            <Route path="/rectangle" component={Rectangle}></Route>
                            <Route path="/rhombus" component={Rhombus}></Route>
                            <Route path="/parallelogram" component={Parallelogram}></Route>
                            <Route path="/trapezoid" component={Trapezoid}></Route>
                            <Route path="/pentagon" component={Pentagon}></Route>
                            <Route path="/hexagon" component={Hexagon}></Route>
                            <Route path="/polygon" component={Polygon}></Route>
                            <Route path="*" component={Circle}></Route>
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
};

export default Main;