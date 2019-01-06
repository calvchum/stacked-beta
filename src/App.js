import React, { Component } from 'react';
import './App.css';
import Herb from './components/Herb';
import Stack from './components/Stack';
import ListHerbs from './components/ListHerbs';
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
    this.updateSearch = this.updateSearch.bind(this);
  }


  state = {
    herbs: {},
    stack: {},
    search: '',
    data: {},
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

    fetch('http://localhost:5000/adaptogen')
      .then(res => res.json())
      .then(data => this.addToDatabase(data))

    fetch('http://localhost:5000/ayuverdic')
      .then(res => res.json())
      .then(data => this.addToDatabase(data))
  }

  updateSearch = input => {
    const search = {...this.state.search}
    this.setState({ search: input })
  }


  componentWillUnmount() {
    base.removeBinding(this.stackRef);
    base.removeBinding(this.herbsRef);
  }

  addToDatabase = key => {
    const data = {...this.state.data}
    const dataKey = Object.keys(key)
    data[dataKey] = key[dataKey];
    this.setState({data});
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
    const details = this.state.herbs[key];
    const dosage = details.dose + details.unit;
    console.log(`${key} added to stack has a dose of ${dosage}`);
    const stack = {...this.state.stack};
    stack[key] = stack[key] + parseFloat(details.dose) || parseFloat(details.dose);
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

  searchResults = input => {
    // const search = {...this.state.search},
    
  }

  render() {
    return (
      <div>
        <Stack 
          herbs={this.state.herbs}
          stack={this.state.stack}
          removeFromStack={this.removeFromStack}
         />
        <Navbar/>
        <ListHerbs
          data={this.state.data}
          updateSearch={this.updateSearch}
          />
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
