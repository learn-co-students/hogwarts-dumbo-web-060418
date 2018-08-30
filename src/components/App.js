import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogsContainer from './HogsContainer'
import hogs from '../porkers_data';

class App extends Component {


  state = {
    hogs: hogs

  }

  handleChange = (e) => {
    switch (e.target.value) {
      case "Name":
        this.setState(prevState =>({
          hogs: prevState.hogs.sort((hogA, hogB) => {
            return hogA.name.localeCompare(hogB.name)
          })
        }))
        break;
      case "Weight":
        this.setState(prevState => ({
          hogs: prevState.hogs.sort((hogA, hogB) => {
            return hogA.weight - hogB.weight
          })
        }))
        break;
      default:
        this.setState({
          hogs: hogs
        })
    }
  }



  render() {
    console.log(this.state.hogs)
    return (
      <div className="App">
          < Nav />
          <select onChange={this.handleChange}>
            <option default>Filter By</option>
            <option>Name</option>
            <option>Weight</option>
          </select>
          <HogsContainer hogs={this.state.hogs}  />
      </div>
    )
  }
}

export default App;
