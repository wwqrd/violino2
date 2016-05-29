import React from 'react';
import ReactDOM from 'react-dom';

class Violino extends React.Component {
  render() {
    return (
      <div>
        <h1>Violino</h1>
      </div>
    );
  }
}

ReactDOM.render(<Violino/>, document.getElementById('root'));
