import React from "react";

export class SessionLength extends React.Component {
  render() {
    return (
      <div id="session">
        <p id="session-label">Session Length</p>
        <div id="se-buttons">
          <div id="session-decrement" onClick={this.props.seDec}>
            <i class="fa fa-minus fa-lg" aria-hidden="true"></i>
          </div>
          <p id="session-length">{this.props.sessionDef}</p>
          <div id="session-increment" onClick={this.props.seInc}>
            <i class="fa fa-plus fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    );
  }
}
