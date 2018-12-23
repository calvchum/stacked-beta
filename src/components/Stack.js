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
    const style = {
      backgroundImage: `url('${herb.image}')`,
    };

    return (
        <tr key={key}>
          <th style={style} className="stack-table-image"></th>
          <th>{herb.name}</th>
          <td>{count}{unit}{removeButton}</td>
        </tr>        
    )
  }
	render(){
    const stackId = Object.keys(this.props.stack);

		return(
      <div>
      <h1>my stack</h1>
        <table className="stack-table">
          <thead>
            <tr>
             <th>Image</th>
              <th>Name</th>
              <th>Dosage</th>
            </tr>
          </thead>
          <tbody>
            {stackId.map(this.renderStack)}
          </tbody>
        </table>
      </div>
		)
	}
}

export default Stack;