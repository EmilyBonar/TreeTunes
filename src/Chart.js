import React, { useEffect, useState } from "react";

export default function Chart(props) {
	const [feature, setFeature] = useState("danceability");

	let vertical = false;
	const size = useWindowSize();
	if (size.width > 1024) {
		vertical = true;
	}
	let elementArray = props.playlist
		.sort((a, b) => a.features[feature] - b.features[feature])
		.map((song) => (
			<ChartElement song={song} feature={feature} vertical={vertical} />
		));
	let features = [
		"danceability",
		"acousticness",
		"instrumentalness",
		"liveness",
		"speechiness",
		"valence",
		"energy",
	];
	return (
		<div className="mt-4">
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
			<div className="flex lg:items-end lg:flex-row flex-col lg:divide-x-2 divide-y-2 lg:h-4/5 h-screen mt-4 lg:absolute lg:bottom-0 lg:w-5/6">
				<div className="lg:h-full border-gray-600 flex lg:flex-col flex-row-reverse border-b-2 lg:border-b-0 lg:border-r-2 text-right">
					<p className="flex-grow relative top-0">100%</p>
					<p className="flex-grow">80%</p>
					<p className="flex-grow">60%</p>
					<p className="flex-grow">40%</p>
					<p className="flex-grow">20%</p>
					<p className="relative bottom-0">0%</p>
				</div>
				{elementArray}
			</div>
		</div>
	);
}

class ChartElement extends React.Component {
	get value() {
		return this.props.song.features[this.props.feature];
	}
	render() {
		const vertical = this.props.vertical;
		const features = this.props.song.features;
		const feature = this.props.feature;
		return (
			<div
				className="bg-blue-400 w-5 flex-grow hover:bg-blue-600 group"
				style={
					vertical
						? { height: features[feature] * 100 + "%" }
						: { width: features[feature] * 100 + "%" }
				}
			>
				<p className="relative bottom-10 w-max hidden group-hover:block group-hover:bg-white opacity-80 p-2">
					{this.props.song.track.name}
				</p>
			</div>
		);
	}
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
