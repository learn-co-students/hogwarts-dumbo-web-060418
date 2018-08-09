import React, { Component } from 'react'
import HogCard from './HogCard'


export default class HogContainer extends Component {



    render() {
      const hogElements = this.props.hogs.map(hog => <HogCard name={hog.name} specialty={hog.specialty} medal={hog['highest medal achieved']} fridge={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}/>
            )
      return (
        <div className={"ui grid container"} key="hogs">
        {hogElements}
        </div>
      )
    }
}
