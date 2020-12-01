import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Test extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	async componentDidMount() {

		let url = 'http://localhost:5000/summary';



		let response = await fetch(url);
		let cvs = await response.json();

		let cv = cvs.map((cv, index) => {
			return (
				<div key={index}>
					<h3>{cv.name}</h3>
					<p>{cv.firstname}</p>
					<h2>{cv.email}</h2>
				</div>
			)
		})
		this.setState({posts: cv});
	}

	render() {
		return (
			<div>
				{this.state.posts}
				<Button variant="contained" color="primary">
      				Material 
    			</Button>
			</div>
		)
	}
}

export default Test;