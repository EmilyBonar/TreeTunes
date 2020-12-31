import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Chart from "./Chart.js";

export default function App() {
	return (
		<Router>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/results/:url">
					<Results />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

function Home() {
	const [url, setUrl] = useState("");
	return (
		<div className="flex fixed top-1/2 w-full flex-wrap justify-center">
			<input
				className="flex-grow rounded m-2 p-4 text-2xl"
				placeholder="Enter a Spotify playlist URL"
				onInput={(e) => setUrl(e.target.value.split("/"))}
			></input>
			<Link to={`/results/${url}`} className="bg-white m-2 p-4 text-xl rounded">
				Results
			</Link>
		</div>
	);
}

function Results() {
	const [playlist, setPlaylist] = useState([]);
	let { url } = useParams();
	useEffect(() => {
		getPlaylist(url).then((data) => {
			let playlist = [];
			for (let i = 0; i < data.playlist.length; i++) {
				playlist.push({
					track: data.playlist[i].track,
					features: data.features[i],
				});
			}
			setPlaylist(playlist);
		});
	}, [url]);
	return (
		<>
			<Link to="/" className="p-2">
				←Try another playlist
			</Link>
			<Chart playlist={playlist} />
		</>
	);
}

async function getPlaylist(url) {
	url = url.split(",");
	const id = url[url.indexOf("playlist") + 1].split("?")[0];
	let result = await fetch(
		`https://tunes.emilybonar.com/.netlify/functions/getSpotifyData?id=${id}`,
	)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((error) => {
			console.error(error);
		});
	return await result;
}
