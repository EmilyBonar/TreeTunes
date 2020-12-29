import { useState, useEffect } from "react";

export default function Chart(props) {
	const [feature, setFeature] = useState("danceability");

	let vertical = false;
	const size = useWindowSize();
	if (size.width > 1024) {
		vertical = true;
	}
	let elementArray = props.playlist.map((song) => (
		<ChartElement song={song} feature={feature} vertical={vertical} />
	));
	let features = ["danceability", "acousticness", "track length"];
	return (
		<div>
			<select
				onChange={(e) => {
					setFeature(e.target.value);
				}}
			>
				{features.map((feature) => {
					return (
						<option value={feature}>
							{feature
								.split(" ")
								.map((s) => s.charAt(0).toUpperCase() + s.substring(1))
								.join(" ")}
						</option>
					);
				})}
			</select>
			<div className="flex lg:items-end lg:flex-row flex-col lg:divide-x-2 divide-y-2 lg:h-96 h-screen mt-4 lg:absolute lg:bottom-0 lg:w-5/6">
				{elementArray}
			</div>
		</div>
	);
}

function ChartElement(props) {
	const song = props.song;
	const vertical = props.vertical;
	const feature = props.feature;
	let size;
	switch (feature) {
		case "danceability":
			size = song.features.danceability * 100;
			break;
		case "acousticness":
			size = song.features.acousticness * 100;
			break;
		case "track length":
			size = song.track.duration_ms / 4000;
			break;
		default:
			break;
	}
	return (
		<div
			className="bg-blue-400 w-5 flex-grow hover:bg-blue-600 group"
			style={vertical ? { height: size + "%" } : { width: size + "%" }}
		>
			<p className="relative w-max hidden group-hover:block group-hover:bg-white opacity-80 p-2">
				{song.track.name}
			</p>
		</div>
	);
}

function useWindowSize() {
	// Initialize state with undefined width/height so server and client renders match

	// Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/

	const [windowSize, setWindowSize] = useState({
		width: undefined,

		height: undefined,
	});

	useEffect(() => {
		// Handler to call on window resize

		function handleResize() {
			// Set window width/height to state

			setWindowSize({
				width: window.innerWidth,

				height: window.innerHeight,
			});
		}

		// Add event listener

		window.addEventListener("resize", handleResize);

		// Call handler right away so state gets updated with initial window size

		handleResize();

		// Remove event listener on cleanup

		return () => window.removeEventListener("resize", handleResize);
	}, []); // Empty array ensures that effect is only run on mount

	return windowSize;
}
