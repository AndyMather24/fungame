import React, { Component } from 'react';

const Grid = (props) => {
  return (
    <div className="grid-item" onClick={() => props.handleClick(props.index)}>
      <p>
        {props.stone}
      </p>
    </div>
  );
};

export default Grid