import React, { Component } from 'react'

export default class HogCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showing: true
    }
  }

  handleClick = () => {
    this.setState((prevState) => {
        return {...prevState,
          showing: !prevState.showing,
        }
      })
  }

  showDetails= () => {
    return (
      <div>
        <b>Specialty:</b> {this.props.specialty}<br />
        <b>Hog-to-Fridge Weight:</b> {this.props.fridge}<br />
        <b>Highest Medal:</b> {this.props.medal}
      </div>
    )
  }


render() {
  const { showing } = this.state

  let hogImage = this.props.name
  .split(' ')
  .join('_')
  .concat('.jpg')
  .toLowerCase()

    return(

      <div className={"pigTile"} key={this.props.name}>

      <h3><i>{this.props.name}</i></h3>
      <img src={require(`../hog-imgs/${hogImage}`)} alt="" /><br />
      <div>
          <button onClick={this.handleClick}>Show Details</button>

          { showing ? null : this.showDetails() }
      </div>
      </div>
    )
  }
}
