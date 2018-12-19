import React, { Component } from 'react';
import './App.css';
import Herb from './components/Herb';
import sampleHerbs from './sample-herbs.js'
import AddHerbForm from './components/AddHerbForm';
import base from './base';

class App extends Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.deleteHerb = this.deleteHerb.bind(this);
  }


  state = {
    herbs: {},
  }

  componentDidMount() {
    this.ref = base.syncState('herbs', {
      context: this,
      state: 'herbs'
    });
  }

  addHerb = herb => {
    const herbs = {...this.state.herbs };
    herbs[`herb${Date.now()}`] = herb;
    this.setState({ herbs });
  }

  deleteHerb(key) {
    console.log(key);
    const herbs = {...this.state.herbs};
    herbs[key] = null;
    this.setState({ herbs });
  }

  loadSamples() {
    this.setState({
      herbs: sampleHerbs
    });
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
                  .map(key => <Herb key={key} index={key} details={this.state.herbs[key]} deleteHerb={this.deleteHerb}/>)
              }
          </div>
        </div>
        <div className="map">
        <AddHerbForm loadSamples={this.loadSamples} addHerb={this.addHerb}/>
        </div>
      </div>

    );
  }
}

export default App;
