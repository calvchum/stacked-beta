import React from 'react'

class ListHerbs extends React.Component {

  handleChange = e => {
    const search = e.target.value;
    this.props.updateSearch(search);
  }

  renderList = key => {
    const dataItems = this.props.data[key].items
    const filteredItems = dataItems.filter(
        (product) => {
          return product.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1;
        }
      );

    if (this.props.search !== '') {
      return (
        <ul key={key}>
          {filteredItems.map((e, index)=>{
            return <li key={index}>{e.price} - {e.title}</li>          
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