import React from "react";
import hexagon from "../img/hexagon.PNG";

class Hexagon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideA: "",
            round: 2,
            face: "",
            circumference: "",
            error: false
        }
    };

    changeSideA = (e) => {
        let sideANum = e.target.value;
        this.setState({
            sideA: sideANum
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
        if (this.state.sideA === "") {
            this.setState({
                error: true
            })
            return false;
        } else {
            let a = (3 * Math.sqrt(3)) / 2;
            let hexagonFace = a * Math.pow(Number(this.state.sideA), 2);
            let hexagonCircumference = 6 * Number(this.state.sideA);
            this.setState({
                face: hexagonFace.toFixed(this.state.round),
                circumference: hexagonCircumference.toFixed(this.state.round),
                error: false
            })
        }
    };

    reset = (e) => {
        e.preventDefault();
        this.setState({
            sideA: "",
            round: 2,
            face: "",
            circumference: "",
            error: false
        })
    };

    render() {
        return (
            <div className="main">
                <h2>Hexagon</h2>
                <div className="shape-main">
                    <div className="shape">
                        <img src={hexagon} alt=""></img>
                    </div>
                    <div className="info">
                        <p>P - circumference</p>
                        <p>S - face</p>
                        <p><i>a</i> - sides</p>
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
                                <p><i>a</i> = <input type="number"
                                    value={this.state.sideA}
                                    onChange={this.changeSideA}></input> <sup>*</sup></p>
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
                            <p>Rounded up <input type="number" min="1"
                                value={this.state.round}
                                onChange={this.changeRound}></input> sign after the decimal point.</p>
                        </div>
                        <button onClick={this.calculate}>Calculate</button>
                        <button onClick={this.reset}>Reset</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default Hexagon;