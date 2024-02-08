import React, { Component } from "react";
import styles from "./slider.module.css";
import SliderContant from "../SliderList";

class Slider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [
				{
					id: 0,
					src: "https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-saturn.jpg?t=tn992",
					title: "Saturn",
					text: "Hubble captured exquisite views of Saturn’s ring system and atmospheric details that once could only be provided by spacecraft visiting the distant world.",
					isShow: true,
				},
				{
					id: 1,
					src: "https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-milky-way-bulge.jpg?t=tn992",
					title: "Milky Way Bulge",
					text: "The Milky Way’s bulge is a crowded and dynamic region of variously aged stars zipping around at different speeds at the heart of our galaxy.",
					isShow: false,
				},
				{
					id: 2,
					src: "https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-bubble-nebula.jpg?t=tn992",
					title: "Bubble Nebula",
					text: "Hubble captured an enormous bubble being blown into space by a super-hot, massive star.",
					isShow: false,
				},
			],
			slideNumber: 0,
			isSwitchOn: false,
			slideShowTimer: 1000,
		};
	}

	switchSlideShowState() {
		this.setState({
			isSwitchOn: !this.state.isSwitchOn,
		});
		let slideShow;
		if (!this.state.isSwitchOn) {
			slideShow = setInterval(
				() => this.handleChangeSlide(true),
				this.state.slideShowTimer
			);
		} else {
			clearInterval(slideShow);
		}
	}

	handleChangeSlide = (isNext) => {
		const { images, slideNumber } = this.state;

		if (isNext) {
			this.setState({
				slideNumber: slideNumber < images.length - 1 ? slideNumber + 1 : 0,
			});
		} else {
			this.setState({
				slideNumber: slideNumber > 0 ? slideNumber - 1 : images.length - 1,
			});
		}
	};

	render() {
		const { images, slideNumber, isSwitchOn, slideShowTimer } = this.state;

		return (
			<div className="container">
				<article className={styles.container}>
					<div className={styles.slideImage}>
						<img
							src={images[slideNumber].src}
							alt={images[slideNumber].title}
						/>
					</div>
					<nav className={styles.sliderNavTimer}>
						<button onClick={() => this.switchSlideShowState()}>
							Switch {this.state.isSwitchOn ? "on" : "false"}
						</button>
						<input
							type="checkbox"
							name="slideShow"
							id="slideShow"
							checked={isSwitchOn}
						/>
						<input type="text" placeholder={slideShowTimer} />
					</nav>
					<nav className={styles.sliderSwitchNav}>
						<button
							onClick={() => this.handleChangeSlide(false)}
							className={styles.arrows}
						>
							Back
						</button>
						<button
							onClick={() => this.handleChangeSlide(true)}
							className={styles.arrows}
						>
							Next
						</button>
					</nav>
					<div className={styles.slideAbout}>
						<p>{images[slideNumber].text}</p>
					</div>
				</article>
			</div>
		);
	}
}

export default Slider;
