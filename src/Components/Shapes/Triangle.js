import React from "react";
import triangle from "../img/triangle.PNG"

class Triangle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideA: "",
            sideB: "",
            sideC: "",
            hA: "",
            round: 2,
            face: "",
            circumference: "",
            error: false
        }
    };

    channgeSideA = (e) => {
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

    changeHA = (e) => {
        let hANum = e.target.value;
        this.setState({
            hA: hANum
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
        if (this.state.sideA === "" || this.state.sideB === "" || this.state.sideC === "" || this.state.hA === "") {
            this.setState({
                error: true
            })
            return false;
        } else {
            let triangleFace = (Number(this.state.sideA) * Number(this.state.hA)) / 2;
            let triangleCircumference = Number(this.state.sideA) + Number(this.state.sideB) + Number(this.state.sideC);
            this.setState({
                face: triangleFace.toFixed(this.state.round),
                circumference: triangleCircumference.toFixed(this.state.round),
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
            hA: "",
            round: 2,
            face: "",
            circumference: "",
            error: false
        })
    };

    render() {
        return (
            <div className="main">
                <h2>Triangle</h2>
                <div className="shape-main">
                    <div className="shape">
                        <img src={triangle} alt=""></img>
                    </div>
                    <div className="info">
                        <p>P - circumference</p>
                        <p>S - face</p>
                        <p><i>a, b, c</i> - sides</p>
                        <p><i>h<sub>a</sub></i> - height of side <i>a</i></p>
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
                                    onChange={this.channgeSideA}
                                ></input> <sup>*</sup></p>
                                <p><i>b</i> = <input type="number"
                                    value={this.state.sideB}
                                    onChange={this.changeSideB}
                                ></input> <sup>*</sup></p>
                                <p><i>c</i> = <input type="number"
                                    value={this.state.sideC}
                                    onChange={this.changeSideC}
                                ></input> <sup>*</sup></p>
                                <p><i>h<sub>a</sub></i> = <input type="number"
                                    value={this.state.hA}
                                    onChange={this.changeHA}
                                ></input> <sup>*</sup></p>
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
                                onChange={this.changeRound} min="1"></input> sign after the decimal point.</p>
                        </div>
                        <button onClick={this.calculate}>Calculate</button>
                        <button onClick={this.reset}>Reset</button>
                    </form>
                </div>
            </div>
        )
    }
};

export default Triangle;