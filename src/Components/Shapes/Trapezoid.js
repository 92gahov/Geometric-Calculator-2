import React from "react";
import trapezoid from "../img/trapezoid.PNG";

class Trapezoid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideA: "",
            sideB: "",
            sideC: "",
            sideD: "",
            h: "",
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

    changeSideD = (e) => {
        let sideDNum = e.target.value;
        this.setState({
            sideD: sideDNum
        })
    };

    changeH = (e) => {
        let hNum = e.target.value;
        this.setState({
            h: hNum
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
        if (this.state.sideA === "" || this.state.sideB === "" || this.state.sideC === "" || this.state.sideD === "" || this.state.h === "") {
            this.setState({
                error: true
            })
            return false;
        } else {
            let trapezoidFace = ((Number(this.state.sideA) + Number(this.state.sideC)) * Number(this.state.h)) / 2;
            let trapezoidCircumference = Number(this.state.sideA) + Number(this.state.sideB) + Number(this.state.sideC) + Number(this.state.sideD);
            this.setState({
                face: trapezoidFace.toFixed(this.state.round),
                circumference: trapezoidCircumference.toFixed(this.state.round),
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
            sideD: "",
            h: "",
            round: 2,
            face: "",
            circumference: "",
            error: false
        })
    };

    render() {
        return (
            <div className="main">
                <h2>Trapezoid</h2>
                <div className="shape-main">
                    <div className="shape">
                        <img src={trapezoid} alt=""></img>
                    </div>
                    <div className="info">
                        <p>P - circumference</p>
                        <p>S - face</p>
                        <p><i>a, b, c, d</i> - sides</p>
                        <p><i>h</i> - height</p>
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
                                    onChange={this.changeSideA}></input> <sup>*</sup></p>
                                <p><i>b</i> = <input type="number"
                                    value={this.state.sideB}
                                    onChange={this.changeSideB}></input> <sup>*</sup></p>
                                <p><i>c</i> = <input type="number"
                                    value={this.state.sideC}
                                    onChange={this.changeSideC}></input> <sup>*</sup></p>
                                <p><i>d</i> = <input type="number"
                                    value={this.state.sideD}
                                    onChange={this.changeSideD}></input> <sup>*</sup></p>
                                <p><i>h</i> = <input type="number"
                                    value={this.state.h}
                                    onChange={this.changeH}></input> <sup>*</sup></p>
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

export default Trapezoid;