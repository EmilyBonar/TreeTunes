import Branch from "./Branch";
import React from "react";

const branches = [<Branch value={"Song"} />, <Branch value={"Song"} />];

class Tree extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return <div className="Tree">{branches}</div>;
	}
}

export default Tree;
