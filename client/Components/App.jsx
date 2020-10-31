import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: this.props,
    };
  }

  render() {
    return (
      <div className="app">
        <h1>
          Hello, World!
        </h1>
      </div>
    );
  }
}

export default App;
