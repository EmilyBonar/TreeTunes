import React from "react";

// Sample ID: 5xif4sULGuWiZDVCcjNXxR
class Tree extends React.Component {
	render() {
		console.log("Rendering Tree...");
		console.log(this.props.playlist);
		if (this.props.playlist) {
			return (
				<div className="Tree">
					{this.props.playlist.map((song) => {
						console.log(song);
						console.log(song.track.name);
						return <p>{song.track.name}</p>;
					})}
				</div>
			);
		} else {
			return <p>Nothing found.</p>;
		}
	}
}

export default Tree;
