import React, { Component } from 'react';
import './App.scss';

import SelfCareContainer from './components/SelfCareContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <SelfCareContainer />
      </div>
    );
  }
}

export default App;
