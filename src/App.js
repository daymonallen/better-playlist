import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff';
let defaultStyle = {color: defaultTextColor};

class Aggregate extends Component {
  render() {
    return(
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: '#F8E796'}}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div>
        <img/>
        <input type="text" placeholder="Search this moff..." style={{backgroundColor: '#E2E1DB'}}/>
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: '25%'}}>
        <img />
        <h3>Playlist</h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1 style={{color: '#5DB9FA'}}>Superior Playlists</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
