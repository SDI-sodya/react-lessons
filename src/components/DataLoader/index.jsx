import React, { Component } from "react";

/*
  1 завантажити дані
  2. це компонент сам не буде відмальовувати дані
*/
class DataLoader extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: false,
			isError: false,
		};
	}

	load = async () => {
		this.setState({ isLoading: true });

		try {
			const res = await fetch("/posts.json");
			const data = await res.json();
			this.setState({
				data,
			});
		} catch (error) {
			this.setState({ isError: true });
		} finally {
			this.setState({
				isLoading: false,
			});
		}
	};

	componentDidMount() {
		this.load();
	}

	render() {
		return <div></div>;
	}
}

export default DataLoader;
