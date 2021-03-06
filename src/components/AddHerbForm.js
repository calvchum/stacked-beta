import React from 'react';
import './AddHerbForm.css';

class AddHerbForm extends React.Component {
  createHerb(event) {
    event.preventDefault();
    const herb = {
      name: this.name.value,
      price: parseFloat(this.price.value),
      image: this.image.value,
      dose: this.dose.value,
      unit: this.unit.value,
      desc: this.desc.value,
    }
    this.props.addHerb(herb);
    this.herbForm.reset();
  }
  render(){
    return (
      <div>
        <form ref={(input) => this.herbForm = input} className="herb-edit" onSubmit={(e) => this.createHerb(e)}>
          <input ref={(input) => this.name = input} type="text" placeholder="Herb Name"/>
          <input type="text" ref={(input) => this.dose = input} placeholder="Enter dose"/>
          <select ref={(input) => this.unit = input } name="unit">
            <option value="mg">mg</option>
            <option value="IU">IU</option>
          </select>
          <input ref={(input) => this.price = input} type="text" placeholder="Price"/>
          <input ref={(input) => this.image = input} type="text" placeholder="Herb Image"/>
          <textarea ref={(input) => this.desc = input} type="text" placeholder="Herb Desc" cols="60" rows="20"></textarea>
          <button type="submit">+ Add Herb</button>
        </form>
        <button onClick={this.props.loadSamples}>Load Sample Herbs</button>
      </div>
    )
  }
}

export default AddHerbForm;