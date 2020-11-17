import React, { Component } from "react";

export class Dice extends Component {
  constructor(props) {
    super(props);
    console.log(props.data);
  }
  render() {
    return (
      <div className='Dice-main'>
        <i
          className={`Dice fas fa-dice-${this.props.face} ${
            this.props.face ? "rolling" : ""
          }`}
        ></i>
      </div>
    );
  }
}

export default Dice;
