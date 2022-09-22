import React from "react";
import parallelogram from "../img/paralleogram.PNG";

class Parallelogram extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideA: "",
            sideB: "",
            hA: "",
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
        if (this.state.sideA === "" || this.state.sideB === "" || this.state.hA === "") {
            this.setState({
                error: true
            })
            return false;
        } else {
            let parallelogramFace = Number(this.state.sideA) * Number(this.state.hA);
            let parallelogramCircumference = 2 * (Number(this.state.sideA) + Number(this.state.sideB));
            this.setState({
                face: parallelogramFace.toFixed(this.state.round),
                circumference: parallelogramCircumference.toFixed(this.state.round),
                error: false
            })
        }
    };

    reset = (e) => {
        e.preventDefault();
        this.setState({
            sideA: "",
            sideB: "",
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
                <h2>Parallelogram</h2>
                <div className="shape-main">
                    <div className="shape">
                        <img src={parallelogram} alt=""></img>
                    </div>
                    <div className="info">
                        <p>P - circumference</p>
                        <p>S - face</p>
                        <p><i>a, b</i> - sides</p>
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
                                    onChange={this.changeSideA}></input> <sup>*</sup></p>
                                <p><i>b</i> = <input type="number"
                                    value={this.state.sideB}
                                    onChange={this.changeSideB}></input> <sup>*</sup></p>
                                <p><i>h<sub>a</sub></i> = <input type="number"
                                    value={this.state.hA}
                                    onChange={this.changeHA}></input> <sup>*</sup></p>
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

export default Parallelogram;