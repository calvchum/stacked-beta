import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Herb from './components/Herb';
import sampleHerbs from './sample-herbs.js'
import AddHerbForm from './components/AddHerbForm';

class App extends Component {
  state = {
    herbs: sampleHerbs,
  }

  addHerb = herb => {
    const herbs = {...this.state.herbs };
    herbs[`herb${Date.now()}`] = herb;
    this.setState({ herbs });
  }

  render() {
    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="herbs">
              {
                Object
                  .keys(this.state.herbs)
                  .map(key => <Herb key={key} index={key} details={this.state.herbs[key]}/>)
              }
          </div>
        </div>
        <div className="map">
        <AddHerbForm addHerb={this.addHerb}/>
        </div>
      </div>

    );
  }
}

export default App;
