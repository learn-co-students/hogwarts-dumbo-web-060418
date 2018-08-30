import React, { Component } from 'react'

class HogCard extends Component {

  state = {
    moreInfo: false,
    isHidden: false
  }

  handleClick = () => {
    this.setState(prevState => ({
      moreInfo: !prevState.moreInfo
    }))
  }

  hideClick = () => {
    this.setState( prevState => ({
      isHidden: !prevState.isHidden
    }))
  }

  render() {
    const name = this.props.hog.name
    let snakeName = name.toLowerCase().split(" ").join("_");
    return (

      <div className="ui four wide column pigTile" onClick={this.handleClick}>
        <button onClick={this.hideClick}>Hide Me</button>
        {!this.state.isHidden &&
        <div>
        <p>{name}</p>
        <img alt={snakeName} src={require(`../hog-imgs/${snakeName}.jpg`)}/>
        {this.state.moreInfo
          ? <div><p>Specialty:{this.props.hog.specialty}</p>
            <p>Greased:{this.props.hog.greased}</p>
            <p>Weight:{this.props.hog.weight}</p>
            <p>Highest Medal:{this.props.hog.highest_medal}</p>
            </div>

          : null}</div>}

      </div>
    )
  }
}


export default HogCard
