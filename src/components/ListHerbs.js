import React from 'react'

class ListHerbs extends React.Component {

  handleChange = e => {
    const search = e.target.value;
    this.props.updateSearch(search);
  }

  renderList = type => {
    const dataItems = this.props.data[type].items
    const filteredItems = dataItems.filter(
        (product) => {
          return product.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
        }
      );

    if (this.props.search !== '') {
      return (
        <ul key={type}>
          {filteredItems.map((e, index)=>{
            const itemIndex = index
            const itemKey = `${type}${index}` // break this up and send type and index 
            const button = <button onClick={ () => this.props.addToStackDB(type, index, dataItems[index])}>Add to stack</button>
            return <li key={index}>{e.price} - {e.title} {button} {type} {index}</li>          
          })}
        </ul>
      )
    }
  }

  render() {
    const dataId = Object.keys(this.props.data)

    return (
      <div>
        <input type="text" className="searchbar" placeholder="Search..." onChange={(e) => this.handleChange(e)} defaultValue=''/>
        <ul>
          {dataId.map(this.renderList)}
        </ul>
      </div>
    )
  }
}

export default ListHerbs;