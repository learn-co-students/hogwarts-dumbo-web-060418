import React, {Component} from 'react'
import HogCard from './HogCard'

export default class HogContainer extends Component {
  makeHogCards = () => {
    return this.props.hogs.map(hog => {
      return <HogCard hog={hog}/>
    })
  }

  render(){
    return (
      <div className="ui grid container indexWrapper"> {this.makeHogCards()} </div>
    )
  }
}
