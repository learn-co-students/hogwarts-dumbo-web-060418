import React, {Component} from 'react'

export default class FilterBar extends Component {

  handleChange = (event) => {
    this.props.onChangeOrder(event.target.value)
  }

  handleGreaseChange = (e) => {
    this.props.onChangeGreaseStatus()
  }

  render() {
    return (
      <div className="filterWrapper">
        <select onChange={this.handleChange}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>

        Show Only Greased: <input type="checkbox" onChange={this.handleGreaseChange} />

        <button>Show Hidden</button>
      </div>
    )
  }
}
