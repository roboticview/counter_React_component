import React, { Component } from 'react';
class Counter extends Component {
    constructor(){
        super();
        this.state = { 
            counterValue : 0,
         }
         this.handleIncrease = this.handleIncrease.bind(this)
         this.handleDecrease = this.handleDecrease.bind(this)
    }
    handleIncrease(){
        this.changeColor();
        this.setState({counterValue : this.state.counterValue +1 });

    }
    handleDecrease(){
        this.setState({counterValue : this.state.counterValue -1 });
        this.changeColor();
    }
    changeColor(){
        let badgeColor = "text-bg-success";
        badgeColor = this.state.counterValue >= 0 ?  "text-bg-success" : "text-bg-danger";
        return badgeColor
    }
    render() { 
        return (
            <div>
                <h1>
                <span className={`badge ${this.changeColor()}`}>
                    {this.state.counterValue}
                </span>
                </h1>
                <p>
                <button 
                onClick={this.handleIncrease}
                type="button" 
                className="btn m-2 btn-success">
                    Increase</button>
                <button 
                    onClick={this.handleDecrease}
                    type="button" 
                    className="btn m-2 btn-danger">
                    Decrease</button>
                </p>
            </div>
        );
    }
}
 
export default Counter;