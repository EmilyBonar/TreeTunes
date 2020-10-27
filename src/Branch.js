import React from "react";
import "./Branch.css";

class Branch extends React.Component {
	constructor(props) {
		super(props);
		let song = this.props.song;
		this.state = {
			title: song.name,
			artist: song.artists[0].name,
			//length: this.props.length,
			//danceability: this.props.danceability,
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
