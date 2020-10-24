import Tree from "./Tree";
import "./App.css";

function getPlaylist(e) {
	e.preventDefault();
	const url = document.querySelector(".playlist-input").value.split("/");
	const id = url[url.indexOf("playlist") + 1].split("?")[0];
	fetch(
		`https://us-central1-centering-star-293515.cloudfunctions.net/getSpotifyData/${id}`,
	)
		.then((response) => response.json())
		.then((data) => console.log(data));
}

function App() {
	let playlistEntered = false;
	if (playlistEntered) {
		return (
			<div className="App">
				<Tree />
			</div>
		);
	} else {
		return (
			<div className="App">
				<form className="playlist-form">
					<input
						className="playlist-input"
						placeholder="Enter a Spotify playlist URL"
					></input>
					<button className="playlist-submit" onClick={(e) => getPlaylist(e)}>
						Enter
					</button>
				</form>
			</div>
		);
	}
}

export default App;
