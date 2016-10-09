require('../styles/style.sass')

import React from 'react'
import ReactDOM from 'react-dom'

console.log("sup, we doing some webpack")

const Hi = React.createClass({
  render() {
    return (
      <div>
        <h1>Yo, sup</h1>
      </div>
    );
  }
});

ReactDOM.render(<Hi />, document.getElementById('content'))