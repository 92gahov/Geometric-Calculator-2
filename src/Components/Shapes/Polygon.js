import React from "react";
import polygon from "../img/polygon.PNG"

class Polygon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sideA: "",
            n: "",
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

    changeN = (e) => {
        let nNum = e.target.value;
        this.setState({
            n: nNum
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
        if (this.state.sideA === "" || this.state.n === "") {
            this.setState({
                error: true
            })
            return false
        } else {
            let a = Math.tan(Math.PI / Number(this.state.n));
            let b = 2 * a;
            let apothema = Number(this.state.sideA) / b;
            let polygonFace = (Number(this.state.n) * Number(this.state.sideA) * apothema) / 2;
            let polygonCircumference = Number(this.state.n) * Number(this.state.sideA);
            this.setState({
                face: polygonFace.toFixed(this.state.round),
                circumference: polygonCircumference.toFixed(this.state.round),
                error: false
            })
        }
    };

    reset = (e) => {
        e.preventDefault();
        this.setState({
            sideA: "",
            n: "",
            round: 2,
            face: "",
            circumference: "",
            error: false
        })
    };

    render() {
        return (
            <div className="main">
                <h2>Polygon</h2>
                <div className="shape-main">
                    <div className="shape">
                        <img src={polygon} alt=""></img>
                    </div>
                    <div className="info">
                        <p>P - circumference</p>
                        <p>S - face</p>
                        <p><i>a</i> - sides</p>
                        <p><i>n</i> - number of sides</p>
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
                                <p><i>n</i> = <input type="number"
                                    value={this.state.n}
                                    onChange={this.changeN}></input> <sup>*</sup></p>
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

export default Polygon;