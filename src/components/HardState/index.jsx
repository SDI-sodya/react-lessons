import React, { useEffect, useReducer, useState } from "react";

const initialState = {
	number: 0,
	coords: {
		x: 0,
		y: 0,
	},
};

const HardState = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	function reducer(state, action) {
		const newState = { ...state };
		return newState;
	}

	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const [number, setNumbers] = useState(1);

	function handleChange({ target: { value } }) {
		setNumbers(+value);
	}

	function HandleCoords({ clientX, clientY }) {
		setCoords({
			x: clientX,
			y: clientY,
		});
	}

	useEffect(() => {
		document.body.addEventListener("mousemove", HandleCoords);
		return () => {
			document.body.removeEventListener("mousemove", HandleCoords);
		};
	}, []);

	return (
		<div>
			<p>X: {}</p>
			<p>Y: {}</p>
			<p>
				Square value of {} is {}
			</p>
			<label>
				<input type="number" />
			</label>
		</div>
	);
};

export default HardState;
