import React from "react";

const List = (props) => {
	console.log(props);
	const { children, listName } = "List name";
	return (
		<div>
			<h2>{listName}</h2>
			<ul>{children}</ul>
		</div>
	);
};
