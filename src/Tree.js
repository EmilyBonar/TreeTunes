import Branch from "./Branch";
import React from "react";

const branches = [<Branch value={"Song"} />, <Branch value={"Song"} />];

class Tree extends React.Component {
	constructor(props) {
		super(props);
		this.state = { playlist: props.value };
	}
	render() {
		return (
			<div className="Tree">
				{this.state.playlist.forEach((element) => {
					return <p>test</p>;
				})}
			</div>
		);
	}
}

export default Tree;
