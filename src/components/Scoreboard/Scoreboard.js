import React from "react";

const Scoreboard = props => (
  <div>
    <h3>
      Score: {props.score} <br/>
      Top Score: {props.topScore}
    </h3>
  </div>
);

export default Scoreboard;