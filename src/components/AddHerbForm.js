import React from 'react'

class AddHerbForm extends React.Component {
  createHerb(event) {
    event.preventDefault();
    const herb = {
      name: this.name.value,
      price: this.price.value,
      image: this.image.value,
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