import React from 'react';
import ReactDOM from 'react-dom';


function Car(props) {
  return (
    <h2>Hi, I am { props.color } a Car!</h2>
    );
}

ReactDOM.render(<Car color="yellow" />, document.getElementById('root'));