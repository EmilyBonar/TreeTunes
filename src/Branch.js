import React from "react";
import "./Branch.css";

class Branch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
			artist: this.props.artist,
			length: this.props.length,
			danceability: this.props.danceability,
			explicit: this.props.explicit,
		};
	}

	render() {
		return (
			<div className="Branch">
				<h3>{this.state.title}</h3>
				<p>{this.state.artist}</p>
			</div>
		);
	}
}

export default Branch;
