import React from "react";
import Tree from "./Tree";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playlistEntered: false,
			tree: null,
		};
	}

	async getPlaylist(e) {
		e.preventDefault();
		const url = document.querySelector(".playlist-input").value.split("/");
		const id = url[url.indexOf("playlist") + 1].split("?")[0];
		fetch(`${window.location.href}.netlify/functions/getSpotifyData?id=${id}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				//console.log(data); // --> this correctly returns an array
				const newTree = <Tree playlist={data} />;
				this.setState({ tree: newTree });
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		if (this.state.playlistEntered) {
			return <div className="App">{this.state.tree}</div>;
		} else {
			return (
				<div className="App">
					<form className="playlist-form">
						<input
							className="playlist-input"
							placeholder="Enter a Spotify playlist URL"
						></input>
						<button
							className="playlist-submit"
							onClick={(e) => {
								this.getPlaylist(e);
								this.setState({ playlistEntered: true });
								//console.log(playlist);
							}}
						>
							Enter
						</button>
					</form>
				</div>
			);
		}
	}
}

export default App;
