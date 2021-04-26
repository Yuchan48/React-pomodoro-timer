import React from "react";

export default class BreakLength extends React.Component {
  render() {
    return (
      <div id="break">
        <p id="break-label">Break Length</p>
        <div id="br-buttons">
          <div id="break-decrement" onClick={this.props.brDec}>
            <i class="fa fa-minus fa-lg" aria-hidden="true"></i>
          </div>
          <p id="break-length">{this.props.breakDef}</p>
          <div id="break-increment" onClick={this.props.brInc}>
            <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}
