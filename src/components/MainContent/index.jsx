import React, { Component } from "react";
import Sidebar from "./SideBar";

class MainContent extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<main>
					<h2>Content heading</h2>
					<p>Lorem asdadasfasdad</p>
				</main>
				<section>
					<Sidebar />
				</section>
			</>
		);
	}
}

export default MainContent;
