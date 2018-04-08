import React, { Component } from 'react';

class Loading extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: props.text,
			speed: props.speed,
		}
	}
	componentDidMount() {
		const dots = this.state.text + '...'
		this.interval = window.setInterval( () => {
			return (this.state.text === dots) 
				? this.setState( () => ({ text: this.props.text }))
				: this.setState( (prevState) => ({ text: prevState.text + '.' }))
		}, this.props.speed)
	}
	componentWillUnmount() {
		window.clearInterval(this.interval);
	}
	render() {
		return (
			<h1 className='tc'>
				{this.state.text}
			</h1>
		)
	}
}

Loading.defaultProps = {
	text: 'Loading',
	speed: 300
}

export default Loading;

