import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from "react-router-dom";
import React, { useEffect, useState } from "react";

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
			<Link
				to={`/results/${url}`}
				className="bg-white m-2 p-4 text-xl rounded"
				//onClick={getPlaylist}
			>
				Results
			</Link>
		</div>
	);
}

function Results() {
	const [playlist, setPlaylist] = useState({ playlist: [] });
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
	console.log(playlist);
	return (
		<>
			<Link to="/">Try another playlist</Link>
			<div></div>
		</>
	);
}

async function getPlaylist(url) {
	url = url.split(",");
	const id = url[url.indexOf("playlist") + 1].split("?")[0];
	let result = await fetch(`../.netlify/functions/getSpotifyData?id=${id}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			//console.log(data); // --> this correctly returns an array
			// const newTree = (
			// 	<Tree playlist={data.playlist} features={data.features} />
			// );
			// this.setState({ tree: newTree });
			return data;
		})
		.catch((error) => {
			console.error(error);
		});
	//console.log(result);
	return await result;
}
