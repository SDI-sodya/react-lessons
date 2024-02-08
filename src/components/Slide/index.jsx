import React, { Component } from "react";

class SliderContant extends Component {
	render() {
		const { id, src, title, text } = this.state;
		return (
			<div key={id}>
				<img src={src} alt={title} />
				<p>{text}</p>
			</div>
		);
	}
}

export default SliderContant;
