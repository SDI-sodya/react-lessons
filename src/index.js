import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const htmlContainer = document.getElementById("root");

// const root = ReactDOM.createRoot(htmlContainer);
// const reactPar = React.createElement(
// 	"p",
// 	{ className: "text" },
// 	"Hello from React!"
// );

// console.log(reactPar);

// // const root = document.getElementById("root");

// // const par = document.createElement("p");
// // par.classList.add("text");
// // par.textContent = "some text";

// // root.append(par);

// class Heading extends React.Component {
// 	render() {
// 		return <h1>Some heading</h1>;
// 	}
// }

// function HeadingFunction() {
// 	return <h1>Some heading func</h1>;
// }

// const headerComponent = <Heading />;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
