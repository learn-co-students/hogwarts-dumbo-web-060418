import React, { Component } from 'react'



export default class MoreInfo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.hog.greased ? "Greased" : "NonGreased"}</p>
        <p>Highest Medal Achieved: {this.props.hog["highest medal achieved"]} </p>
        <p>'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water':<br /><strong> {this.props.hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</strong> </p>
      </div>
    )
  }
}
