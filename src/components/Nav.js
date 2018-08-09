import piggy from '../porco.png'
import React, { Component } from 'react'

class Nav extends Component {

	handleClick = (event) => {
		event.preventDefault()
		if (event.target.className === 'name') {
			this.props.sortByName()
		} else if (event.target.className === 'weight') {
			this.props.sortByWeight()
		}
	}

	render() {
		console.log(this.props);
		return (
			<div>

			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
						<img src={piggy} className="App-logo" alt="piggy" />
					</a>
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
			</div>
		<hr />
			<button className="name" onClick={this.handleClick}>Sort by Name</button>
			<button className="weight" onClick={this.handleClick}>Sort by Weight</button>

			</div>
		)
	}
}

export default Nav
