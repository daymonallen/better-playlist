import React, { Component } from 'react';
import './App.css';

let defaultTextColor = '#fff';
let defaultStyle = {color: defaultTextColor};


let fakeServerData = {
  user: {
    name: 'Motherfucker Jones',
    playlists: [
      {
        name: 'Party',
        songs: [
        {name: 'songA', duration: 1234},
        {name:'songB', duration: 1234},
        {name:'songC', duration: 1234}]
      },
      { 
        name: 'Soundtrack',
        songs: [
        {name: 'songD', duration: 1234},
        {name:'songE', duration: 1234},
        {name:'songF', duration: 1234}]
      },
      { 
        name: 'Naughty',
        songs: [
        {name: 'songG', duration: 1234},
        {name:'songH', duration: 1234},
        {name:'songI', duration: 1234}]
      },
      { 
        name: 'Holiday',
        songs: [
        {name: 'songJ', duration: 1234},
        {name:'songK', duration: 1234},
        {name:'songL', duration: 1234}]
      },
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return(
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: '#F8E796'}}>{this.props.playlists && 
          this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return(
      <div style={{width: '40%', display: 'inline-block'}}>
        <h2 style={{color: '#F8E796'}}>{Math.round(totalDuration/60)} Minutes runtime</h2>
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
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount(){
    setTimeout(() => {
    this.setState({serverData: fakeServerData});
  }, 2000)
  }
  render() {
    return(
      <div className="App">
          {this.state.serverData.user ?
        <div> 
          <h1 style={{color: '#5DB9FA'}}>
          {this.state.serverData.user.name} Playlists
          </h1>}
      <PlaylistCounter playlists={this.state.serverData.user.playlists} />
      <HoursCounter playlists={this.state.serverData.user.playlists} />
      <Filter />
      <Playlist />
      <Playlist />
      <Playlist />
      <Playlist />
      </div>: <h1 style={{color: 'whitesmoke'}}>
        Loading this moff ....</h1>
      }
      </div>
    );
  }
}

export default App;
