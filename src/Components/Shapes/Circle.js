import React from "react";
import circle from "../img/circle.PNG";

class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radius: "",
            diameter: "",
            round: 2,
            face: "",
            circumference: "",
            error: false
        }
    };

    changeRadius = (e) => {
        let raidusNum = e.target.value;
        this.setState({
            radius: raidusNum
        })
    };

    changeDiameter = (e) => {
        let diameterNum = e.target.value;
        this.setState({
            diameter: diameterNum
        })
    };

    changeRound = (e) => {
        let roundNum = e.target.value;
        this.setState({
            round: roundNum
        })
    };

    calculate = (e) => {
        e.preventDefault();
        if (this.state.radius === "") {
            this.setState({
                error: true
            })
            return false;
        } else {
            this.state.diameter = 2 * Number(this.state.radius);
            let circleFace = Number(Math.PI * (Math.pow(this.state.radius, 2)));
            let circleCircumference = Number(2 * (Math.PI * (this.state.radius)));
            this.setState({
                face: circleFace.toFixed(this.state.round),
                circumference: circleCircumference.toFixed(this.state.round),
                error: false
            })
        }
    };

    reset = (e) => {
        e.preventDefault();
        this.setState({
            radius: "",
            diameter: "",
            round: 2,
            face: "",
            circumference: "",
            error: false
        })
    }

    render() {
        return (
            <div className="main">
                <h2>Circle</h2>
                <div className="shape-main">
                    <div className="shape">
                        <img src={circle} alt=""></img>
                    </div>
                    <div className="info">
                        <p>P - circumference</p>
                        <p>S - face</p>
                        <p><i>r</i> - radius</p>
                        <p><i>d</i> - diameter</p>
                    </div>
                </div>
                <h3>Calculator</h3>
                {
                    this.state.error && <p className="errMsg">Empty field * !</p>
                }
                <div className="calculator-main">
                    <form className="form">
                        <div className="form-main">
                            <div className="form-calc">
                                <p><i>r</i> = <input type="number"
                                    value={this.state.radius}
                                    onChange={this.changeRadius}
                                ></input> <sup>*</sup></p>
                                <p><i>d</i> = <input type="number"
                                    value={this.state.diameter}
                                    onChange={this.changeDiameter}></input></p>
                            </div>
                            <div className="result">
                                <p>Face S = <input type="number"
                                    readOnly
                                    value={this.state.face}></input></p>
                                <p>Circumference P = <input type="number"
                                    readOnly
                                    value={this.state.circumference}></input></p>
                            </div>
                        </div>
                        <div className="round">
                            <p>Rounded up <input type="number"
                                value={this.state.round}
                                onChange={this.changeRound}
                                min="1"></input> sign after the decimal point.</p>
                        </div>
                        <button onClick={this.calculate}>Calculate</button>
                        <button onClick={this.reset}>Reset</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default Circle;