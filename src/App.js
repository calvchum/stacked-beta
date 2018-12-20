import React, { Component } from 'react';
import './App.css';
import Herb from './components/Herb';
import Stack from './components/Stack';
import sampleHerbs from './sample-herbs.js'
import AddHerbForm from './components/AddHerbForm';
import Navbar from './components/Navbar';
import base from './base';

class App extends Component {
  constructor() {
    super();

    this.loadSamples = this.loadSamples.bind(this);
    this.deleteHerb = this.deleteHerb.bind(this);
    this.addToStack = this.addToStack.bind(this);
    this.removeFromStack = this.removeFromStack.bind(this);
  }


  state = {
    herbs: {},
    stack: {},
  }

  componentDidMount() {
    this.herbsRef = base.syncState('herbs', {
      context: this,
      state: 'herbs'
    });
    
    this.stackRef = base.syncState('stack', {
    context: this,
    state: 'stack'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.stackRef);
    base.removeBinding(this.herbsRef);
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

  addToStack(key) {
    console.log(`${key} added to stack`);
    const stack = {...this.state.stack};
    stack[key] = stack[key] + 1 || 1;
    this.setState({ stack });
  }

  removeFromStack = key => {
    const stack = {...this.state.stack};
    stack[key] = null;
    this.setState({ stack });
    console.log(`${key} removed from stack`);
  }

  loadSamples() {
    this.setState({
      herbs: sampleHerbs
    });
  }

  render() {
    return (
      <div>
        <Navbar/>
        <div className="app">
          <div className="main">
            <div className="search">
            </div>
            <div className="herbs">
                {
                  Object
                    .keys(this.state.herbs)
                    .map(key => <Herb key={key} index={key} details={this.state.herbs[key]} deleteHerb={this.deleteHerb} addToStack={this.addToStack}/>)
                }
            </div>
          </div>
          <div className="map">
          <AddHerbForm loadSamples={this.loadSamples} addHerb={this.addHerb}/>
          <Stack 
            herbs={this.state.herbs}
            stack={this.state.stack}
            removeFromStack={this.removeFromStack}
           />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
