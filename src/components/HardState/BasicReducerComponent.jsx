import React, { useReducer } from "react";

const initialState = {
	isBordered: true,
};

// prevState or state
function reducer(prevState, action) {
	// if (action === "change border plz") {

	// }

	const newState = {
		isBordered: !prevState.isBordered,
	};

	return newState;
}

const BasicReducerComponent = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const divStyles = {
		border: `20px solid ${state.isBordered ? "black" : "transparent"}`,
	};

	function handleClick() {
		const action = "change border plz";
		dispatch(action);
	}

	return (
		<div style={divStyles}>
			<p>lorem</p>
			<button onClick={handleClick}>Toggle border visibility</button>
		</div>
	);
};

export default BasicReducerComponent;
