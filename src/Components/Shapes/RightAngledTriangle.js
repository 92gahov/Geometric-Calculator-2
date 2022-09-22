import React from "react";
import rightangledtriangle from "../img/right-angled-triangle.PNG";

class RightAngledTriangle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideA: "",
            sideB: "",
            sideC: "",
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

    changeSideB = (e) => {
        let sideBNum = e.target.value;
        this.setState({
            sideB: sideBNum
        })
    };

    changeSideC = (e) => {
        let sideCNum = e.target.value;
        this.setState({
            sideC: sideCNum
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
        if (this.state.sideA === "" || this.state.sideB === "") {
            this.setState({
                error: true
            })
            return false;
        } else {
            this.state.sideC = Math.sqrt(Number(Math.pow(this.state.sideA, 2)) + Number(Math.pow(this.state.sideB, 2))).toFixed(this.state.round);
            let rightAngledTriangleFace = Number((this.state.sideA * this.state.sideB)) / 2;
            let rightAngledTriangleCircumference = Number(this.state.sideA) + Number(this.state.sideB) + Number(this.state.sideC);
            this.setState({
                face: rightAngledTriangleFace.toFixed(this.state.round),
                circumference: rightAngledTriangleCircumference.toFixed(this.state.round),
                error: false
            })
        }
    };

    reset = (e) => {
        e.preventDefault();
        this.setState({
            sideA: "",
            sideB: "",
            sideC: "",
            round: 2,
            face: "",
            circumference: "",
            error: false
        })
    };

    render() {
        return (
            <div className="main">
                <h2>Right-angled triangle</h2>
                <div className="shape-main">
                    <div className="shape">
                        <img src={rightangledtriangle} alt=""></img>
                    </div>
                    <div className="info">
                        <p>P - circumference</p>
                        <p>S - face</p>
                        <p><i>a, b, c</i> - sides</p>
                    </div>
                </div>
                <h3>Calculator</h3>
                {
                    this.state.error && <p className="errMsg">Empty fields * !</p>
                }
                <div className="calculator-main">
                    <form className="form">
                        <div className="form-main">
                            <div className="form-calc">
                                <p><i>a</i> = <input type="number"
                                    value={this.state.sideA}
                                    onChange={this.changeSideA}
                                ></input> <sup>*</sup></p>
                                <p><i>b</i> = <input type="number"
                                    value={this.state.sideB}
                                    onChange={this.changeSideB}
                                ></input> <sup>*</sup></p>
                                <p><i>c</i> = <input type="number"
                                    value={this.state.sideC}
                                    onChange={this.changeSideC}></input></p>
                            </div>
                            <div className="result">
                                <p>Face S = <input type="number"
                                    readOnly
                                    value={this.state.face}
                                ></input></p>
                                <p>Circumference P = <input type="number"
                                    readOnly
                                    value={this.state.circumference}
                                ></input></p>
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

export default RightAngledTriangle;