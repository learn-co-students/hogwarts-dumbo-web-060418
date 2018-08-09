import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'

class App extends Component {

  state = {
    hogs: [...hogs],
    greased: false

  }

  filterHogs = () => {
    return hogs.filter(hog => hog.greased === true)
  }

  handleGreaseStatus = () => {
    let filtered = (this.state.greased ? hogs : this.filterHogs())

    this.setState(prevState => {
      return {
        greased: !prevState.greased,
        hogs: filtered
      }
    })
  }

  changeOrderBy = (string) => {
    if (string === 'name') {
      this.setState(prevState => {
        let sorted = prevState.hogs.sort((hogA, hogB) => {
          if (hogA.name < hogB.name) {
            return -1
          } else if (hogA.name > hogB.name) {
            return 1
          } else {
            return 0
          }
        })
        return {hogs: sorted}
      })
    } else if (string === 'weight') {
      this.setState(prevState => {
        let weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
        let sorted = prevState.hogs.sort((hogA, hogB) => {
          if (hogA[weight] < hogB[weight]) {
            return -1
          } else if (hogA[weight]> hogB[weight]) {
            return 1
          } else {
            return 0
          }
        })
        return {hogs: sorted}
      })
    }
  }

  render() {
    return (
      <div className="App">
          <Nav onChangeOrder={this.changeOrderBy} onChangeGreaseStatus={this.handleGreaseStatus} />
          <HogContainer hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
