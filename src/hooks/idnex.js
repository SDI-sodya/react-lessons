import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";

export function useClicker() {
	const [clicks, setClicks] = useState();

	function handleClick() {
		setClicks((clicks) => clicks + 1);
	}

	useEffect(() => {
		document.body.addEventListener("click", handleClick);

		return () => {
			document.body.removeEventListener("click", handleClick);
		};
	}, []);

	return clicks;
}
