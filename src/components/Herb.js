import React from 'react';
import './Herb.css';
import {formatPrice} from '../helpers';

class Herb extends React.Component {
  render(){
    const { details } = this.props;
    const index = this.props.index;
    const title = formatPrice(details.price) + " - " + details.name

    const style = {
      backgroundImage: `url('${details.image}')`
    };

    return (
      <div className="herb">
        <div className="herb-picture" style={style}></div>
        <div className="herb-title">{title}</div>
        <div className="herb-desc">{details.desc}</div>
        <button onClick={() => this.props.addToStack(index)}>Add to stack</button>
        <button onClick={() => {if(window.confirm('Are you sure you wish to delete this item?')) this.props.deleteHerb(index) } }>Delete herb</button>
      </div>
    )
  }
}

export default Herb;