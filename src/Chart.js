export default function Chart(props) {
	let elementArray = props.playlist.map((song) => <ChartElement song={song} />);
	return (
		<div>
			<select>
				<option value="danceability">Danceability</option>
				<option value="acousticness">Acousticness</option>
				<option value="track length">Track Length</option>
			</select>
			<div className="flex lg:items-end lg:flex-row flex-col lg:divide-x-2 divide-y-2">
				{elementArray}
			</div>
		</div>
	);
}

function ChartElement(props) {
	const song = props.song;
	const vertical = props.vertical;
	return (
		<div
			className="bg-blue-400 w-5 flex-grow"
			style={{ height: `${song.features.danceability * 500}px` }}
		></div>
	);
}
