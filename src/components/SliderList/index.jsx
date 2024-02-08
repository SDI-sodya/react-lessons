import React, { Component } from "react";
import styles from "./sliderList.module.css";

class SliderContant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [
				{
					id: 0,
					src: "https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-saturn.jpg?t=tn992",
					title: "Saturn",
					text: "Hubble captured exquisite views of Saturn’s ring system and atmospheric details that once could only be provided by spacecraft visiting the distant world.",
				},
				{
					id: 1,
					src: "https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-milky-way-bulge.jpg?t=tn992",
					title: "Milky Way Bulge",
					text: "The Milky Way’s bulge is a crowded and dynamic region of variously aged stars zipping around at different speeds at the heart of our galaxy.",
				},
				{
					id: 2,
					src: "https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-bubble-nebula.jpg?t=tn992",
					title: "Bubble Nebula",
					text: "Hubble captured an enormous bubble being blown into space by a super-hot, massive star.",
				},
			],
		};
	}

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
