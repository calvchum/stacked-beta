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
          <td style={style} className="row-image-style"></td>
          <td className="stack-table-name">{herb.name}</td>
          <td>{count}{unit}{removeButton}</td>
          <td>{herb.desc}</td>
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
             <th className="row-image">Image</th>
              <th className="row-name">Name</th>
              <th className="row-dosage">Dosage</th>
              <th className="row-desc">Description</th>
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