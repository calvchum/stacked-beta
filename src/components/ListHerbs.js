import React from 'react'

class ListHerbs extends React.Component {

  renderList = key => {
    const dataItems = this.props.data[key].items
    
    return (
      <ul key={key}>
        {dataItems.map((e, index)=>{
          return <li key={index}>{e.price} - {e.title}</li>          
        })}
      </ul>
    )
    

    // return(
    //   <p>hi</p>)
  }

  render() {
    const dataId = Object.keys(this.props.data)

    return (
      <div>
        <input type="text" className="searchbar" value={(search) => {this.searchResults(search)}}/>
        <ul>
          {dataId.map(this.renderList)}
        </ul>
      </div>
    )
  }
}

export default ListHerbs;