import Branch from "./Branch";

const branches = [<Branch value={"Song"} />, <Branch value={"Song"} />];

function Tree() {
	return <div className="Tree">{branches}</div>;
}

export default Tree;
