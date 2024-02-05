import React, { Component } from "react";
import { UserContext } from "./contexts";
import Slider from "./components/Slider";
import { BrowserRouter, Switch } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import HardState from "./components/HardState";
// import UserLoader from "./components/UserLoader";

// import { format, addSeconds, add } from "date-fns";

class App extends Component {
	constructor(props) {
		super(props);

		// this.state = {
		// 	date: new Date(0, 0, 0, 0, 0, 0),
		// };

		// this.state = {
		// 	user: {
		// 		id: 1233443,
		// 		firstName: "User",
		// 		lastName: "Test",
		// 		imgSrc: "pic.jpg",
		// 		theme: "light",
		// 	},
		// };
	}

	// start = () => {
	// 	if (!this.intervalId) {
	// 		this.intervalId = setInterval(this.tick, 1000);
	// 	}
	// };

	// stop = () => {
	// 	clearInterval(this.intervalId);
	// 	this.intervalId = null;
	// };

	// tick = () => {
	// 	const { date } = this.state;

	// 	// const newDate = addSeconds(date, 1);

	// 	const newDate = add(date, { seconds: 1 });

	// 	this.setState({
	// 		date: newDate,
	// 	});
	// };

	render() {
		// const { date } = this.state;
		// const timeText = format(date, "HH:mm:ss");

		return (
			<>
				<BrowserRouter>
					{/*завжди малюэться*/}
					<h1>not header</h1>
					{/* малювати за умовою, повёзаною з URL */}
					<Switch>
						{/* конкретний маршрут, світч відмальовує перший маршрут, який задовольняє URL */}
						<Route exact path="/">
							<HomePage />
						</Route>
					</Switch>

					<Route exact path="/contacts">
						<ContactsPage />
					</Route>

					<Route exact path="/about">
						<AboutPage />
					</Route>
					<HardState />
				</BrowserRouter>
				{/* <UserContext.Provider value={user}>
					<Header />
					<MainContent />
				</UserContext.Provider> */}
				{/* <DataLoader /> */}
				{/* <UserLoader /> */}
				{/* <Slider /> */}
				{/* <LoginForm /> */}
				{/* <p>{timeText}</p>
				<button onClick={this.start}>Start</button>
				<button onClick={this.stop}>Stop</button> */}
			</>
		);
	}
}

function HomePage() {
	return (
		<div>
			<h2>Home page</h2>
		</div>
	);
}

function ContactsPage() {
	return (
		<div>
			<h2>Contacts page</h2>
		</div>
	);
}

function AboutPage() {
	return (
		<div>
			<h2>About page</h2>
		</div>
	);
}

export default App;
