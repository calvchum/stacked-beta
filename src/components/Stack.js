import React from 'react';
import './Stack.css';

class Stack extends React.Component {

  renderStack = key => {
    const count = this.props.stack[key];
    const herb = this.props.herbs[key];
    const removeButton = <button onClick={() => this.props.removeFromStack(key)}>&times;</button>

    if(!herb) {
      return <li key={key}>Sorry, {herb ? herb.name : 'herb'} is no longer available! {removeButton}</li>
    }

    const unit = herb.unit 

    return (
      <div key={key}>
        <li>
           {herb.name} {count}{unit} {removeButton}
        </li>
      </div>
    )
  }
	render(){
    const stackId = Object.keys(this.props.stack);
		return(
      <div>
      <h1>my stack</h1>
        {stackId.map(this.renderStack)}
      </div>
		)
	}
}

export default Stack;