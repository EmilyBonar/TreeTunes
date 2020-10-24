import React from "react";

class Branch extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
			artist: this.props.artist,
			length: this.props.length,
			danceability: this.props.danceability,
		};
	}

	render() {
		return (
			<div className="Branch">
				<h2>{this.state.title}</h2>
				<p>{this.state.artist}</p>
				<ColoredLine color="red" />
			</div>
		);
	}
}

const ColoredLine = ({ color }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 5,
			transform: "rotate(45deg)",
			width: 50,
		}}
	/>
);

export default Branch;
