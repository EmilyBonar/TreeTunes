import React from "react";
import Branch from "./Branch";
import "./Tree.css";

// Sample ID: 5xif4sULGuWiZDVCcjNXxR
class Tree extends React.Component {
	render() {
		console.log("Rendering Tree...");
		console.log(this.props.playlist);
		if (this.props.playlist) {
			return (
				<ul className="Tree">
					{this.props.playlist.map((song) => {
						console.log(song);
						console.log(song.track.name);
						return (
							<li>
								<Branch title={song.track.name} />
							</li>
						);
					})}
				</ul>
			);
		} else {
			return <p>Nothing found.</p>;
		}
	}
}

export default Tree;
