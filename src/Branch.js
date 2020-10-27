import React from "react";
import "./Branch.css";

class Branch extends React.Component {
	constructor(props) {
		super(props);
		let song = this.props.song;
		let features = this.props.features;
		this.state = {
			title: song.name,
			artist: song.artists[0].name,
			duration: song.duration_ms,
			danceability: features.danceability,
		};
	}

	render() {
		return (
			<div
				className="Branch"
				data-title={this.state.title}
				data-artist={this.state.artist}
				data-duration={this.state.duration}
				data-danceability={this.state.danceability}
				style={{
					backgroundColor: `rgb(${
						255 * Number.parseFloat(this.state.danceability)
					}, 0, 255)`,
					height: `${this.state.duration / 3000}px`,
					width: `${this.state.duration / 3000}px`,
				}}
			></div>
		);
	}
}

export default Branch;
