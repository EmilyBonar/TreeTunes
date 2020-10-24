import Tree from "./Tree";
import "./App.css";

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
					<button className="playlist-submit">Enter</button>
				</form>
			</div>
		);
	}
}

export default App;
