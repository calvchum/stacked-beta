import React from 'react';
import './Herb.css';
import {formatPrice} from '../helpers';

class Herb extends React.Component {
  render(){
    const { details, index } = this.props;
    const title = formatPrice(details.price) + " - " + details.name

    const style = {
      backgroundImage: `url('${details.image}')`
    };

    return (
      <div className="herb">
        <div className="herb-picture" style={style}></div>
        <div className="herb-title">{title}</div>
        <div className="herb-desc">{details.desc}</div>
      </div>
    )
  }
}

export default Herb;