import React from 'react';
import "./style.css";
import NavList from '../NavList';

class Header extends React.Component {
	render() {
		return (
			<header>
				<h1>Our site</h1>
				<NavList />
			</header>
		);
	}
}

export default Header;