import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import HogCard from './HogCard'


class App extends Component {

  state = {
    hogs: hogs
  }

  sortByName = (event) => {
    const sortedElements = this.state.hogs.sort((a, b) => {
      if ( a.name > b.name ) return 1
      if (a.name < b.name ) return -1
      if (a.name === b.name ) return 0
    })

    this.setState({
      hogs: sortedElements
    })
  }

  sortByWeight = (event) => {
      let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    const sortedElements = this.state.hogs.sort((a, b) => b[weight] - a[weight])
    this.setState({hogs: sortedElements})
  }

  render() {
    console.log(this.state.hogs);
    return (
      <div className="App">
          < Nav sortByWeight={this.sortByWeight}sortByName={this.sortByName}/><br />
        <div>
          <HogContainer hogs={this.state.hogs}/>
        </div>
      </div>
    )
  }
}

export default App;
