import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import Loading from '../components/Loading';

class App extends Component {

	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then( response => response.json() )
			.then( users => this.setState({ robots: users }) )
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

 	render() {
 		const { searchfield, robots } = this.state;
		const filteredRobots = robots.filter( robot => {
			return (
				robot.name.toLowerCase().includes(searchfield.toLowerCase())
				|| robot.email.toLowerCase().includes(searchfield.toLowerCase())
			)	
		})

		return (!robots.length)
			? <Loading />
			: (
					<div className='tc'>
						<h1 className='f1'>Roboheads</h1>
						<SearchBox searchChange={this.onSearchChange}/>
						<Scroll>
							<CardList robots={filteredRobots} />
						</Scroll>
					</div>
				)
	}
}

export default App;