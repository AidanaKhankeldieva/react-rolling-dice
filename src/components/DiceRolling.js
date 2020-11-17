import React, { Component } from "react";
import Dice from "./Dice";

class DiceRolling extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor() {
    super();
    this.state = {
      dice1: "one",
      dice2: "two",
      isRolling: false,
    };
  }

  roll = () => {
    console.log(this.state.dice);
    const dice1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const dice2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    //set state
    this.setState({ dice1, dice2, isRolling: true });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  //wait one second and set rolling to false

  render() {
    console.log(this.state.dice);
    return (
      <div>
        <Dice face={this.state.dice1} rolling={this.state.isRolling} />
        <Dice face={this.state.dice2} rolling={this.state.isRolling} />
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

export default DiceRolling;
