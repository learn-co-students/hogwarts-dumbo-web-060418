import React, {Component} from 'react'
import MoreInfo from './MoreInfo'

export default class HogCard extends Component {
  state = {
    moreInfo: false,
    hidden: false
  }

  handleInfoClick = (event) => {
    this.setState(prevState => {
      return {moreInfo: !prevState.moreInfo}
    })
  }

  handleHideClick = (event) => {
    this.setState({hidden: true})
  }

  renderCard = () => {
    let hogInfo = this.props.hog;
    let snakeName = hogInfo.name.toLowerCase().split(" ").join("_");

    return (
      <div className="ui four wide column pigTile">
        <img src={require(`../hog-imgs/${snakeName}.jpg`)}/>
        <h3>{hogInfo.name}</h3>
        <p>Specialty: {hogInfo.specialty}</p>
        <button onClick={this.handleInfoClick}>More Info</button>
        <button onClick={this.handleHideClick}>Hide Me</button>
        {this.state.moreInfo ? <MoreInfo hog={hogInfo} /> : null}
      </div>
    )
  }

  render(){
    return (
      (this.state.hidden) ? null : this.renderCard()
    )
  }
}
