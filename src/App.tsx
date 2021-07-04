import React from 'react';
import './App.css';
import MainPageWrapper from './main-container-wrapper/main-page-wrapper';

class App extends React.PureComponent {
  render() {
    return (
      <div className="main-container">
        <MainPageWrapper />
      </div>
    );
  }
}

export default App;
