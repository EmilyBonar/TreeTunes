import React from "react";
import Branch from "./Branch";
import "./Tree.css";

// Sample ID: 5xif4sULGuWiZDVCcjNXxR
class Tree extends React.Component {
	render() {
		console.log("Rendering Tree...");
		//console.log(this.props.playlist);
		//
		if (this.props.playlist && this.props.features) {
			return (
				<ul className="Tree">
					{this.props.playlist.map((song) => {
						console.log(song);
						const songFeatures = this.props.features.find(
							(element) => element.id === song.track.id,
						);
						console.log(songFeatures);
						//console.log(song.track.artists[0].name);
						return (
							<li>
								<Branch song={song.track} features={songFeatures} />
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
