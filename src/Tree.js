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
				<>
					<h1>
						Size is proportional to song duration, lightness is proportional to
						danceability
					</h1>
					<ul className="Tree">
						{this.props.playlist.map((song) => {
							const songFeatures = this.props.features.find(
								(element) => element.id === song.track.id,
							);
							return (
								<li>
									<Branch song={song.track} features={songFeatures} />
								</li>
							);
						})}
					</ul>
				</>
			);
		} else {
			return <p>Nothing found.</p>;
		}
	}
}

export default Tree;
