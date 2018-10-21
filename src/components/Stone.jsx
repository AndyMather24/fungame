import React from 'react';

const Stone = (props) => {
  console.log(props)
  return(
    <div>
      <div className="grid-item" onClick={()=>props.handleClick(props.index)}>
      <p>
        {props.stone}
      </p>
      </div>
    </div>
  )
}
export default Stone;