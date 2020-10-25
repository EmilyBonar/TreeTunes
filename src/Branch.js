import React from "react";

class Branch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
			artist: this.props.artist,
			length: this.props.length,
			danceability: this.props.danceability,
		};
	}

	render() {
		return (
			<div className="Branch">
				<h2>{this.state.title}</h2>
				<p>{this.state.artist}</p>
			</div>
		);
	}
}

export default Branch;
