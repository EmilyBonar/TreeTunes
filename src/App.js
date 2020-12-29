import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
	return (
		<Router>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/results">
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
	return (
		<div>
			<input></input>
			<Link to="/results">Results</Link>
		</div>
	);
}

function Results() {
	return <Link to="/">Try another playlist</Link>;
}
